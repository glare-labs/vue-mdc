<template>
    <ClassProvider v-slot="{ surface, hover, pressed }">
        <span
            ref="instance"
            :class="[surface, (!props.disabled && rippleState.hover) && hover, (!props.disabled && rippleState.pressed) && pressed]"
            @click="handleClick"
            @pointerenter="handlePointerenter"
            @pointerleave="handlePointerleave"
            @pointerup="handlePointerup"
            @pointerdown="handlePointerdown"
        ></span>
    </ClassProvider>
</template>

<script setup lang="ts">
import ClassProvider from './ClassProvider.vue'
import { tokens } from '../../utils/tokens'
import { ref } from 'vue'
import type { IRipple } from './Ripple.type'

const props = withDefaults(
    defineProps<IRipple>(),
    {
        disabled: false
    }
)

const instance = ref<HTMLElement | null>(null)

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
const rippleState = ref({
    hover: false,
    pressed: false,
    state: State.INACTIVE,
    rippleStartEvent: null as PointerEvent | null | undefined,
})
let initialSize = 0
let rippleScale = ''
let rippleSize = ''
let growAnimation = null as Animation | null

/**
 * Event handles
 */
const handlePointerenter = () => {
    if (props.disabled) return
    rippleState.value.hover = true
}
const handlePointerleave = () => {
    if (props.disabled) return
    rippleState.value.hover = false
    if (rippleState.value.state !== State.INACTIVE) {
        endPressAnimation()
    }
}
const handlePointerup = () => {
    if (props.disabled) return
    if (rippleState.value.state === State.HOLDING) {
        rippleState.value.state = State.WAITING_FOR_CLICK
        return
    }
    if (rippleState.value.state === State.TOUCH_DELAY) {
        rippleState.value.state = State.WAITING_FOR_CLICK
        startPressAnimation(rippleState.value.rippleStartEvent || undefined)
        return
    }
}
const handlePointerdown = async (event: PointerEvent) => {
    if (props.disabled) return
    rippleState.value.rippleStartEvent = event
    if (!isTouch(event)) {
        rippleState.value.state = State.WAITING_FOR_CLICK
        startPressAnimation(event)
        return
    }
    // Wait for a hold after touch delay
    rippleState.value.state = State.TOUCH_DELAY
    await new Promise((resolve) => {
        setTimeout(resolve, TOUCH_DELAY_MS)
    })
    if (rippleState.value.state !== State.TOUCH_DELAY) return
    rippleState.value.state = State.HOLDING
    startPressAnimation(event)
}
const handleClick = () => {
    if (props.disabled) return
    if (rippleState.value.state === State.WAITING_FOR_CLICK) {
        endPressAnimation()
        return
    }
    if (rippleState.value.state === State.INACTIVE) {
        // keyboard synthesized click event
        startPressAnimation()
        endPressAnimation()
    }
}

/**
 * Animations about
 */
const startPressAnimation = (positionEvent?: Event) => {
    rippleState.value.pressed = true
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
            easing: tokens.motion.easing.standard,
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
    rippleState.value.state = State.INACTIVE
    const animation = growAnimation
    let pressAnimationPlayState = Infinity
    if (typeof animation?.currentTime === 'number') {
        pressAnimationPlayState = animation.currentTime
    } else if (animation?.currentTime) {
        pressAnimationPlayState = animation.currentTime.to('ms').value
    }

    if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
        rippleState.value.pressed = false
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

    rippleState.value.pressed = false
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
</script>

<style scoped>
</style>
