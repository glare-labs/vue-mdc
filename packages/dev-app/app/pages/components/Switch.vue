<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Switch"
    >
        <NuxtLayout
            name="component-layout"
            headline="Switch"
        >
            <Switch></Switch>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Disabled switch"
        >
            <Switch disabled></Switch>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Switch } from '../../../../ui/src'

definePageMeta({
    name: 'Switch'
})
</script>
