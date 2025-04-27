/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * @link
 * https://github.com/material-components/material-web/blob/main/ripple/internal/ripple.ts
 */

import { AttachableController } from '../../internals'
import { EMotionEasing } from '../../utils'
import { RippleConfiguration } from './ripple-configuration'
import { RippleState } from './ripple-state'

/**
 * Events that the ripple listens to.
 */
const Events = [
    'click',
    'contextmenu',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerup',
]

export class RippleAttachableController extends AttachableController {
    private _hover = false
    private _pressed = false
    private _disabled = false

    public get hover() {
        return this._hover
    }
    private set hover(hover: boolean) {
        if (this._hover === hover) {
            return
        }
        this._hover = hover
        this.host.setAttribute('data-hover', `${hover}`)
    }
    public get pressed() {
        return this._pressed
    }
    private set pressed(pressed: boolean) {
        if (this._pressed === pressed) {
            return
        }
        this._pressed = pressed
        this.host.setAttribute('data-pressed', `${pressed}`)
    }
    public get disabled() {
        return this._host.hasAttribute('disabled')
    }

    private state = RippleState.INACTIVE
    private startEvent: null | PointerEvent = null
    private checkBoundsAfterContextMenu = false
    private initialSize = 0
    private rippleScale = ''
    private rippleSize = ''
    private growAnimation: null | Animation = null

    constructor(_host: HTMLElement) {
        super(_host, (prev: HTMLElement | null, next: HTMLElement | null) => {
            if (typeof window === 'undefined') {
                return
            }
            for (const event of Events) {
                prev?.removeEventListener(event, this.handleEvent)
                next?.addEventListener(event, this.handleEvent)
            }
        })
    }

    /**
     * Event handles
     */
    private handlePointerenter() {
        if (this.disabled) return
        this.hover = true
    }
    private handlePointerleave() {
        if (this.disabled) return
        this.hover = false
        if (this.state !== RippleState.INACTIVE) {
            this.endPressAnimation()
        }
    }
    private handlePointerup() {
        if (this.disabled) return
        if (this.state === RippleState.HOLDING) {
            this.state = RippleState.WAITING_FOR_CLICK
            return
        }
        if (this.state === RippleState.TOUCH_DELAY) {
            this.state = RippleState.WAITING_FOR_CLICK
            this.startPressAnimation(this.startEvent || undefined)
            return
        }
    }
    private async handlePointerdown(event: PointerEvent) {
        if (this.disabled) return
        this.startEvent = event
        if (!this.isTouch(event)) {
            this.state = RippleState.WAITING_FOR_CLICK
            this.startPressAnimation(event)
            return
        }
        // after a longpress contextmenu event, an extra `pointerdown` can be
        // dispatched to the pressed element. Check that the down is within
        // bounds of the element in this case.
        if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
            return
        }

        this.checkBoundsAfterContextMenu = false

