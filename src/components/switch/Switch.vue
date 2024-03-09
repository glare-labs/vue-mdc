<template>
    <div
        v-bind="$attrs"
        :class="[Switch.surface, props.disabled && Switch.disabled, checked ? Switch.selected : Switch.unselected]"
        data-am-switch
        role="switch"
        @click="setChecked(!checked)"
    >

        <input
            :class="Switch.input"
            type="checkbox"
            role="switch"
            :checked="checked"
            :disabled="props.disabled"
            :aria-disabled="props.disabled"
        />

        <!-- Background -->
        <span :class="Switch.background"></span>
        <span :class="Switch.outline"></span>

        <span class="touch"></span>

        <span :class="Switch['handle-container']">
            <Ripple></Ripple>
            <span :class="[Switch.handle, (props.withIconSelectedOnly || props.withIcon) && Switch['with-icon']]">
                <template v-if="props.withIconSelectedOnly || props.withIcon">
                    <div
                        v-if="props.withIconSelectedOnly"
                        :class="Switch.icons"
                    >
                        <slot name="on-icon"></slot>
                        <div
                            v-if="$slots['on-icon'] === undefined"
                            :class="[Switch.icon, Switch['icon--on']]"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
                            </svg>
                        </div>
                    </div>
                    <div v-else="props.withIcon">
                        <slot name="on-icon"></slot>
                        <div
                            v-if="$slots['on-icon'] === undefined"
                            :class="[Switch.icon, Switch['icon--on']]"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
                            </svg>
                        </div>
                        <slot name="off-icon"></slot>
                        <div
                            v-if="$slots['off-icon'] === undefined"
                            :class="[Switch.icon, Switch['icon--off']]"
                        >
                            <svg viewBox="0 0 24 24">
                                <path
                                    d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"
                                />
                            </svg>
                        </div>
                    </div>
                </template>

            </span>
        </span>

    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { type ISwitchProps } from './Switch.type'
import Ripple from '../ripple/Ripple.vue'

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * @link
 * https://github.com/material-components/material-web/tree/main/switch/internal
 */

const props = withDefaults(defineProps<Partial<ISwitchProps>>(), {
    disabled: false,
    defaultSelected: false,
    modelValue: (p) => p.defaultSelected!,
    withIcon: false,
    withIconSelectedOnly: false,
})
const emits = defineEmits<{
    'update:modelValue': [boolean]
}>()

const checked = ref(props.defaultSelected)
const setChecked = (e: boolean) => {
    if (props.disabled) return
    checked.value = e
    emits('update:modelValue', checked.value)
}
watch(() => props.modelValue, () => {
    checked.value = props.modelValue
}, { immediate: true })
</script>

<style module="Switch">
.surface {
    --_switch-background-color: var(--mamv-switch-background-color, var(--_current-switch-background-color, var(--md-sys-color-surface-container-highest)));
    --_switch-background-width: var(--mamv-switch-background-width, var(--_current-switch-background-width, 52px));
    --_switch-background-height: var(--mamv-switch-background-height, var(--_current-switch-background-height, 32px));
    --_switch-background-opacity: var(--mamv-switch-background-opacity, var(--_current-switch-background-opacity, 1));
    --_switch-background-shape: var(--mamv-switch-background-shape, var(--_current-switch-background-shape, 9999px));

    --_switch-border-width: var(--mamv-switch-border-width, var(--_current-switch-border-width, 2px));
    --_switch-border-color: var(--mamv-switch-border-color, var(--_current-switch-border-color, var(--md-sys-color-outline)));
    --_switch-border-opacity: var(--mamv-switch-border-opacity, var(--_current-switch-border-opacity, 1));

    --_switch-handle-shape: var(--mamv-switch-handle-shape, var(--_current-switch-handle-shape, 9999px));
    --_switch-handle-width: var(--mamv-switch-handle-width, var(--_current-switch-handle-width, 16px));
    --_switch-handle-height: var(--mamv-switch-handle-height, var(--_current-switch-handle-height, 16px));
    --_switch-handle-color: var(--mamv-switch-handle-color, var(--_current-switch-handle-color, var(--md-sys-color-outline)));
    --_switch-handle-opacity: var(--mamv-switch-handle-opacity, var(--_current-switch-handle-opacity, 1));

    --_switch-icon-size: var(--mamv-switch-icon-size, var(--_current-switch-icon-size, 16px));
    --_switch-icon-color: var(--mamv-switch-icon-color, var(--_current-switch-icon-color, var(--md-sys-color-surface-container-highest)));


    --_switch-ripple-size: var(--mamv-switch-ripple-size, var(--_current-switch-ripple-size, 40px));

    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(--_switch-background-width);
    height: var(--_switch-background-height);
    border-radius: var(--_switch-background-shape);
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;

    --mamv-ripple-shape: 9999px;
    --mamv-ripple-inset: 1;
    --mamv-ripple-height: var(--_switch-ripple-size);
    --mamv-ripple-width: var(--_switch-ripple-size);
}

