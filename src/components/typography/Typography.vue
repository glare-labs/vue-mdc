<template>
    <ClassProvider
        :variant="props.variant"
        v-slot="{ font }"
    >
        <span
            v-bind="$attrs"
            :class="font"
        >
            <slot></slot>
        </span>
    </ClassProvider>
</template>

<script setup lang="ts">
import ClassProvider from './ClassProvider.vue'
import type { ITypography } from './Typography.type'

const props = withDefaults(
    defineProps<ITypography>(),
    {
        variant: 'label-medium',
    }
)

</script>

