<template>
    <ul>
        <slot name="start"></slot>

        <li
            class="item"
            :class="{ 'current': props.isHomepage }"
            @click="() => {
                emits('setIsHomepage', true)
                emits('setCurrentPage', null)
            }"
        >
            <ClientOnly>
                <Ripple></Ripple>
            </ClientOnly>
            Introduce
        </li>

        <li
            v-for="e in props.list"
            class="item"
            @click="() => {
                emits('setCurrentPage', e)
                emits('setIsHomepage', false)
            }"
            :class="{ 'current': props.currentPage?.title === e.title }"
        >
            <ClientOnly>
                <Ripple></Ripple>
            </ClientOnly>
            {{ e.title }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
    list: ParsedContent[]
    isHomepage: boolean
    currentPage: ParsedContent | null
}>()

const emits = defineEmits<{
    (event: 'setCurrentPage', e: ParsedContent | null): void
    (event: 'setIsHomepage', e: boolean): void
}>()

</script>

<style scoped>
.item {
    @apply select-none flex-none flex-shrink-0 flex-grow-0 relative px-4 py-2 bg-[--md-sys-color-surface] text-[--md-sys-color-on-surface] rounded-full pl-[24px] pr-[24px] max-h-[56px] h-[56px] min-h-[56px] text-start inset-0 flex items-center;
}

.item.current {
    @apply bg-[--md-sys-color-secondary-container] text-[--md-sys-color-on-secondary-container];
}
</style>
