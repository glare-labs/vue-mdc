import { PropType, defineComponent } from 'vue'
import css from './Ripple.module.css'
import { EMotionEasing } from '../../utils/tokens'
import { AttachableController } from '../../utils/attachable-controller'
import { isServer } from '../../utils/is-server'

export const RippleTouchedEvent = new Event("ripple-touched")

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * @link
 * https://github.com/material-components/material-web/blob/main/ripple/internal/ripple.ts
 */


enum State {
    /**
     * Initial state of the control, no touch in progress.
     *
     * Transitions:
     *   - on touch down: transition to `TOUCH_DELAY`.
     *   - on mouse down: transition to `WAITING_FOR_CLICK`.
     */
    INACTIVE,
    /**
     * Touch down has been received, waiting to determine if it's a swipe or
     * scroll.
     *
     * Transitions:
     *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
     *   - on cancel: transition to `INACTIVE`.
     *   - after `Configuration.touchDelayMs`: begin press; transition to `HOLDING`.
     */
    TOUCH_DELAY,
    /**
     * A touch has been deemed to be a press
     *
     * Transitions:
     *  - on up: transition to `WAITING_FOR_CLICK`.
     */
    HOLDING,
    /**
     * The user touch has finished, transition into rest state.
     *
     * Transitions:
     *   - on click end press; transition to `INACTIVE`.
     */
    WAITING_FOR_CLICK,
}

const Configuration = {
    pressGrowMs: 550,
    minimumPressMs: 250,
    initialOriginScale: 0.2,
    padding: 10,
    softEdgeMinimumSize: 75,
    softEdgeContainerRadio: 0.35,
    pressPseudo: '::after',
    animationFill: 'forwards' as FillMode,
    touchDelayMs: 150,
}

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

const Props = {
    disabled: {
        default: false,
        type: Boolean as PropType<boolean>,
    },
}

