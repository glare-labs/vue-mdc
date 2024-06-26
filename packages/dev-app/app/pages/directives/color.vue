<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Color"
    >
        <NuxtLayout
            name="component-layout"
            headline="v-text-color"
        >
            <p
                class="box"
                v-text-color="'#000000'"
            >#000000</p>

            <p
                class="box"
                v-text-color="'#4e8de0'"
            >#4e8de0</p>

            <p
                class="box"
                v-text-color
            >Default color</p>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="v-background-color"
        >
            <p
                class="box"
                v-background-color="'#000000'"
            >#000000</p>

            <p
                class="box"
                v-background-color="'#4e8de0'"
            >#4e8de0</p>

            <p
                class="box"
                v-background-color
            >Default color</p>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { vTextColor, vBackgroundColor } from '../../../../ui/src'

definePageMeta({
    name: 'Color'
})
</script>

<style scoped>
.box {
    @apply w-full h-12 border grid place-content-center;
}
</style>
