<template>
    <div
        :class="[$style.surface, $style[props.position]]"
        data-am-navigation-bar
        ref="barRef"
        v-bind="$attrs"
    >
        <slot
            :activeIndex="activeIndex"
            :setActiveIndex="setActiveIndex"
        ></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { INavigationBar, INavigationBarProvider } from './NavigationBar.type'
import { navigationBarProvider } from './NavigationBar.type'
import { provide } from 'vue'
import { onMounted } from 'vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<Partial<INavigationBar>>(), {
    defaultActiveIndex: -1,
    modelValue: (p) => p.defaultActiveIndex!,
    position: 'center',
})

const emits = defineEmits<{
    'update:modelValue': [number]
    'change': [number]
}>()



/**
 * [barRef] is the navigation bar root.
 * 
 * It will be inited in <template>. In watch, we get root's children to 
 * [tabs] and then we set data-tab-id to each tab.
 */
const barRef = ref<HTMLElement | null>(null)

/**
 * [tabs] is a ref all tab elements(each tab element has a data-is-tab attribute).
 * 
 * In the onMounted hook, it will create a id in the attribute [data-tab-id] to all tabs,
 *   and init [activeIndex]
 */
const tabs = ref<Element[]>([])
onMounted(() => {
    if (barRef.value === null || barRef.value.children === null) return
    tabs.value = [...barRef.value.children].filter(e => e.getAttribute('data-is-tab') === 'true')
    if (tabs.value.length === 0) return
    tabs.value.forEach((e, i) => {
        e.setAttribute('data-tab-id', i.toString())
    })

    if (props.modelValue !== -1) {
        setActiveIndex(props.modelValue)
    }
})

/**
 * Current index of navigation bar.
 * 
 * @see range
 * 0 <= [activeIndex] < [tabs.value.length]
 * If there is no tab's child, [activeIndex] is -1.
 */
const activeIndex = ref<number>(props.defaultActiveIndex)
const setActiveIndex = (index: number) => {
    if (index === activeIndex.value) return
    if (tabs.value.length === 0) throw new Error('NavigationBar\'s no child.')
    if (index >= tabs.value.length || index < 0) throw new Error('NavigationBar\'s index is out of the bound.')
    activeIndex.value = index
    emits('update:modelValue', activeIndex.value)
    emits('change', activeIndex.value)
}

watch(() => props.modelValue, () => {
    setActiveIndex(props.modelValue)
})

provide<INavigationBarProvider>(navigationBarProvider, {
    currentIndex: computed(() => activeIndex.value),
    setCurrentIndex: setActiveIndex
})
</script>

<style module>
.surface {
    --_navigation-bar-container-height: var(--mamv-navigation-bar-container-height, 80px);
    --_navigation-bar-container-min-width: var(--mamv-navigation-bar-container-min-width, 48px);
    --_navigation-bar-container-color: var(--mamv-navigation-bar-container-color, var(--md-sys-color-surface-container));
    --_navigation-bar-container-shape: var(--mamv-navigation-bar-container-shape, 0px);

    position: relative;
    display: inline-flex;
    gap: 0px;
    box-sizing: border-box;
    margin: 0;
    transition-duration: 250ms;
    transition-property: background, border, color, box-shadow;
    transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
    z-index: 0;
    user-select: none;

    padding-left: 16px;
    padding-right: 16px;

    height: var(--_navigation-bar-container-height);
    min-width: var(--_navigation-bar-container-min-width);
    background-color: var(--_navigation-bar-container-color);
    border-radius: var(--_navigation-bar-container-shape);
}

.left {
    justify-content: start;
}

.center {
    justify-content: center;
}

.left {
    justify-content: end;
}
</style>
