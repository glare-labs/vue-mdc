<template>
    <slot :surface="[$style.surface, $style[props.direction], $style[props.variant]]"></slot>
</template>

<script setup lang="ts">
import type { IDivider } from './Divider.type'

const props = defineProps<Required<IDivider>>()
</script>

<style module>
.surface {
    --_divider-thickness: var(--mamv-divider-thickness, var(--_current-divider-thickness, 1px));
    --_divider-width: var(--mamv-divider-width, var(--_current-divider-width, auto));
    --_divider-height: var(--mamv-divider-height, var(--_current-divider-height));
    --_divider-color: var(--mamv-divider-color, var(--_current-divider-color, var(--md-sys-color-outline-variant, #c0c9bd)));
    --_divider-margin-left: var(--mamv-divider-margin-left, var(--_current-divider-margin-left, 0px));
    --_divider-margin-right: var(--mamv-divider-margin-right, var(--_current-divider-margin-right, 0px));
    --_divider-margin-top: var(--mamv-divider-margin-top, var(--_current-divider-margin-top, 0px));
    --_divider-margin-bottom: var(--mamv-divider-margin-bottom, var(--_current-divider-margin-bottom, 0px));

    box-sizing: border-box;
    position: relative;

    background-color: var(--_divider-color);
    margin-left: var(--_divider-margin-left);
    margin-right: var(--_divider-margin-right);
    margin-top: var(--_divider-margin-top);
    margin-bottom: var(--_divider-margin-bottom);
}

.horizontal {
    display: block;
    width: var(--_divider-width);
    height: var(--_divider-thickness);
}

.vertical {
    display: inline-flex;
    width: var(--_divider-thickness);
    height: var(--_divider-height);
    min-width: 1px;
}

.no-inset {
    --_current-divider-width: 100%;
    --_current-divider-height: 100%;

    --_current-divider-margin-left: 0px;
    --_current-divider-margin-right: 0px;
    --_current-divider-margin-top: 8px;
    --_current-divider-margin-bottom: 8px;
}

.inset-left {
    --_current-divider-height: calc(100% - var(--_divider-margin-top, 8px));

    --_current-divider-margin-left: 16px;
    --_current-divider-margin-right: 0px;
    --_current-divider-margin-top: 8px;
    --_current-divider-margin-bottom: 8px;
}

.inset-right {
    --_current-divider-height: calc(100% - var(--_divider-margin-bottom, 16px));

    --_current-divider-margin-left: 0px;
    --_current-divider-margin-right: 16px;
    --_current-divider-margin-top: 8px;
    --_current-divider-margin-bottom: 8px;
}

.middle-inset {
    --_current-divider-height: calc(100% - var(--_divider-margin-top, 8px) - var(--_divider-margin-bottom, 8px));

    --_current-divider-margin-left: 8px;
    --_current-divider-margin-right: 8px;
    --_current-divider-margin-top: 8px;
    --_current-divider-margin-bottom: 8px;
}
</style>