.surface[touch-target='wrapper'] {
    margin: max(0px, (48px - var(--_switch-background-height)) / 2) 0px;
}

.input {
    appearance: none;
    height: 48px;
    outline: none;
    margin: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
    cursor: inherit;
}

.surface[touch-target='none'] .input {
    display: none;
}

.background {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-sizing: border-box;
    transition-property: opacity, background-color;
    transition-timing-function: linear;
    transition-duration: 67ms;
    background-color: var(--_switch-background-color);
    opacity: var(--_switch-background-opacity);
}

.outline {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-sizing: border-box;
    transition-property: opacity, border-color;
    transition-timing-function: linear;
    transition-duration: 67ms;
    border-style: solid;
    border-color: var(--_switch-border-color);
    border-width: var(--_switch-border-width);
    opacity: var(--_switch-border-opacity);
}

.handle-container {
    display: flex;
    place-content: center;
    place-items: center;
    position: relative;
    transition: margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.selected .handle-container {
    margin-inline-start: calc(var(--_switch-background-width, 52px) - var(--_switch-background-height, 32px));
}

.unselected .handle-container {
    margin-inline-end: calc(var(--_switch-background-width, 52px) - var(--_switch-background-height, 32px));
}

.handle {
    height: var(--_switch-handle-height);
    width: var(--_switch-handle-width);
    transform-origin: center;
    transition-property: height, width, background-color;
    transition-duration: 250ms, 250ms, 70ms;
    transition-timing-function: cubic-bezier(0.2, 0, 0, 1), cubic-bezier(0.2, 0, 0, 1), cubic-bezier(0.2, 0, 0, 1);
    z-index: 0;
    border-radius: var(--_switch-handle-shape);
    background-color: var(--_switch-handle-color);
    opacity: var(--_switch-handle-opacity);
    display: flex;
    box-sizing: border-box;
}

.icons {
    position: relative;
    height: 100%;
    width: 100%;
}

.icon {
    position: absolute;
    inset: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: currentColor;

    transition: fill 67ms linear, opacity 33ms linear, transform 167ms cubic-bezier(0.2, 0, 0, 1);
    opacity: 0;
}

.icon--off {
    width: var(--_switch-icon-size);
    height: var(--_switch-icon-size);
    color: var(--_switch-icon-color);
}

.icon--on {
    width: var(--_switch-icon-size);
    height: var(--_switch-icon-size);
    color: var(--_switch-icon-color);
}

.selected .icon--on,
.unselected .icon--off {
    opacity: 1;
}

.unselected .handle:not(.with-icon) .icon--on {
    transform: rotate(-45deg);
}

.disabled .icon {
    transition: none;
}

.disabled {
    --_current-switch-border-color: var(--md-sys-color-on-surface);
    --_current-switch-border-opacity: 0.12;
    --_current-switch-background-opacity: 0.12;
    --mamv-ripple-hover-opacity: 0;
    --mamv-ripple-pressed-opacity: 0;
    cursor: default;
}

.disabled.unselected {
    --_current-switch-background-color: var(--md-sys-color-surface-container-highest);
    --_current-switch-handle-color: var(--md-sys-color-on-surface);
    --_current-switch-handle-opacity: 0.38;
}

.disabled.selected {
    --_current-switch-background-color: var(--md-sys-color-on-surface);
    --_current-switch-handle-color: var(--md-sys-color-surface);
    --_current-switch-handle-opacity: 1;
    --_current-switch-handle-height: 24px;
    --_current-switch-handle-width: 24px;
    --_current-switch-border-width: 0px;
}

.disabled .background {
    transition: none;
    background-clip: content-box;
}

.selected.disabled .background {
    background-clip: border-box;
}

.selected:not(.disabled) {
    --_current-switch-handle-height: 24px;
    --_current-switch-handle-width: 24px;
    --_current-switch-border-width: 0px;
    --_current-switch-background-color: var(--md-sys-color-primary);
    --_current-switch-handle-color: var(--md-sys-color-on-primary);
    --_current-switch-icon-color: var(--md-sys-color-on-primary-container);
}

.unselected:has(.with-icon .icon--off) {
    --_current-switch-handle-height: 24px;
    --_current-switch-handle-width: 24px;
}

.selected:not(.disabled):hover,
.selected:not(.disabled):focus-within {
    --_current-switch-handle-color: var(--md-sys-color-primary-container);
}

.unselected:not(.disabled) {
    --_current-switch-border-width: 2px;
    --_current-switch-border-color: var(--md-sys-color-outline);
    --_current-switch-background-color: var(--md-sys-color-surface-container-highest);
}

.unselected:not(.disabled):hover,
.unselected:not(.disabled):focus-visible {
    --_current-switch-handle-color: var(--md-sys-color-on-surface-variant);
}

.selected:not(.disabled):active,
.unselected:not(.disabled):active {
    --_current-switch-handle-height: 28px;
    --_current-switch-handle-width: 28px;
    transition-timing-function: linear;
    transition-duration: 100ms;
}
</style>
