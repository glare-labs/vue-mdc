<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Scrim"
    >
        <NuxtLayout
            name="component-layout"
            headline="Scrim (absolute=true)"
        >
            <Button @click="() => scrimOpen1 = true">Open Scrim</Button>
            <Scrim
                :absolute="true"
                v-model="scrimOpen1"
            ></Scrim>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Scrim (absolute=false)"
        >
            <Button @click="() => scrimOpen2 = true">Open Scrim</Button>
            <Scrim v-model="scrimOpen2"></Scrim>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Scrim, Button } from '../../../../ui/src'

const scrimOpen1 = ref(false)
const scrimOpen2 = ref(false)

definePageMeta({
    name: 'Scrim'
})
</script>

<style scoped></style>
