<template>
    <!-- Only be used to /pages/* -->
    <article class="page-view-layout-root">
        <Typography
            v-if="!props.disableHeadline"
            :variant="ETypographyVariant.DisplayLarge"
            class="title"
        >{{ props.headline !== null ? props.headline : $router.currentRoute.value.name }}</Typography>

        <section class="view-content">
            <slot></slot>
        </section>
    </article>
</template>

<script setup lang="ts">
import { ETypographyVariant, Typography } from '../../../ui/src'

const props = withDefaults(defineProps<{
    disableHeadline: boolean
    headline: string | null
}>(), {
    disableHeadline: false,
    headline: null
})
</script>

<style scoped>
.page-view-layout-root {
    @apply pl-6 pt-6 pr-6 pb-12;
    @apply flex flex-col;

    &>.title {
        @apply rounded-2xl p-6 mb-12 font-bold;
        @apply line-clamp-1 bg-[--gu-sys-color-secondary-container] text-[--gu-sys-color-on-secondary-container];

    }
}
</style>
