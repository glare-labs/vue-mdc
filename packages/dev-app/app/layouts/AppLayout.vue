<template>
    <div class="app-layout-root">
        <header
            v-if="$slots.header"
            class="header"
        >
            <slot name="header"></slot>
        </header>
        <main
            v-if="$slots.default"
            class="main"
        >
            <div class="drawer-wrapper">
                <slot name="drawer"></slot>
            </div>
            <div class="main-content">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.app-layout-root {
    @apply flex flex-col min-h-screen max-h-screen overflow-clip relative;

    transition-property: background-color;
    transition-duration: 200ms;

    /* Default background-color, based on md-sys-color */
    @apply bg-[--gu-sys-color-surface-container];

    /* Header's height is 64px */
    &>.header {
        @apply flex-grow-0 flex-shrink-0;
        @apply bg-[--gu-sys-color-surface-container];
        @apply z-0;
    }

    &>.main {
        @apply max-h-[calc(100vh-64px)] overflow-clip;
        @apply flex flex-grow;
        @apply z-0;

        transition-property: background-color, color, border-radius, margin;
        transition-duration: 200ms;

        &>.main-content {
            @apply bg-[--gu-sys-color-surface];
            @apply md:rounded-3xl;
            @apply flex-grow flex-shrink overflow-auto;
            @apply m-0 md:mx-4 md:mb-4;
            @apply z-0;
        }

        &>.drawer-wrapper {
            @apply flex-grow-0 flex-shrink-0 overflow-auto;
            @apply z-[1];
        }

        &>.drawer-wrapper {
            @apply m-0 md:mb-4;
        }
    }
}
</style>
