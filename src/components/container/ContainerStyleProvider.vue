<template>
    <slot :surfaceContainer="{
        lowest: [SurfaceContainer['surface-container-lowest'], SurfaceContainer.surface],
        low: [SurfaceContainer['surface-container-low'], SurfaceContainer.surface],
        medium: [SurfaceContainer['surface-container'], SurfaceContainer.surface],
        high: [SurfaceContainer['surface-container-high'], SurfaceContainer.surface],
        highest: [SurfaceContainer['surface-container-highest'], SurfaceContainer.surface],
    }"></slot>
</template>

<style module="SurfaceContainer">
.surface {
    --_container-color: var(--mamv-container-color, var(--_current-container-color, #6750a4));
    background-color: var(--_container-color);
}

.surface-container-lowest {
    --_current-container-color: var(--md-sys-color-surface-container-lowest);
}

.surface-container-low {
    --_current-container-color: var(--md-sys-color-surface-container-low);
}

.surface-container {
    --_current-container-color: var(--md-sys-color-surface-container);
}

.surface-container-high {
    --_current-container-color: var(--md-sys-color-surface-container-high);
}

.surface-container-highest {
    --_current-container-color: var(--md-sys-color-surface-container-highest);
}
</style>
