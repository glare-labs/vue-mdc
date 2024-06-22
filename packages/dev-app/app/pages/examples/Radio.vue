<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Radio"
    >
        <NuxtLayout
            name="component-layout"
            headline="Radio"
        >
            <Radio></Radio>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Disabled radio"
        >
            <Radio disabled></Radio>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Radio } from '../../../../ui/src'
</script>
