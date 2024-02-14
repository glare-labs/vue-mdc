<template>
    <div
        :class="[style.checkbox, ...containerClasses]"
        v-bind="$attrs"
        data-am-checkbox
    >

        <Ripple></Ripple>

        <div :class="style.outline"></div>
        <div :class="style.background"></div>

        <input
            :class="[style.input]"
            type="checkbox"
            :checked="state.checked"
            :aria-checked="state.checked"
            :disabled="props.disabled"
            :aria-disabled="props.disabled"
            @input="handleInput"
            @change=""
        />

        <svg
            :class="style.icon"
            viewBox="0 0 18 18"
            aria-hidden="true"
        >
            <rect :class="[style.mark, style.short]"></rect>
            <rect :class="[style.mark, style.long]"></rect>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Ripple from '../ripple/Ripple.vue'
import type { ICheckbox } from './Checkbox.type'
import { watch } from 'vue'
import { useCssModule } from 'vue'


const props = withDefaults(defineProps<Partial<ICheckbox>>(), {
    disabled: false,
    modelValue: false,
    indeterminate: false,
})

const emits = defineEmits<{
    'update:modelValue': [boolean]
}>()


const state = ref({
    prevChecked: false,
    prevDisabled: false,
    prevIndeterminate: false,
    checked: props.modelValue,
    indeterminate: props.indeterminate,
})

watch(() => props.modelValue, () => {
    state.value.checked = props.modelValue
    emits('update:modelValue', state.value.checked)
})

const style = useCssModule('Checkbox')
const containerClasses = computed(() => {
    const prevNone = !state.value.prevChecked && !state.value.prevIndeterminate
    const prevChecked = state.value.prevChecked && !state.value.prevIndeterminate
    const prevIndeterminate = state.value.prevIndeterminate
    const isChecked = state.value.checked && !state.value.indeterminate
    const isIndeterminate = state.value.indeterminate

    return ([
        props.disabled && style['disabled'],
        isChecked || isIndeterminate && style.selected,
        !isChecked && style.isIndeterminate && style.unselected,
        isChecked && style.checked,
        isIndeterminate && style.indeterminate,
        prevNone && style['prev-unselected'],
        prevChecked && style['prev-checked'],
        prevIndeterminate && style['prev-indeterminate'],
        state.value.prevDisabled && style['prev-disabled'],
    ])
})

const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    state.value.checked = target.checked
    state.value.indeterminate = target.indeterminate
}
</script>

<style module="Checkbox">
.checkbox {
    --_checkbox-container-shape: var(--mamv-checkbox-container-shape, 2px);
    --_checkbox-container-size: var(--mamv-checkbox-container-size, 18px);
    --_checkbox-container-height: var(--mamv-checkbox-container-height, var(--_checkbox-container-size));
    --_checkbox-container-width: var(--mamv-checkbox-container-width, var(--_checkbox-container-size));
    --_checkbox-container-opacity: var(--mamv-checkbox-container-opacity, var(--_current-checkbox-container-opacity));
    --_checkbox-selected-container-color: var(--mamv-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));
    --_checkbox-outline-color: var(--mamv-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));
    --_checkbox-outline-width: var(--mamv-checkbox-outline-width, 2px);
    --_checkbox-outline-opacity: var(--mamv-checkbox-outline-opacity, var(--_current-checkbox-outline-opacity, 1));
    --_checkbox-icon-size: var(--mamv-checkbox-icon-size, 18px);
    --_checkbox-selected-icon-color: var(--mamv-checkbox-icon-color, var(--md-sys-color-on-primary, #fff));


    border-radius: inherit;
    display: flex;
    place-content: center;
    place-items: center;
    position: relative;
    width: var(--_checkbox-container-width);
    height: var(--_checkbox-container-height);
    border-radius: var(--_checkbox-container-shape);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.checkbox[touch-target="wrapper"] {
    margin: max(0px, (48px - var(--_checkbox-container-size, 18px))/2);
}

.input {
    appearance: none;
    height: 48px;
    margin: 0;
    opacity: 0;
    outline: none;
    position: absolute;
    width: 48px;
    z-index: 1;
    cursor: inherit;
    box-sizing: border-box;
    background-color: initial;
    padding: initial;
    border: initial;
    -webkit-tap-highlight-color: transparent;
}

[touch-target="wrapper"] .input {
    height: 100%;
    width: 100%;
}

.outline,
.background,
.icon {
    position: absolute;
    inset: 0;
}

.outline,
.background {
    border-radius: inherit;
}

.outline {
    border-color: var(--_checkbox-outline-color);
    border-width: var(--_checkbox-outline-width);
    opacity: var(--_checkbox-outline-opacity);
    border-style: solid;
    box-sizing: border-box;
}

.background {
    background-color: var(--_checkbox-selected-container-color);
    opacity: var(--_checkbox-container-opacity, 0);
}

.background,
.icon {
    opacity: 0;
    transition-duration: 150ms, 50ms;
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15), linear;
    transform: scale(0.6);
}

.checked :is(.background, .icon),
:where(.selected) :is(.background, .icon) {
    opacity: 1;
    transition-duration: 350ms, 50ms;
    transition-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1), linear;
    transform: scale(1);
}

.icon {
    fill: var(--_checkbox-selected-icon-color);
    height: var(--_checkbox-icon-size);
    width: var(--_checkbox-icon-size);
    /* overflow-clip-margin: content-box; */
    /* overflow: hidden; */
}

:not(svg) {
    transform-origin: 0px 0px;
}

.mark.short {
    height: 2px;
    width: 2px;
    transition-property: transform, height;
}

.mark.long {
    height: 2px;
    width: 10px;
    transition-property: transform, width;
}

.mark {
    animation-duration: 150ms;
    animation-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15);
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.3, 0, 0.8, 0.15);
}

.selected .mark {
    animation-duration: 350ms;
    animation-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1);
    transition-duration: 350ms;
    transition-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1);
}

.checked .mark,
.prev-checked.unselected .mark {
    transform: scaleY(-1) translate(7px, -14px) rotate(45deg);
}

.checked .mark.short,
.prev-checked.unselected .mark.short {
    height: 5.6568542495px;
}

.checked .mark.long,
.prev-checked.unselected .mark.long {
    width: 11.313708499px;
}

.indeterminate .mark,
.prev-indeterminate.unselected .mark {
    transform: scaleY(-1) translate(4px, -10px) rotate(0deg);
}


.prev-unselected .mark {
    transition-property: none;
}

.prev-unselected.checked .mark.long {
    animation-name: prev-unselected-to-checked;
}

:where(.disabled, .prev-disabled) :is(.background, .icon, .mark) {
    animation-duration: 0s;
    transition-duration: 0s;
}

:where(.selected.disabled) .outline {
    visibility: hidden;
}

.disabled {
    --_checkbox-selected-container-color: var(--md-sys-color-on-surface);
    --_current-checkbox-container-opacity: 0.3;
    --_checkbox-outline-color: var(--md-sys-color-on-surface);
    --_current-checkbox-outline-opacity: 0.3;
}

@keyframes prev-unselected-to-checked {
    from {
        width: 0;
    }
}

.disabled {
    cursor: default;
}
</style>
