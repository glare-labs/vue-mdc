<template>
    <div
        data-am-navigation-tab
        data-is-tab="true"
        ref="tabRef"
        :class="[NavigationTab.surface, navBar?.currentIndex.value === id && NavigationTab.active]"
        v-bind="$attrs"
        @click="navBar?.setCurrentIndex(id)"
    >
        <span :class="[NavigationTab.indicator]">
            <slot name="icon"></slot>
        </span>

        <span :class="[NavigationTab.label]">
            <slot></slot>
        </span>

        <Ripple></Ripple>

        <div :class="NavigationTab['touch-target']"></div>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import Ripple from '../ripple/Ripple.vue'
import { navigationBarProvider, type INavigationBarProvider } from '../navigation-bar/NavigationBar.type'

const navBar = inject<INavigationBarProvider>(navigationBarProvider)
const tabRef = ref<HTMLElement | null>(null)
const id = computed(() => parseInt(tabRef.value?.getAttribute('data-tab-id')!))

</script>

<style module="NavigationTab">
.touch-target {
    position: absolute;
    height: var(--_navigation-tab-container-height);
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
}

.surface {
    --_navigation-tab-indicator-height: var(--mamv-navigation-tab-indicator-height, 28px);
    --_navigation-tab-indicator-width: var(--mamv-navigation-tab-indicator-width, 64px);
    --_navigation-tab-indicator-shape: var(--mamv-navigation-tab-indicator-shape, 9999px);
    --_navigation-tab-indicator-color: var(--mamv-navigation-tab-indicator-color, var(--_current-navigation-tab-indicator-color));

    --_navigation-tab-label-color: var(--mamv-navigation-tab-label-color, var(--md-sys-color-on-secondary-container));
    --_navigation-tab-icon-color: var(--mamv-navigation-tab-icon-color, var(--md-sys-color-on-secondary-container));
    --_navigation-tab-icon-size: var(--mamv-navigation-tab-icon-size, 22px);

    --_navigation-tab-container-height: var(--mamv-navigation-tab-container-height, 100%);
    --_navigation-tab-container-width: var(--mamv-navigation-tab-container-width, 80px);
    --_navigation-tab-container-color: var(--mamv-navigation-tab-container-color, var(--md-sys-color-surface-container));
    --_navigation-tab-container-shape: var(--mamv-navigation-tab-container-shape, 0px);


    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    box-sizing: border-box;
    margin: 0;
    transition-duration: 250ms;
    transition-property: background, border, color, box-shadow;
    transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
    z-index: 1;
    user-select: none;
    padding-top: 18px;
    padding-bottom: 12px;
    padding-left: 8px;
    padding-right: 8px;
    width: var(--_navigation-tab-container-width);
    min-width: var(--_navigation-tab-container-width);
    height: var(--_navigation-tab-container-height);
    background-color: var(--_navigation-tab-container-color);
    border-radius: var(--_navigation-tab-container-shape);

}

.surface:hover {
    --mamv-ripple-hover-color: var(--md-sys-color-on-surface);
}

.surface:active,
.surface:focus {
    --mamv-ripple-pressed-color: var(--md-sys-color-on-surface);
}

.indicator {
    width: var(--_navigation-tab-indicator-width);
    height: var(--_navigation-tab-indicator-height);
    border-radius: var(--_navigation-tab-indicator-shape);
    background-color: var(--_navigation-tab-indicator-color);
    position: relative;
    display: flex;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    overflow: hidden;



    --mamv-icon-color: var(--_navigation-tab-icon-color);
    --mamv-icon-size: var(--_navigation-tab-icon-size);
}

.active {
    --_current-navigation-tab-indicator-color: var(--md-sys-color-secondary-container);
}

.active>.indicator {
    animation-name: indicator-open;
    animation-duration: 500ms;
    animation-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1);
    animation-iteration-count: inherit;
}

.label {
    font-size: var(--md-sys-typescale-label-medium-font-size);
    font-weight: var(--md-sys-typescale-label-medium-font-weight);
    line-height: var(--md-sys-typescale-label-medium-line-height);
    letter-spacing: var(--md-sys-typescale-label-medium-letter-spacing);
    color: var(--_navigation-tab-label-color);
}

@keyframes indicator-open {
    0% {
        width: 28px;
    }

    100% {
        width: var(--_navigation-tab-indicator-width);

    }
}
</style>
