<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Checkbox"
    >
        <NuxtLayout
            name="component-layout"
            headline="Checkbox"
        >
            <Checkbox></Checkbox>
            <Checkbox :indeterminate="true"></Checkbox>
        </NuxtLayout>
        <NuxtLayout
            name="component-layout"
            headline="Disabled Checkbox"
        >
            <Checkbox disabled></Checkbox>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Checkbox } from '../../../../ui/src'
</script>