        // Wait for a hold after touch delay
        this.state = RippleState.TOUCH_DELAY
        await new Promise((resolve) => {
            setTimeout(resolve, RippleConfiguration.touchDelayMs)
        })
        if (this.state !== RippleState.TOUCH_DELAY) return
        this.state = RippleState.HOLDING
        this.startPressAnimation(event)
    }
    private handlePointercancel(event: PointerEvent) {
        if (!this.shouldReactToEvent(event)) return
        this.endPressAnimation()
    }
    private handleClick() {
        if (this.disabled) return
        if (this.state === RippleState.WAITING_FOR_CLICK) {
            this.endPressAnimation()
            return
        }
        if (this.state === RippleState.INACTIVE) {
            // keyboard synthesized click event
            this.startPressAnimation()
            this.endPressAnimation()
        }
    }
    private handleContextmenu() {
        if (this.disabled) return
        this.checkBoundsAfterContextMenu = true
        this.endPressAnimation()
    }
    /**
     * Animations about
     */
    private startPressAnimation(positionEvent?: Event) {
        this.pressed = true
        this.growAnimation?.cancel()
        this.determineRippleSize()
        const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent)!
        const translateStart = `${startPoint.x}px, ${startPoint.y}px`
        const translateEnd = `${endPoint.x}px, ${endPoint.y}px`

        if (this.host === null) return
        this.growAnimation = this.host.animate(
            {
                top: [0, 0],
                left: [0, 0],
                height: [this.rippleSize, this.rippleSize],
                width: [this.rippleSize, this.rippleSize],
                transform: [
                    `translate(${translateStart}) scale(1)`,
                    `translate(${translateEnd}) scale(${this.rippleScale})`,
                ],
            },
            {
                pseudoElement: RippleConfiguration.pressPseudo,
                duration: RippleConfiguration.pressGrowMs,
                easing: EMotionEasing.Standard,
                fill: RippleConfiguration.animationFill,
            },
        )
    }
    private getTranslationCoordinates(positionEvent?: Event) {
        if (this.host === null) return
        const { height, width } = this.host.getBoundingClientRect()
        // end in the center
        const endPoint = {
            x: (width - this.initialSize) / 2,
            y: (height - this.initialSize) / 2,
        }
        let startPoint = {
            x: width / 2,
            y: height / 2,
        }
        if (positionEvent instanceof PointerEvent) {
            startPoint = this.getNormalizedPointerEventCoords(positionEvent)!
        }

        // center around start point
        startPoint = {
            x: startPoint.x - this.initialSize / 2,
            y: startPoint.y - this.initialSize / 2,
        }

        return { startPoint, endPoint }
    }
    private getNormalizedPointerEventCoords(pointerEvent: PointerEvent) {
        if (this.host === null) return
        const { scrollX, scrollY } = window
        const { left, top } = this.host.getBoundingClientRect()
        const documentX = scrollX + left
        const documentY = scrollY + top
        const { pageX, pageY } = pointerEvent
        return { x: pageX - documentX, y: pageY - documentY }
    }
    private async endPressAnimation() {
        this.state = RippleState.INACTIVE
        const animation = this.growAnimation
        let pressAnimationPlayState = Infinity
        if (typeof animation?.currentTime === 'number') {
            pressAnimationPlayState = animation.currentTime
        } else if (animation?.currentTime) {
            pressAnimationPlayState = animation.currentTime.to('ms').value
        }

        if (pressAnimationPlayState >= RippleConfiguration.minimumPressMs) {
            this.pressed = false
            return
        }

        await new Promise((resolve) => {
            setTimeout(resolve, RippleConfiguration.minimumPressMs - pressAnimationPlayState)
        })

        if (this.growAnimation !== animation) {
            // A new press animation was started. The old animation was canceled and
            // should not finish the pressed state.
            return
        }

        this.pressed = false
    }
    private determineRippleSize() {
        if (this.host === null) return
        const { height, width } = this.host.getBoundingClientRect()
        const maxDim = Math.max(height, width)
        const softEdgeSize = Math.max(
            RippleConfiguration.softEdgeContainerRadio * maxDim,
            RippleConfiguration.softEdgeMinimumSize,
        )

        const initialSizeNew = Math.floor(maxDim * RippleConfiguration.initialOriginScale)
        const hypotenuse = Math.sqrt(width ** 2 + height ** 2)
        const maxRadius = hypotenuse + RippleConfiguration.padding

        this.initialSize = initialSizeNew
        this.rippleScale = `${(maxRadius + softEdgeSize) / this.initialSize}`
        this.rippleSize = `${this.initialSize}px`
    }
    // @ts-ignore
    private inBounds({ x, y }: PointerEvent) {
        if (this.host === null) return
        const { top, left, bottom, right } = this.host.getBoundingClientRect()
        return x >= left && x <= right && y >= top && y <= bottom
    }
    private isTouch({ pointerType }: PointerEvent) {
        return pointerType === 'touch'
    }
    private shouldReactToEvent(event: PointerEvent) {
        if (this.disabled || !event.isPrimary) return false

        if (
            this.startEvent &&
            this.startEvent.pointerId !== event.pointerId
        ) {
            return false
        }

        if (event.type === 'pointerenter' || event.type === 'pointerleave') {
            return !this.isTouch(event)
        }

        const isPrimaryButton = event.buttons === 1
        return this.isTouch(event) || isPrimaryButton
    }
    private handleEvent = async (e: Event) => {
        switch (e.type) {
            case 'click':
                this.handleClick()
                break
            case 'contextmenu':
                this.handleContextmenu()
                break
            case 'pointercancel':
                this.handlePointercancel(e as PointerEvent)
                break
            case 'pointerdown':
                await this.handlePointerdown(e as PointerEvent)
                break
            case 'pointerenter':
                this.handlePointerenter()
                break
            case 'pointerleave':
                this.handlePointerleave()
                break
            case 'pointerup':
                this.handlePointerup()
                break
            default:
                break
        }
    }
}