export const Ripple = defineComponent({
    name: 'GlareUi-Ripple',
    props: Props,
    data(vm) {
        return {
            attachableController: null as null | AttachableController,
            state: {
                hover: false,
                pressed: false,
                rippleState: State.INACTIVE,
                rippleStartEvent: null as PointerEvent | null | undefined,
            },
            checkBoundsAfterContextMenu: false,
            initialSize: 0,
            rippleScale: '',
            rippleSize: '',
            growAnimation: null as Animation | null,
        }
    },
    computed: {
        root(): HTMLElement {
            return this.$el
        },
    },
    mounted() {
        this.attachableController = new AttachableController(this.root, this.onControlChange.bind(this))
    },
    methods: {
        onControlChange(prev: HTMLElement | null, next: HTMLElement | null) {
            if (isServer) return
            for (const event of Events) {
                prev?.removeEventListener(event, this.handleEvent)
                next?.addEventListener(event, this.handleEvent)
            }
        },
        /**
         * Event handles
         */
        handlePointerenter() {
            if (this.disabled) return
            this.state.hover = true
        },
        handlePointerleave() {
            if (this.disabled) return
            this.state.hover = false
            if (this.state.rippleState !== State.INACTIVE) {
                this.endPressAnimation()
            }
        },
        handlePointerup() {
            if (this.disabled) return
            if (this.state.rippleState === State.HOLDING) {
                this.state.rippleState = State.WAITING_FOR_CLICK
                return
            }
            if (this.state.rippleState === State.TOUCH_DELAY) {
                this.state.rippleState = State.WAITING_FOR_CLICK
                this.startPressAnimation(this.state.rippleStartEvent || undefined)
                return
            }
        },
        async handlePointerdown(event: PointerEvent) {
            if (this.disabled) return
            this.state.rippleStartEvent = event
            if (!this.isTouch(event)) {
                this.state.rippleState = State.WAITING_FOR_CLICK
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
            this.state.rippleState = State.TOUCH_DELAY
            await new Promise((resolve) => {
                setTimeout(resolve, Configuration.touchDelayMs)
            })
            if (this.state.rippleState !== State.TOUCH_DELAY) return
            this.state.rippleState = State.HOLDING
            this.startPressAnimation(event)
        },
        handlePointercancel(event: PointerEvent) {
            if (!this.shouldReactToEvent(event)) return
            this.endPressAnimation()
        },
        handleClick() {
            if (this.disabled) return
            if (this.state.rippleState === State.WAITING_FOR_CLICK) {
                this.endPressAnimation()
                return
            }
            if (this.state.rippleState === State.INACTIVE) {
                // keyboard synthesized click event
                this.startPressAnimation()
                this.endPressAnimation()
            }
        },
        handleContextmenu() {
            if (this.disabled) return
            this.checkBoundsAfterContextMenu = true
            this.endPressAnimation()
        },
        /**
         * Animations about
         */
        startPressAnimation(positionEvent?: Event) {
            this.state.pressed = true
            this.growAnimation?.cancel()
            this.determineRippleSize()
            const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent)!
            const translateStart = `${startPoint.x}px, ${startPoint.y}px`
            const translateEnd = `${endPoint.x}px, ${endPoint.y}px`

            if (this.root === null) return
            this.growAnimation = this.root.animate(
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
                    pseudoElement: Configuration.pressPseudo,
                    duration: Configuration.pressGrowMs,
                    easing: EMotionEasing.standard,
                    fill: Configuration.animationFill,
                },
            )
        },
        getTranslationCoordinates(positionEvent?: Event) {
            if (this.root === null) return
            const { height, width } = this.root.getBoundingClientRect()
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
        },
        getNormalizedPointerEventCoords(pointerEvent: PointerEvent) {
            if (this.root === null) return
            const { scrollX, scrollY } = window
            const { left, top } = this.root.getBoundingClientRect()
            const documentX = scrollX + left
            const documentY = scrollY + top
            const { pageX, pageY } = pointerEvent
            return { x: pageX - documentX, y: pageY - documentY }
        },
        async endPressAnimation() {
            this.state.rippleState = State.INACTIVE
            const animation = this.growAnimation
            let pressAnimationPlayState = Infinity
            if (typeof animation?.currentTime === 'number') {
                pressAnimationPlayState = animation.currentTime
            } else if (animation?.currentTime) {
                pressAnimationPlayState = animation.currentTime.to('ms').value
            }

            if (pressAnimationPlayState >= Configuration.minimumPressMs) {
                this.state.pressed = false
                return
            }

            await new Promise((resolve) => {
                setTimeout(resolve, Configuration.minimumPressMs - pressAnimationPlayState)
            })

            if (this.growAnimation !== animation) {
                // A new press animation was started. The old animation was canceled and
                // should not finish the pressed state.
                return
            }

            this.state.pressed = false
        },
        determineRippleSize() {
            if (this.root === null) return
            const { height, width } = this.root.getBoundingClientRect()
            const maxDim = Math.max(height, width)
            const softEdgeSize = Math.max(
                Configuration.softEdgeContainerRadio * maxDim,
                Configuration.softEdgeMinimumSize,
            )

            const initialSizeNew = Math.floor(maxDim * Configuration.initialOriginScale)
            const hypotenuse = Math.sqrt(width ** 2 + height ** 2)
            const maxRadius = hypotenuse + Configuration.padding

            this.initialSize = initialSizeNew
            this.rippleScale = `${(maxRadius + softEdgeSize) / this.initialSize}`
            this.rippleSize = `${this.initialSize}px`
        },
        // @ts-ignore
        inBounds({ x, y }: PointerEvent) {
            if (this.root === null) return
            const { top, left, bottom, right } = this.root.getBoundingClientRect()
            return x >= left && x <= right && y >= top && y <= bottom
        },
        isTouch({ pointerType }: PointerEvent) {
            return pointerType === 'touch'
        },
        shouldReactToEvent(event: PointerEvent) {
            if (this.disabled || !event.isPrimary) return false

            if (
                this.state.rippleStartEvent &&
                this.state.rippleStartEvent.pointerId !== event.pointerId
            ) {
                return false
            }

            if (event.type === 'pointerenter' || event.type === 'pointerleave') {
                return !this.isTouch(event)
            }

            const isPrimaryButton = event.buttons === 1
            return this.isTouch(event) || isPrimaryButton
        },
        async handleEvent(e: Event) {
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
    },
    render() {
        return (
            <span
                aria-hidden="true"
                class={[css.surface, this.state.hover && css.hover, this.state.pressed && css.pressed]}
            ></span>
        )
    }
})
