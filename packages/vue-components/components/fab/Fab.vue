<template>
    <button
        :class="[$style.fab, props.label !== '' && $style.extended, $style[props.size], $style[props.variant]]"
        data-am-fab
        v-bind="$attrs"
    >
        <Ripple></Ripple>
        <Elevation></Elevation>

        <div :class="$style['touch-target']"></div>
        <span :class="$style.icon">
            <slot></slot>
        </span>

        <span :class="$style.label">
            {{ props.label }}
        </span>
    </button>
</template>

<script setup lang="ts">
import Elevation from '../elevation/Elevation.vue'
import Ripple from '../ripple/Ripple.vue'
import type { IFab } from './Fab.type'

const props = withDefaults(defineProps<IFab>(), {
    size: 'medium',
    label: '',
    variant: 'secondary'
})
</script>

<style module>
.touch-target {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 48px;
    width: 48px;
    transform: translate(-50%, -50%);
}

.fab {
    --_fab-container-width: var(--mamv-fab-container-width, var(--_current-fab-container-width, 56px));
    --_fab-container-height: var(--mamv-fab-container-height, var(--_current-fab-container-height, 56px));
    --_fab-container-shape: var(--mamv-fab-container-shape, var(--_current-fab-container-shape, 16px));
    --_fab-container-color: var(--mamv-fab-container-color, var(--_current-fab-container-color));
    --_fab-label-color: var(--mamv-fab-label-color, var(--_current-fab-label-color));

    --_fab-icon-color: var(--mamv-fab-icon-color, var(--_current-fab-icon-color, var(--_fab-label-color)));
    --_fab-icon-size: var(--mamv-fab-icon-size, var(--_current-fab-icon-size, 24px));

    --_fab-label-letter-spacing: var(--mamv-fab-label-letter-spacing, var(--md-sys-typescale-label-large-letter-spacing));
    --_fab-label-size: var(--mamv-fab-label-size, var(--md-sys-typescale-label-large-font-size));
    --_fab-label-line-height: var(--mamv-fab-label-line-height, var(--md-sys-typescale-label-large-line-height));
    --_fab-label-font-weight: var(--mamv-fab-font-weight, var(--md-sys-typescale-label-large-font-weight));


    --_fab-elevation-level: var(--_current-fab-elevation-level, 3);

    --_fab-ripple-hover-color: var(--_current-fab-ripple-hover-color);
    --_fab-ripple-pressed-color: var(--_current-fab-ripple-pressed-color);
    --_fab-ripple-hover-opacity: var(--_current-fab-ripple-hover-opacity, 0.08);
    --_fab-ripple-pressed-opacity: var(--_current-fab-ripple-pressed-opacity, 0.12);

    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    transition-duration: 280ms;
    transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
    position: relative;

    align-items: center;
    justify-content: center;
    vertical-align: middle;
    padding: 0;
    transition-property: background-color;
    border-width: 0px;
    outline: none;
    z-index: 0;
    height: var(--_fab-container-height);
    background-color: var(--_fab-container-color);
    border-radius: var(--_fab-container-shape);

    --mamv-ripple-hover-color: var(--_fab-ripple-hover-color);
    --mamv-ripple-pressed-color: var(--_fab-ripple-pressed-color);
    --mamv-ripple-hover-opacity: var(--_fab-ripple-hover-opacity);
    --mamv-ripple-pressed-opacity: var(--_fab-ripple-pressed-opacity);
    --mamv-elevation-level: var(--_fab-elevation-level);
    --mamv-icon-color: var(--_fab-icon-color);
    --mamv-icon-size: var(--_fab-icon-size);
}

.fab:hover {
    --_current-fab-elevation-level: 4;
}

.fab:active,
.fab:focus {
    --_current-fab-elevation-level: 3;
}

.fab:not(.extended) {
    width: var(--_fab-container-width);
}

.fab.extended {
    padding-inline-start: 16px;
    padding-inline-end: 20px;
    box-sizing: border-box;
    width: inherit;
    gap: 4px;
}

.label {
    color: var(--_fab-label-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: inherit;
    font-size: var(--_fab-label-size);
    letter-spacing: var(--_fab-label-letter-spacing);
    line-height: var(--_fab-label-line-height);
    font-weight: var(--_fab-label-font-weight);
}

.icon {
    color: var(--_fab-icon-color);
}

.fab,
.icon {
    display: flex;
}

.small {
    --_current-fab-container-height: 40px;
    --_current-fab-container-width: 40px;
    --_current-fab-container-shape: 12px;
}

.medium {
    --_current-fab-container-height: 56px;
    --_current-fab-container-width: 56px;
    --_current-fab-container-shape: 16px;
}

.large {
    --_current-fab-container-height: 96px;
    --_current-fab-container-width: 96px;
    --_current-fab-container-shape: 28px;
    --_current-fab-icon-size: 36px;
}

.primary {
    --_current-fab-container-color: var(--md-sys-color-primary-container);
    --_current-fab-label-color: var(--md-sys-color-on-primary-container);
    --_current-fab-icon-color: var(--md-sys-color-on-primary-container);
}

.primary:hover {
    --_current-fab-ripple-hover-color: var(--md-sys-color-on-primary-container);
}

.primary:active {
    --_current-fab-ripple-pressed-color: var(--md-sys-color-on-primary-container);
}

.secondary {
    --_current-fab-container-color: var(--md-sys-color-secondary-container);
    --_current-fab-label-color: var(--md-sys-color-on-secondary-container);
    --_current-fab-icon-color: var(--md-sys-color-on-secondary-container);
}

.secondary:hover {
    --_current-fab-ripple-hover-color: var(--md-sys-color-on-secondary-container);
}

.secondary:active {
    --_current-fab-ripple-pressed-color: var(--md-sys-color-on-secondary-container);
}

.tertiary {
    --_current-fab-container-color: var(--md-sys-color-tertiary-container);
    --_current-fab-label-color: var(--md-sys-color-on-tertiary-container);
    --_current-fab-icon-color: var(--md-sys-color-on-tertiary-container);
}

.tertiary:hover {
    --_current-fab-ripple-hover-color: var(--md-sys-color-on-tertiary-container);
}

.tertiary:active {
    --_current-fab-ripple-pressed-color: var(--md-sys-color-on-tertiary-container);
}
</style>
