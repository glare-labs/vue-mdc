<template>
    <div
        role="radio"
        data-am-radio
        v-bind="$attrs"
        class="surface"
        :class="[checked && 'checked', props.disabled && 'disabled']"
        @click="setChecked(!checked)"
    >

        <Ripple></Ripple>

        <svg
            class="icon"
            viewBox="0 0 20 20"
        >
            <mask :id="maskId">
                <rect
                    width="100%"
                    height="100%"
                    fill="white"
                />
                <circle
                    cx="10"
                    cy="10"
                    r="8"
                    fill="black"
                />
            </mask>
            <circle
                class="outer circle"
                cx="10"
                cy="10"
                r="10"
                :mask="`url(#${maskId})`"
            />
            <circle
                class="inner circle"
                cx="10"
                cy="10"
                r="5"
            />
        </svg>

        <input
            type="radio"
            class="input"
            tabindex="-1"
            :checked="checked"
            :disabled="props.disabled"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { IRadioProps } from './Radio.type'
import Ripple from '../ripple/Ripple.vue'
import { generateUuid } from '../../utils/uuid'

const props = withDefaults(defineProps<Partial<IRadioProps>>(), {
    disabled: false,
    defaultChecked: false,
    modelValue: (p) => p.defaultChecked!,
})
const emits = defineEmits<{
    'update:modelValue': [boolean]
}>()

const checked = ref(props.defaultChecked)
const setChecked = (e: boolean) => {
    if (props.disabled) return
    checked.value = e
    emits('update:modelValue', checked.value)
}
watch(() => props.modelValue, () => {
    checked.value = props.modelValue
})

/**
 * Unique id for mask.
 */
const maskId = generateUuid()

</script>

<style scoped>
.surface {
    --_radio-icon-color: var(--mamv-radio-icon-color, var(--_current-radio-icon-color, var(--md-sys-color-on-surface-variant)));
    --_radio-selected-icon-color: var(--mamv-radio-selected-icon-color, var(--_current-radio-selected-icon-color, var(--md-sys-color-primary)));
    --_radio-icon-size: var(--mamv-radio-icon-size, var(--_current-radio-icon-size, 24px));

    position: relative;
    display: inline-flex;
    vertical-align: top;
    outline: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    display: flex;
    height: 20px;
    width: 20px;
    place-content: center;
    place-items: center;

    --mamv-ripple-shape: 9999px;
    --mamv-ripple-width: 40px;
    --mamv-ripple-height: 40px;
    --mamv-ripple-inset: 1;
}

.surface:hover {
    --mamv-ripple-hover-color: var(--md-sys-color-on-surface);
}

.surface:active {
    --mamv-ripple-hover-color: var(--md-sys-color-primary);
}

.surface[touch-target="wrapper"] {
    margin: max(0px, (48px - var(--_radio-icon-size, 20px))/2);
}

.input {
    appearance: none;
    height: 48px;
    margin: 0;
    position: absolute;
    width: 48px;
    cursor: inherit;
}

.icon {
    fill: var(--_radio-icon-color);
    inset: 0;
    position: absolute;
}

.outer.circle {
    transition: fill 50ms linear;
}

.inner.circle {
    opacity: 0;
    transform-origin: center;
    transition: opacity 50ms linear;
}

.checked {
    --_current-radio-icon-color: var(--md-sys-color-primary);
}

.checked .icon {
    fill: var(--_radio-selected-icon-color);
}

.checked .inner.circle {
    animation: inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);
    opacity: 1;
}

@keyframes inner-circle-grow {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}


.disabled {
    cursor: default;
    --mamv-ripple-hover-opacity: 0;
    --mamv-ripple-pressed-opacity: 0;
    --_current-radio-icon-color: var(--md-sys-color-on-surface);
    --_current-radio-selected-icon-color: var(--md-sys-color-on-surface);
}

.disabled .icon {
    opacity: 0.38;
}
</style>
