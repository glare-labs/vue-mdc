<template>
    <div
        :class="[$style.surface]"
        v-bind="$attrs"
    >

        <header
            v-if="$slots['header']"
            :class="[$style.header]"
        >
            <slot name="header"></slot>
        </header>

        <div :class="[$style.body]">
            <nav v-if="$slots['navigation-drawer']">
                <slot name="navigation-drawer"></slot>
            </nav>
            <div :class="[$style.content]">
                <slot></slot>
            </div>
        </div>

        <nav :class="[$style.nav]">
            <slot name="bottom-navigation"></slot>
        </nav>
    </div>
</template>

<script setup lang="ts">
import type { IWindowLayout } from './Window.type'


const props = withDefaults(defineProps<Partial<IWindowLayout>>(), {
    maxHeight: '100svh',
    minHeight: '100svh',
})
</script>

<style module>
.surface {
    position: relative;
    height: inherit;
    width: inherit;
    overflow: clip;

    display: flex;
    flex-direction: column;

    max-height: v-bind('props.maxHeight');
    min-height: v-bind('props.minHeight');
}

.header {
    background-color: var(--md-sys-color-surface-container-low);
}

.body {
    background-color: var(--md-sys-color-surface-container);
    display: flex;
    flex-grow: 1;
    overflow: clip;
}

.content {
    flex-grow: 1;
    overflow: auto;
    background-color: var(--md-sys-color-surface);
}

.nav {
    background-color: var(--md-sys-color-surface-container);
    flex-grow: 0;
    flex-shrink: 0;
    height: 100%;
}

.nav>div {
    width: 100%;
    /* height: 100%; */
}
</style>
