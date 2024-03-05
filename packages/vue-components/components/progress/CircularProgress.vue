<template>
    <div
        :class="[$style.surface, props.indeterminate && $style.indeterminate]"
        role="progressbar"
        aria-valuemin="0"
        :aria-valuemax="props.max"
        :aria-valuenow="props.indeterminate ? 0 : value"
        data-am-circular-progress
    >
        <div
            v-if="props.indeterminate"
            :class="$style.spinner"
        >
            <div :class="$style.left">
                <div :class="$style.circle"></div>
            </div>
            <div :class="$style.right">
                <div :class="$style.circle"></div>
            </div>
        </div>

        <svg
            v-else
            viewBox="0 0 4800 4800"
        >
            <circle
                :class="$style.track"
                pathLength="100"
            ></circle>
            <circle
                :class="$style['active-track']"
                path-length="100"
                :stroke-dashoffset="(1 - value / props.max) * 100"
            ></circle>
        </svg>
    </div>
</template>

<script
    setup
    lang="ts"
>
import { ref, watch } from 'vue'
import type { ICircularProgressProps } from './CircularProgress.type'

const props = withDefaults(defineProps<Partial<ICircularProgressProps>>(), {
    max: 1,
    indeterminate: false,
    value: 0.25,
    modelValue: (p) => p.value!,
})
const emits = defineEmits<{
    'update:modelValue': [e: number]
}>()

const value = ref(props.value)
const setValue = (e: number) => {
    value.value = e
    emits('update:modelValue', value.value)
}
watch(() => props.modelValue, () => {
    setValue(props.modelValue)
}, { immediate: true })

</script>

<style module>
.surface {
    --_circular-progress-container-size: var(--mamv-circular-progress-container-size, 48px);
    --_circular-progress-indicator-color: var(--mamv-circular-progress-indicator-color, var(--md-sys-color-primary, #6750a4));
    --_circular-progress-indicator-width: var(--mamv-circular-progress-indicator-width, 10);

    width: var(--_circular-progress-container-size);
    height: var(--_circular-progress-container-size);

    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    contain: strict;
    flex: 1;
    /* align-self: stretch; */
    vertical-align: middle;
    margin: 4px;
}

.spinner,
.left,
.right,
.circle,
.surface svg,
.track,
.active-track,
circle {
    position: absolute;
    inset: 0;
}

.surface svg {
    transform: rotate(-90deg);
    width: 100%;
    height: 100%;
    display: block;
}

.surface circle {
    /* cx: 50%;
    cy: 50%;
    r: calc(50% * (1 - var(--_circular-progress-indicator-width)) / 100);
    stroke-width: calc(var(--_circular-progress-indicator-width) * 1%);
    stroke-dasharray: 100;
    fill: transparent; */
    display: block;
    background-color: rgb(254 226 226);
    width: 36px;
    height: 36px;
}

.active-track {
    transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
    stroke: var(--_circular-progress-indicator-color);
}

.track {
    stroke: transparent;
}

.surface.indeterminate {
    animation: linear infinite linear-rotate;
    animation-duration: 1568.2352941176ms;
}

.spinner {
    animation: infinite both rotate-arc;
    animation-duration: 5332ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.left {
    overflow: hidden;
    inset: 0 50% 0 0;
}

.right {
    overflow: hidden;
    inset: 0 0 0 50%;
}

.circle {
    box-sizing: border-box;
    border-radius: 50%;
    animation: expand-arc;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-duration: 1333ms, 5332ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    border: solid calc(var(--_circular-progress-indicator-width)/100*(var(--_circular-progress-container-size) - 8px));
    border-color: var(--_circular-progress-indicator-color) var(--_circular-progress-indicator-color) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
}

.left .circle {
    rotate: 135deg;
    inset: 0 -100% 0 0;
}

.right .circle {
    rotate: 100deg;
    inset: 0 0 0 -100%;
    animation-delay: -666.5ms, 0ms;
}

@keyframes expand-arc {
    0% {
        transform: rotate(265deg);
    }

    50% {
        transform: rotate(130deg);
    }

    100% {
        transform: rotate(265deg);
    }
}

@keyframes rotate-arc {
    12.5% {
        transform: rotate(135deg);
    }

    25% {
        transform: rotate(270deg);
    }

    37.5% {
        transform: rotate(405deg);
    }

    50% {
        transform: rotate(540deg);
    }

    62.5% {
        transform: rotate(675deg);
    }

    75% {
        transform: rotate(810deg);
    }

    87.5% {
        transform: rotate(945deg);
    }

    100% {
        transform: rotate(1080deg);
    }
}

@keyframes linear-rotate {
    to {
        transform: rotate(360deg);
    }
}
</style>
