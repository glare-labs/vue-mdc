<template>
    <NuxtLayout name="page-view-layout">
        <NuxtLayout
            name="component-layout"
            headline="Divider, Default variant (MiddleInset)"
            :padding-x="false"
        >
            <Divider></Divider>
        </NuxtLayout>
        <NuxtLayout
            name="component-layout"
            headline="Variant: InsetStart"
            :padding-x="false"
        >
            <Divider :variant="EDividerVariant.InsetStart"></Divider>
        </NuxtLayout>
        <NuxtLayout
            name="component-layout"
            headline="Variant: InsetEnd"
            :padding-x="false"
        >
            <Divider :variant="EDividerVariant.InsetEnd"></Divider>
        </NuxtLayout>
        <NuxtLayout
            name="component-layout"
            headline="Variant: MiddleInset"
            :padding-x="false"
        >
            <Divider :variant="EDividerVariant.MiddleInset"></Divider>
        </NuxtLayout>
        <NuxtLayout
            name="component-layout"
            headline="Variant: NoInset"
            :padding-x="false"
        >
            <Divider :variant="EDividerVariant.NoInset"></Divider>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Divider, EDividerVariant } from '../../../../ui/src'

definePageMeta({
    name: 'Divider'
})
</script>
