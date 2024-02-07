<template>
    <slot
        :surface="[$style.surface, $style[props.appearance]]"
        :background="[$style.background]"
        :button="[$style.button]"
        :outline="[$style.outline]"
        :disabled="[$style.disabled]"
    ></slot>
</template>

<script setup lang="ts">
import { tokens } from '../../utils/tokens'
import type { IButton } from './Button.type'

const props = defineProps<Required<IButton>>()
</script>

<style module>
.surface {

    --_button-container-height: var(--mamv-button-container-height, 40px);
    --_button-container-shape: var(--mamv-button-container-shape, v-bind('tokens.shape.corner.full'));
    --_button-container-color: var(--mamv-button-container-color, var(--_current-button-container-color, transparent));
    --_button-container-opacity: var(--mamv-button-container-opacity, var(--_current-button-container-opacity, 1));
    --_button-label-color: var(--mamv-button-label-color, var(--_current-button-label-color));
    --_button-label-opacity: var(--mamv-button-label-opacity, var(--_current-button-label-opacity, 1));
    --_button-border-width: var(--mamv-button-border-width, var(--_current-button-border-width, 0));
    --_button-border-color: var(--mamv-button-border-color, var(--_current-button-border-color, transparent));
    --_button-border-opacity: var(--mamv-button-border-opacity, var(--_current-button-border-opacity, 1));
    --_button-leading-space: var(--mamv-button-leading-space, var(--_current-button-leading-space, 24px));
    --_button-trailing-space: var(--mamv-button-trailing-space, var(--_current-button-trailing-space, 24px));
    --_button-icon-size: var(--mamv-button-icon-size, var(--_current-button-icon-size, 18px));
    --_button-icon-color: var(--mamv-button-icon-color, var(--_current-button-icon-color, var(--_current-button-label-color)));

    user-select: none;
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    display: inline-flex;
    gap: 8px;
    place-content: center;
    place-items: center;
    position: relative;
    text-overflow: ellipsis;
    text-wrap: nowrap;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    vertical-align: top;
    transition-duration: v-bind('tokens.motion.duration.medium1');
    transition-property: box-shadow;
    transition-timing-function: v-bind('tokens.motion.easing.standard');
    cursor: pointer;
    border-radius: var(--_button-container-shape);
    padding-block: calc(var(--_button-container-height) - max(var(--_label-text-line-height), var(--_icon-size))/2);
    padding-inline-start: var(--_button-leading-space);
    padding-inline-end: var(--_button-trailing-space);
    min-height: var(--_button-container-height);
}

.background {
    background-color: var(--_button-container-color);
    border-radius: inherit;
    inset: 0;
    position: absolute;
    opacity: var(--_button-container-opacity);
}

.outline {
    border-width: var(--_button-border-width);
    border-color: var(--_button-border-color);
    opacity: var(--_button-border-opacity);
    border-radius: inherit;
    border-style: solid;
    box-sizing: border-box;
    position: absolute;
    inset: 0;
}

.button {
    border-radius: inherit;
    cursor: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    appearance: none;
    vertical-align: middle;
    background: rgba(0, 0, 0, 0);
    text-decoration: none;
    min-width: calc(64px - var(--_button-leading-space) - var(--_button-trailing-space));
    width: 100%;
    z-index: 0;
    height: 100%;
    font: inherit;
    color: var(--_button-label-color);
    opacity: var(--_button-label-opacity);
    padding: 0;
    gap: inherit;
    --mamv-icon-color: var(--_button-icon-color);
    --mamv-icon-size: var(--_button-icon-size);
    --mamv-icon-inline-size: var(--_button-icon-size);
    --mamv-icon-block-size: var(--_button-icon-size);
    --mamv-icon-display: inline-flex;
    --mamv-icon-position: relative;
    --mamv-icon-writing-mode: horizontal-tb;
    --mamv-icon-fill: currentColor;
    --mamv-icon-flex-shrink: 0;

    font-size: var(--md-sys-typescale-label-large-font-size);
    line-height: var(--md-sys-typescale-label-large-line-height);
    font-weight: var(--md-sys-typescale-label-large-font-weight);
    letter-spacing: var(--md-sys-typescale-label-large-letter-spacing);
}

:is(.button, .button > .label) {
    text-overflow: inherit;
}

.elevated {
    --_current-button-container-color: v-bind('tokens.color.surface.surfaceContainerLow');
    --_current-button-label-color: v-bind('tokens.color.primary.primary');
}

.filled {
    --_current-button-container-color: v-bind('tokens.color.primary.primary');
    --_current-button-label-color: v-bind('tokens.color.primary.onPrimary');
}

.filled-tonal {
    --_current-button-container-color: v-bind('tokens.color.secondary.secondaryContainer');
    --_current-button-label-color: v-bind('tokens.color.secondary.onSecondaryContainer');

}

.outlined {
    --_button-border-color: v-bind('tokens.color.outline.outline');
    --_button-border-width: 1px;
    --_current-button-label-color: v-bind('tokens.color.primary.primary');
}

.text {
    --_current-button-label-color: v-bind('tokens.color.primary.primary');
}

:is(.filled, .filled-tonal):hover {
    --mamv-elevation-level: v-bind('tokens.elevation.level1');
}

:is(.filled, .filled-tonal):active {
    --mamv-elevation-level: v-bind('tokens.elevation.level0');
}


:is(.elevated):hover {
    --mamv-elevation-level: v-bind('tokens.elevation.level2');
}

:is(.elevated),
:is(.elevated):active {
    --mamv-elevation-level: v-bind('tokens.elevation.level1');
}

:is(.filled):hover,
:is(.filled):active {
    --mamv-ripple-hover-color: v-bind('tokens.color.primary.onPrimary');
    --mamv-ripple-pressed-color: v-bind('tokens.color.primary.onPrimary');
}

:is(.elevated, .outlined, .text):hover,
:is(.elevated, .outlined, .text):active {
    --mamv-ripple-hover-color: v-bind('tokens.color.primary.primary');
    --mamv-ripple-pressed-color: v-bind('tokens.color.primary.primary');
}

:is(.filled-tonal):hover,
:is(.filled-tonal):active {
    --mamv-ripple-hover-color: v-bind('tokens.color.secondary.onSecondaryContainer');
    --mamv-ripple-pressed-color: v-bind('tokens.color.secondary.onSecondaryContainer');
}

:is(.filled, .elevated, .filled-tonal, .outlined, .text):hover {
    --mamv-ripple-hover-opacity: 0.08;
}

:is(.filled, .elevated, .filled-tonal, .outlined, .text):active {
    --mamv-ripple-pressed-opacity: 0.12;
}

.disabled,
.disabled:hover,
.disabled:active,
.disabled:focus {
    --mamv-elevation-level: 0;
    --_current-button-container-color: var(--md-sys-color-on-surface);
    --_current-button-container-opacity: 0.12;
    --_current-button-border-color: var(--md-sys-color-on-surface);
    --_current-button-border-opacity: 0.12;
    --_current-button-label-color: var(--md-sys-color-on-surface);
    --_current-button-label-opacity: 0.38;
    --mamv-ripple-hover-opacity: 0;
    --mamv-ripple-pressed-opacity: 0;
    pointer-events: none;
    cursor: default;
}
</style>
