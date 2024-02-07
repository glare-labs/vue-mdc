<template>
    <slot
        :surface="[$style.surface]"
        :hover="[$style.hover]"
        :pressed="[$style.pressed]"
    ></slot>
</template>

<script setup lang="ts">
import { tokens } from '../../utils/tokens'

</script>

<style module>
.surface {
    --_ripple-hover-color: var(--mamv-ripple-hover-color, v-bind('tokens.color.surface.onSurface'));
    --_ripple-pressed-color: var(--mamv-ripple-pressed-color, v-bind('tokens.color.surface.onSurface'));
    --_ripple-hover-opacity: var(--mamv-ripple-hover-opacity, var(--_current-ripple-hover-opacity, 0.08));
    --_ripple-pressed-opacity: var(--mamv-ripple-pressed-opacity, var(--_current-ripple-pressed-opacity, 0.12));
    --_ripple-shape: var(--mamv-ripple-shape);


    display: flex;
    margin: auto;
    border-radius: inherit;
    position: absolute;
    inset: 0;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
    border-radius: var(--_ripple-shape, inherit);
    z-index: 1;
}

.surface::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 15ms linear, background-color 15ms linear;
    background-color: var(--_ripple-hover-color, #1d1b20);
}

.surface::after {
    content: "";
    position: absolute;
    opacity: 0;
    transition: opacity 375ms linear;
    transform-origin: center center;
    background: radial-gradient(closest-side,
            var(--_ripple-pressed-color, #1d1b20),
            max(calc(100% - 70px), 65%),
            transparent 100%);
}

.hover::before {
    opacity: var(--_ripple-hover-opacity);
}

.pressed::after {
    transition-duration: 105ms;
    opacity: var(--_ripple-pressed-opacity);
}

.disabled {}
</style>
