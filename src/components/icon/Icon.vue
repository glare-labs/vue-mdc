<template>
    <ClassProvider
        :size="props.size"
        :variant="props.variant"
        v-slot="{ icon }"
    >
        <span
            v-bind="$attrs"
            :class="icon"
        >
            <slot></slot>
        </span>
    </ClassProvider>
</template>

<script setup lang="ts">
import ClassProvider from './ClassProvider.vue'
import type { IIcon } from './Icon.type'

const props = withDefaults(
    defineProps<IIcon>(),
    {
        size: 'medium',
        variant: 'outlined'
    }
)
</script>


