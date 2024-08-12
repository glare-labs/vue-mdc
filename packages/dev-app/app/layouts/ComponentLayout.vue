<template>

    <!-- Used to show component layouts that need to be tested in a browser -->
    <section
        class="component-layout-root"
        :class="[props.outline && 'component-card-outline', props.paddingX && 'component-card-padding-x', props.shape && 'component-card-shape']"
    >
        <Typography
            v-if="props.headline"
            :variant="ETypographyVariant.HeadlineSmall"
            class="headline"
        >{{ props.headline }}</Typography>

        <div class="examples">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Typography, ETypographyVariant } from '../../../ui/src'

const props = withDefaults(defineProps<Partial<{
    shape: boolean
    outline: boolean
    paddingX: boolean
    headline: string | null
}>>(), {
    shape: true,
    outline: true,
    paddingX: true,
    headline: null
})
</script>

<style scoped>
.component-layout-root {
    @apply flex flex-col gap-3 mb-6 pb-3 relative;
    @apply bg-[--gu-sys-color-surface-container-lowest];

    &>.headline {
        @apply p-3;
    }

    &>.examples {
        @apply relative;
    }


    &.component-card-outline {
        @apply border;
    }

    &.component-card-padding-x>.examples {
        @apply px-3;
    }

    &.component-card-shape {
        @apply rounded-2xl;
    }

    &>.examples {
        @apply flex flex-wrap gap-1.5 relative;

    }
}
</style>
