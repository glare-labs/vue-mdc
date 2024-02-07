<template>
    <ClassProvider
        :direction="props.direction"
        :variant="props.variant"
        v-slot="{ surface }"
    >
        <span :class="surface"></span>
    </ClassProvider>
</template>

<script setup lang="ts">
import ClassProvider from './ClassProvider.vue'
import type { IDivider } from './Divider.type'

const props = withDefaults(
    defineProps<IDivider>(),
    {
        direction: 'horizontal',
        variant: 'middle-inset'
    }
)

</script>

<style scoped>
</style>
