import { defineComponent } from 'vue'
import { props } from './Ripple.type'
import { css } from 'aphrodite/no-important'
import { sharedRippleStyles } from './Ripple.styles'
import { tokens } from '../../../utils/tokens'

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
const PRESS_GROW_MS = 450
const MINIMUM_PRESS_MS = 225
const INITIAL_ORIGIN_SCALE = 0.2
const PADDING = 10
const SOFT_EDGE_MINIMUM_SIZE = 75
const SOFT_EDGE_CONTAINER_RATIO = 0.35
const PRESS_PSEUDO = '::after'
const ANIMATION_FILL = 'forwards'
const TOUCH_DELAY_MS = 150

export const renderRipple = defineComponent({
    name: 'MAMVRipple',
    props,
    computed: {
        classes() {
            return {
                surface: css(
                    sharedRippleStyles.root,
                    this.hovered && sharedRippleStyles.hovered,
                    this.pressed && sharedRippleStyles.pressed,
                    // this.disabled && sharedRippleStyles.disabled,
                ),
            }
        },
    },
    render() {
        return (
            <div
                class={this.classes.surface}
                aria-hidden="true"
                onClick={this.handleClick}
                onPointerenter={this.handlePointerenter}
                onMouseenter={() => this.handlePointerenter()}
                onPointerup={this.handlePointerup}
                onPointerdown={this.handlePointerdown}
                onPointerleave={this.handlePointerleave}
            >
            </div>
        )
    },
    data: () => ({
        hovered: false,
        pressed: false,
        state: State.INACTIVE,
        rippleStartEvent: null as PointerEvent | null | undefined,
        initialSize: 0,
        rippleScale: '',
        rippleSize: '',
        growAnimation: null as Animation | null,
    }),
    methods: {
        handlePointerenter() {
            if (this.disabled) return

            this.hovered = true
        },
        handlePointerleave() {
            if (this.disabled) return

            this.hovered = false
            if (this.state !== State.INACTIVE) {
                this.endPressAnimation()
            }
        },
        handlePointerup() {
            if (this.disabled) return

            if (this.state === State.HOLDING) {
                this.state = State.WAITING_FOR_CLICK
                return
            }
            if (this.state === State.TOUCH_DELAY) {
                this.state = State.WAITING_FOR_CLICK
                this.startPressAnimation(this.rippleStartEvent || undefined)
                return
            }
        },
        async handlePointerdown(event: PointerEvent) {
            if (this.disabled) return

            this.rippleStartEvent = event
            if (!this.isTouch(event)) {
                this.state = State.WAITING_FOR_CLICK
                this.startPressAnimation(event)
                return
            }

            // Wait for a hold after touch delay
            this.state = State.TOUCH_DELAY
            await new Promise((resolve) => {
                setTimeout(resolve, TOUCH_DELAY_MS)
            })

            if (this.state !== State.TOUCH_DELAY) {
                return
            }

            this.state = State.HOLDING
            this.startPressAnimation(event)
        },
        handleClick() {
            if (this.disabled) return

            if (this.state === State.WAITING_FOR_CLICK) {
                this.endPressAnimation()
                return
            }

            if (this.state === State.INACTIVE) {
                // keyboard synthesized click event
                this.startPressAnimation()
                this.endPressAnimation()
            }
        },
        startPressAnimation(positionEvent?: Event) {
            this.pressed = true
            this.growAnimation?.cancel()
            this.determineRippleSize()
            const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent)
            const translateStart = `${startPoint.x}px, ${startPoint.y}px`
            const translateEnd = `${endPoint.x}px, ${endPoint.y}px`

            this.growAnimation = this.$el.animate(
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
                    pseudoElement: PRESS_PSEUDO,
                    duration: PRESS_GROW_MS,
                    easing: tokens.motion.easing.standard,
                    fill: ANIMATION_FILL,
                },
            )
        },
        getTranslationCoordinates(positionEvent?: Event) {
            const { height, width } = this.$el.getBoundingClientRect()
            // end in the center
            const endPoint = {
                x: (width - this.initialSize) / 2,
                y: (height - this.initialSize) / 2,
            }

            let startPoint
            if (positionEvent instanceof PointerEvent) {
                startPoint = this.getNormalizedPointerEventCoords(positionEvent)
            } else {
                startPoint = {
                    x: width / 2,
                    y: height / 2,
                }
            }

            // center around start point
            startPoint = {
                x: startPoint.x - this.initialSize / 2,
                y: startPoint.y - this.initialSize / 2,
            }

            return { startPoint, endPoint }
        },
        getNormalizedPointerEventCoords(pointerEvent: PointerEvent): {
            x: number
            y: number
        } {
            const { scrollX, scrollY } = window
            const { left, top } = this.$el.getBoundingClientRect()
            const documentX = scrollX + left
            const documentY = scrollY + top
            const { pageX, pageY } = pointerEvent
            return { x: pageX - documentX, y: pageY - documentY }
        },
        async endPressAnimation() {
            this.state = State.INACTIVE
            const animation = this.growAnimation
            let pressAnimationPlayState = Infinity
            if (typeof animation?.currentTime === 'number') {
                pressAnimationPlayState = animation.currentTime
            } else if (animation?.currentTime) {
                pressAnimationPlayState = animation.currentTime.to('ms').value
            }

            if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
                this.pressed = false
                return
            }

            await new Promise((resolve) => {
                setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState)
            })

            if (this.growAnimation !== animation) {
                // A new press animation was started. The old animation was canceled and
                // should not finish the pressed state.
                return
            }

            this.pressed = false
        },
        determineRippleSize() {
            const { height, width } = this.$el.getBoundingClientRect()
            const maxDim = Math.max(height, width)
            const softEdgeSize = Math.max(
                SOFT_EDGE_CONTAINER_RATIO * maxDim,
                SOFT_EDGE_MINIMUM_SIZE,
            )

            const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE)
            const hypotenuse = Math.sqrt(width ** 2 + height ** 2)
            const maxRadius = hypotenuse + PADDING

            this.initialSize = initialSize
            this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`
            this.rippleSize = `${initialSize}px`
        },
        inBounds({ x, y }: PointerEvent) {
            const { top, left, bottom, right } = this.$el.getBoundingClientRect()
            return x >= left && x <= right && y >= top && y <= bottom
        },
        isTouch({ pointerType }: PointerEvent) {
            return pointerType === 'touch'
        },
    },
    mounted() {

        /**
         * Make Real DOM can be updated by browser update DOM's properties.
         */
        const observer = new MutationObserver(() => { })

        observer.observe(this.$el, {
            childList: true
        })
    },
})
