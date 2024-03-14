import { defineComponent, onMounted, ref } from 'vue'
import css from './Ripple.module.css'
import { EMotionEasing } from '../../utils/tokens'

export const RippleTouchedEvent = new Event("riprle-touched")

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * @link
 * https://github.com/material-components/material-web/blob/main/ripple/internal/ripple.ts
 */

export const Ripple = defineComponent({
    name: 'GlareUi-Ripple',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    setup(props, ctx) {
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
             *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
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
        const PRESS_GROW_MS = 550
        const MINIMUM_PRESS_MS = 250
        const INITIAL_ORIGIN_SCALE = 0.2
        const PADDING = 10
        const SOFT_EDGE_MINIMUM_SIZE = 75
        const SOFT_EDGE_CONTAINER_RATIO = 0.35
        const PRESS_PSEUDO = '::after'
        const ANIMATION_FILL = 'forwards'
        const TOUCH_DELAY_MS = 150

        /**
         * Events that the ripple listens to.
         */
        // @ts-ignore
        const EVENTS = [
            'click',
            'contextmenu',
            'pointercancel',
            'pointerdown',
            'pointerenter',
            'pointerleave',
            'pointerup',
        ]
        const rippleState = {
            hover: ref(false),
            pressed: ref(false),
            state: State.INACTIVE,
            rippleStartEvent: null as PointerEvent | null | undefined,
        }
        let initialSize = 0
        let rippleScale = ''
        let rippleSize = ''
        let growAnimation = null as Animation | null
        const instance = ref<HTMLElement | null>(null)

        /**
         * Event handles
         */
        const handlePointerenter = () => {
            if (props.disabled) return
            rippleState.hover.value = true
        }
        const handlePointerleave = () => {
            if (props.disabled) return
            rippleState.hover.value = false
            if (rippleState.state !== State.INACTIVE) {
                endPressAnimation()
            }
        }
        const handlePointerup = () => {
            if (props.disabled) return
            if (rippleState.state === State.HOLDING) {
                rippleState.state = State.WAITING_FOR_CLICK
                return
            }
            if (rippleState.state === State.TOUCH_DELAY) {
                rippleState.state = State.WAITING_FOR_CLICK
                startPressAnimation(rippleState.rippleStartEvent || undefined)
                return
            }
        }
        const handlePointerdown = async (event: PointerEvent) => {
            if (props.disabled) return
            rippleState.rippleStartEvent = event
            if (!isTouch(event)) {
                rippleState.state = State.WAITING_FOR_CLICK
                startPressAnimation(event)
                return
            }
            // Wait for a hold after touch delay
            rippleState.state = State.TOUCH_DELAY
            await new Promise((resolve) => {
                setTimeout(resolve, TOUCH_DELAY_MS)
            })
            if (rippleState.state !== State.TOUCH_DELAY) return
            rippleState.state = State.HOLDING
            startPressAnimation(event)
        }
        const handlePointercancel = (event: PointerEvent) => {
            if (!shouldReactToEvent(event)) {
                return
            }

            endPressAnimation()
        }
        const handleClick = () => {
            if (props.disabled) return
            if (rippleState.state === State.WAITING_FOR_CLICK) {
                endPressAnimation()
                return
            }
            if (rippleState.state === State.INACTIVE) {
                // keyboard synthesized click event
                startPressAnimation()
                endPressAnimation()
            }
        }

        /**
         * Animations about
         */
        const startPressAnimation = (positionEvent?: Event) => {
            rippleState.pressed.value = true
            growAnimation?.cancel()
            determineRippleSize()
            const { startPoint, endPoint } = getTranslationCoordinates(positionEvent)!
            const translateStart = `${startPoint.x}px, ${startPoint.y}px`
            const translateEnd = `${endPoint.x}px, ${endPoint.y}px`

            if (instance.value === null) return
            growAnimation = instance.value.animate(
                {
                    top: [0, 0],
                    left: [0, 0],
                    height: [rippleSize, rippleSize],
                    width: [rippleSize, rippleSize],
                    transform: [
                        `translate(${translateStart}) scale(1)`,
                        `translate(${translateEnd}) scale(${rippleScale})`,
                    ],
                },
                {
                    pseudoElement: PRESS_PSEUDO,
                    duration: PRESS_GROW_MS,
                    easing: EMotionEasing.standard,
                    fill: ANIMATION_FILL,
                },
            )
        }
        const getTranslationCoordinates = (positionEvent?: Event) => {
            if (instance.value === null) return
            const { height, width } = instance.value.getBoundingClientRect()
            // end in the center
            const endPoint = {
                x: (width - initialSize) / 2,
                y: (height - initialSize) / 2,
            }
            let startPoint = {
                x: width / 2,
                y: height / 2,
            }
            if (positionEvent instanceof PointerEvent) {
                startPoint = getNormalizedPointerEventCoords(positionEvent)!
            }

            // center around start point
            startPoint = {
                x: startPoint.x - initialSize / 2,
                y: startPoint.y - initialSize / 2,
            }

            return { startPoint, endPoint }
        }
        const getNormalizedPointerEventCoords = (pointerEvent: PointerEvent) => {
            if (instance.value === null) return
            const { scrollX, scrollY } = window
            const { left, top } = instance.value.getBoundingClientRect()
            const documentX = scrollX + left
            const documentY = scrollY + top
            const { pageX, pageY } = pointerEvent
            return { x: pageX - documentX, y: pageY - documentY }
        }
        const endPressAnimation = async () => {
            rippleState.state = State.INACTIVE
            const animation = growAnimation
            let pressAnimationPlayState = Infinity
            if (typeof animation?.currentTime === 'number') {
                pressAnimationPlayState = animation.currentTime
            } else if (animation?.currentTime) {
                pressAnimationPlayState = animation.currentTime.to('ms').value
            }

            if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
                rippleState.pressed.value = false
                return
            }

            await new Promise((resolve) => {
                setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState)
            })

            if (growAnimation !== animation) {
                // A new press animation was started. The old animation was canceled and
                // should not finish the pressed state.
                return
            }

            rippleState.pressed.value = false
        }
        const determineRippleSize = () => {
            if (instance.value === null) return
            const { height, width } = instance.value.getBoundingClientRect()
            const maxDim = Math.max(height, width)
            const softEdgeSize = Math.max(
                SOFT_EDGE_CONTAINER_RATIO * maxDim,
                SOFT_EDGE_MINIMUM_SIZE,
            )

            const initialSizeNew = Math.floor(maxDim * INITIAL_ORIGIN_SCALE)
            const hypotenuse = Math.sqrt(width ** 2 + height ** 2)
            const maxRadius = hypotenuse + PADDING

            initialSize = initialSizeNew
            rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`
            rippleSize = `${initialSize}px`
        }
        // @ts-ignore
        const inBounds = ({ x, y }: PointerEvent) => {
            if (instance.value === null) return
            const { top, left, bottom, right } = instance.value.getBoundingClientRect()
            return x >= left && x <= right && y >= top && y <= bottom
        }
        const isTouch = ({ pointerType }: PointerEvent) => {
            return pointerType === 'touch'
        }
        const shouldReactToEvent = (event: PointerEvent) => {
            if (props.disabled || !event.isPrimary) return false

            if (
                rippleState.rippleStartEvent &&
                rippleState.rippleStartEvent.pointerId !== event.pointerId
            ) {
                return false
            }

            if (event.type === 'pointerenter' || event.type === 'pointerleave') {
                return !isTouch(event)
            }

            const isPrimaryButton = event.buttons === 1
            return isTouch(event) || isPrimaryButton
        }

        return () => (
            <span
                ref={instance}
                class={[css.surface, rippleState.hover.value && css.hover, rippleState.pressed.value && css.pressed]}
                onClickCapture={handleClick}
                onPointercancel={handlePointercancel}
                onPointerenter={handlePointerenter}
                onPointerleave={handlePointerleave}
                onPointerup={handlePointerup}
                onPointerdown={handlePointerdown}
            ></span>
        )
    },
})
