<template>
    <div
        :class="props.open ? 'translate-x-0' : '-translate-x-full overflow-clip invisible p-0 m-0'"
        class="transition-all h-full md:min-w-[336px] lg:min-w-[auto] overflow-auto flex flex-col gap-0.5 bg-[--md-sys-color-surface-container-low] lg:bg-[--md-sys-color-surface] rounded-r-3xl p-[16px] absolute top-0 left-0 z-10 lg:relative"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    open: boolean
}>()
</script>

<style scoped>
</style>
