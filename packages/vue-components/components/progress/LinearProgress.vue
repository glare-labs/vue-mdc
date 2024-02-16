<template>
    <div
        :class="[$style.surface, $style.vars, props.indeterminate && $style.indeterminate]"
        role="progressbar"
        aria-valuemin="0"
        :aria-valuemax="props.max"
        :aria-valuenow="props.indeterminate ? 0 : value"
        data-am-linear-progress
    >
        <div
            v-show="shouldHideDots"
            :class="$style.dots"
        ></div>
        <div
            :class="$style.background"
            :style="dotStyles"
        ></div>
        <div
            :class="[$style.bar, $style['primary-bar']]"
            :style="progressStyles"
        >
            <div :class="$style['bar-inner']"></div>
        </div>
        <div :class="[$style.bar, $style['secondary-bar']]">
            <div :class="$style['bar-inner']"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { type ILinearProgressProps } from './LinearProgress.type'

const props = withDefaults(defineProps<Partial<ILinearProgressProps>>(), {
    buffer: 1,
    max: 1,
    indeterminate: false,
    value: 0,
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

const progressStyles = computed(() => ({
    transform: `scaleX(${(props.indeterminate ? 1 : value.value / props.max) * 100}%)`
}))
const dotStyles = computed(() => ({
    transform: `scaleX(${(props.indeterminate ? 1 : props.buffer / props.max) * 100}%)`
}))
const shouldHideDots = computed(() => props.indeterminate || props.buffer >= props.max || value.value >= props.max)
</script>

<style module>
.vars {
    --_linear-progress-indicator-height: var(--mamv-linear-progress-indicator-height, var(--_current-linear-progress-indicator-height, 4px));
    --_linear-progress-indicator-color: var(--mamv-linear-progress-indicator-color, var(--_current-linear-progress-indicator-color, var(--md-sys-color-primary, #6750a4)));
    --_linear-progress-indicator-shape: var(--mamv-linear-progress-indicator-shape, var(--_current-linear-progress-indicator-shape, 9999px));
    --_linear-progress-background-color: var(--mamv-linear-progress-background-color, var(--_current-linear-progress-background-color, var(--md-sys-color-surface-container-highest, #e6e0e9)));
    --_linear-progress-background-height: var(--mamv-linear-progress-background-height, var(--_current-linear-progress-background-height, 4px));
    --_linear-progress-background-shape: var(--mamv-linear-progress-background-shape, var(--_current-linear-progress-background-shape, 9999px));
}

.surface {
    position: relative;
    direction: ltr;
    display: flex;
    align-items: center;
    border-radius: var(--_linear-progress-background-shape, inherit);
    overflow: hidden;
    min-width: 80px;
    height: var(--_linear-progress-background-height);
    contain: strict;
    content-visibility: auto;
}

.background {
    position: absolute;
    inset: 0;
    background: var(--_linear-progress-background-color);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.6, 1);
    transform-origin: left center;
    border-radius: inherit;
}

.bar {
    position: absolute;
    animation: none;
    width: 100%;
    border-radius: inherit;
    height: var(--_linear-progress-indicator-height);
    transform-origin: left center;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.6, 1);
    height: var(--_linear-progress-background-height);

}

.bar-inner {
    position: absolute;
    inset: 0;
    background: var(--_linear-progress-indicator-color);
    animation: none;
    height: var(--_linear-progress-background-height);
    border-radius: var(--_linear-progress-indicator-shape, inherit);
}

.secondary-bar {
    display: none;
}

.dots {
    position: absolute;
    inset: 0;
    animation: linear infinite 250ms;
    animation-name: buffering;
    background-color: var(--_linear-progress-background-color);
    background-repeat: repeat-x;
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");
    z-index: -1;
    border-radius: inherit;
}

.indeterminate .bar {
    transition: none;
}

.indeterminate .primary-bar {
    inset-inline-start: -145.167%;
}

.indeterminate .secondary-bar {
    inset-inline-start: -54.8889%;
    display: block;
}

.indeterminate .primary-bar {
    animation: linear infinite 2s;
    animation-name: primary-indeterminate-translate;
}

.indeterminate .primary-bar>.bar-inner {
    animation: linear infinite 2s primary-indeterminate-scale;
}



.indeterminate .secondary-bar {
    animation: linear infinite 2s;
    animation-name: secondary-indeterminate-translate;
}

.indeterminate .secondary-bar>.bar-inner {
    animation: linear infinite 2s secondary-indeterminate-scale;
}


.surface:dir(rtl) {
    transform: scale(-1);
}

@keyframes primary-indeterminate-scale {
    0% {
        transform: scaleX(0.08);
    }

    36.65% {
        animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
        transform: scaleX(0.08);
    }

    69.15% {
        animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
        transform: scaleX(0.661479);
    }

    100% {
        transform: scaleX(0.08);
    }
}

@keyframes secondary-indeterminate-scale {
    0% {
        animation-timing-function: cubic-bezier(0.205028,
                0.057051,
                0.57661,
                0.453971);
        transform: scaleX(0.08);
    }

    19.15% {
        animation-timing-function: cubic-bezier(0.152313,
                0.196432,
                0.648374,
                1.00432);
        transform: scaleX(0.457104);
    }

    44.15% {
        animation-timing-function: cubic-bezier(0.257759,
                -0.003163,
                0.211762,
                1.38179);
        transform: scaleX(0.72796);
    }

    100% {
        transform: scaleX(0.08);
    }
}

@keyframes buffering {
    0% {
        transform: translateX(calc(var(--_linear-progress-background-height) / 2 * 5));
    }
}

@keyframes primary-indeterminate-translate {
    0% {
        transform: translateX(0px);
    }

    20% {
        animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        transform: translateX(0px);
    }

    59.15% {
        animation-timing-function: cubic-bezier(0.302435,
                0.381352,
                0.55,
                0.956352);
        transform: translateX(83.6714%);
    }

    100% {
        transform: translateX(200.611%);
    }
}

@keyframes secondary-indeterminate-translate {
    0% {
        animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
        transform: translateX(0px);
    }

    25% {
        animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
        transform: translateX(37.6519%);
    }

    48.35% {
        animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
        transform: translateX(84.3862%);
    }

    100% {
        transform: translateX(160.278%);
    }
}
</style>
