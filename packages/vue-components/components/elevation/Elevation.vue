<template>
    <ClassProvider
        :level="props.level"
        v-slot="{ shadow }"
    >
        <span :class="shadow"></span>
    </ClassProvider>
</template>

<script setup lang="ts">
import ClassProvider from './ClassProvider.vue'
import type { IElevation } from './Elevation.type'

const props = withDefaults(
    defineProps<IElevation>(),
    {
        level: 0
    }
)
</script>

<style scoped>
</style>
