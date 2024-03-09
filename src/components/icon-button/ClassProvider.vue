<template>
    <slot
        :surface="[$style.surface, $style[props.appearance]]"
        :toggle="[$style.toggle]"
        :unselected="[$style.unselected]"
        :selected="[$style.selected]"
        :background="[$style.background]"
        :outline="[$style.outline]"
        :touch="[$style.touch]"
        :disabled="[$style.disabled]"
    ></slot>
</template>

<script setup lang="ts">
import type { IIconButton } from './IconButton.type'

const props = defineProps<Required<IIconButton>>()
</script>

<style module>
.surface {
    --_icon-button-container-width: var(--mamv-icon-button-container-width, var(--_current-icon-button-container-width, 40px));
    --_icon-button-container-height: var(--mamv-icon-button-container-height, var(--_current-icon-button-container-height, 40px));
    --_icon-button-container-color: var(--mamv-icon-button-container-color, var(--_current-icon-button-container-color, transparent));
    --_icon-button-container-opacity: var(--mamv-icon-button-container-opacity, var(--_current-icon-button-container-opacity, 1));
    --_icon-button-container-shape: var(--mamv-icon-button-container-shape, var(--_current-icon-button-container-shape, 9999px));
    --_icon-button-border-width: var(--mamv-icon-button-border-width, var(--_current-icon-button-border-width, 0));
    --_icon-button-border-color: var(--mamv-icon-button-border-color, var(--_current-icon-button-border-color, var(--md-sys-color-outline, #79747e)));
    --_icon-button-border-opacity: var(--mamv-icon-button-border-opacity, var(--_current-icon-button-border-opacity, 1));
    --_icon-button-icon-color: var(--mamv-icon-button-icon-color, var(--_current-icon-button-icon-color, var(--md-sys-color-on-surface, #1d1b20)));
    --_icon-button-icon-opacity: var(--mamv-icon-button-icon-opacity, var(--_current-icon-button-icon-opacity, 1));

    --_icon-button-ripple-hover-color: var(--mamv-icon-button-ripple-hover-color, var(--_current-icon-button-ripple-hover-color, #49454f));
    --_icon-button-ripple-pressed-color: var(--mamv-icon-button-ripple-pressed-color, var(--_current-icon-button-ripple-pressed-color, #49454f));

    background: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    place-items: center;
    place-content: center;
    justify-content: center;
    outline: none;
    padding: 0;
    position: relative;
    text-decoration: none;
    user-select: none;
    z-index: 0;
    border-radius: var(--_icon-button-container-shape);
    -webkit-tap-highlight-color: transparent;
    height: var(--_icon-button-container-height);
    width: var(--_icon-button-container-width);

    --mamv-icon-color: var(--_icon-button-icon-color);
    --mamv-icon-opacity: var(--_icon-button-icon-opacity);

}

:is(.standard, .filled, .filled-tonal, .outlined):hover {
    --mamv-ripple-hover-color: var(--_icon-button-ripple-hover-color);
}

:is(.standard, .filled, .filled-tonal, .outlined):active {
    --mamv-ripple-pressed-color: var(--_icon-button-ripple-pressed-color);
}


:is(.standard, .outlined):hover {
    --_current-icon-button-ripple-hover-color: var(--md-sys-color-on-surface-variant);
}

:is(.standard, .outlined):active {
    --_current-icon-button-ripple-pressed-color: var(--md-sys-color-on-surface-variant);
}

:is(.filled):hover {
    --_current-icon-button-ripple-hover-color: var(--md-sys-color-on-primary);
}

:is(.filled):active {
    --_current-icon-button-ripple-pressed-color: var(--md-sys-color-on-primary);
}

:is(.filled-tonal):hover {
    --_current-icon-button-ripple-hover-color: var(--md-sys-color-on-secondary-container);
}

:is(.filled-tonal):active {
    --_current-icon-button-ripple-pressed-color: var(--md-sys-color-on-secondary-container);

}


.toggle.unselected:is(.filled):hover {
    --_current-icon-button-ripple-hover-color: var(--md-sys-color-primary);
}

.toggle.unselected:is(.filled):active {
    --_current-icon-button-ripple-pressed-color: var(--md-sys-color-primary);
}

.toggle.selected:is(.filled):hover {
    --_current-icon-button-ripple-hover-color: var(--md-sys-color-on-primary);
}

.toggle.selected:is(.filled):active {
    --_current-icon-button-ripple-pressed-color: var(--md-sys-color-on-primary);
}

.toggle.unselected:is(.filled-tonal):hover {
    --_current-icon-button-ripple-hover-color: var(--md-sys-color-on-surface-variant);
}

.toggle.unselected:is(.filled-tonal):active {
    --_current-icon-button-ripple-pressed-color: var(--md-sys-color-on-surface-variant);
}

.toggle.selected:is(.filled-tonal):hover {
    --_current-icon-button-ripple-hover-color: var(--md-sys-color-on-secondary-container);
}

.toggle.selected:is(.filled-tonal):active {
    --_current-icon-button-ripple-pressed-color: var(--md-sys-color-on-secondary-container);
}


.toggle.selected:is(.outlined):hover {
    --_current-icon-button-ripple-hover-color: var(--md-sys-color-inverse-on-surface);
}

.toggle.selected:is(.outlined):active {
    --_current-icon-button-ripple-pressed-color: var(--md-sys-color-inverse-on-surface);
}

.touch {
    position: absolute;
    height: max(48px, 100%);
    width: max(48px, 100%);
}

.background {
    border-radius: inherit;
    inset: 0;
    position: absolute;
    background-color: var(--_icon-button-container-color);
    opacity: var(--_icon-button-container-opacity);
}

.outline {
    border-radius: inherit;
    border-style: solid;
    box-sizing: border-box;
    inset: 0;
    position: absolute;
    border-width: var(--_icon-button-border-width);
    border-color: var(--_icon-button-border-color);
    opacity: var(--_icon-button-border-opacity);
}

.standard,
.toggle.unselected.standard:not(.disabled) {
    --_current-icon-button-container-color: transparent;
    --_current-icon-button-icon-color: var(--md-sys-color-on-surface-variant);
}

.toggle.selected.standard:not(.disabled) {
    --_current-icon-button-icon-color: var(--md-sys-color-primary);
}

.filled {
    --_current-icon-button-container-color: var(--md-sys-color-primary);
    --_current-icon-button-icon-color: var(--md-sys-color-on-primary);
}

.toggle.unselected.filled:not(.disabled) {
    --_current-icon-button-container-color: var(--md-sys-color-surface-container-highest);
    --_current-icon-button-icon-color: var(--md-sys-color-primary);
}

.toggle.selected.filled:not(.disabled) {
    --_current-icon-button-container-color: var(--md-sys-color-primary);
    --_current-icon-button-icon-color: var(--md-sys-color-on-primary);
}

.filled-tonal {
    --_current-icon-button-container-color: var(--md-sys-color-secondary-container);
    --_current-icon-button-icon-color: var(--md-sys-color-on-secondary-container);
}

.toggle.unselected.filled-tonal:not(.disabled) {
    --_current-icon-button-container-color: var(--md-sys-color-surface-container-highest);
    --_current-icon-button-icon-color: var(--md-sys-color-on-surface-variant);
}

.toggle.selected.filled-tonal:not(.disabled) {
    --_current-icon-button-container-color: var(--md-sys-color-secondary-container);
    --_current-icon-button-icon-color: var(--md-sys-color-on-secondary-container);
}

.outlined,
.toggle.unselected.outlined:not(.disabled) {
    --_current-icon-button-border-width: 1px;
    --_current-icon-button-border-color: var(--md-sys-color-outline);
    --_current-icon-button-container-color: transparent;
}

.toggle.selected.outlined:not(.disabled) {
    --_current-icon-button-container-color: var(--md-sys-color-inverse-surface);
    --_current-icon-button-icon-color: var(--md-sys-color-inverse-on-surface);
}

.disabled,
.disabled:hover,
.disabled:active,
.disabled:focus {
    --_current-icon-button-container-opacity: 0.12;
    --_current-icon-button-icon-opacity: 0.38;
    --_current-icon-button-border-opacity: 0.38;
    --mamv-ripple-hover-opacity: 0;
    --mamv-ripple-pressed-opacity: 0;
    pointer-events: none;
    cursor: default;
}

.disabled.standard {
    --_current-icon-button-icon-color: var(--md-sys-color-on-surface);
}

.disabled.outlined {
    --_current-icon-button-icon-color: var(--md-sys-color-on-surface);
    --_current-icon-button-border-color: var(--md-sys-color-on-surface);
}

.disabled.filled,
.disabled.filled-tonal {
    --_current-icon-button-container-color: var(--md-sys-color-on-surface);
    --_current-icon-button-icon-color: var(--md-sys-color-on-surface);
}
</style>
