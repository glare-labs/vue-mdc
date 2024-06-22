<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Progress"
    >
        <NuxtLayout
            name="component-layout"
            headline="Circular Progress"
        >
            <div>
                <CircularProgress :value="0.25"></CircularProgress>
                <CircularProgress :indeterminate="true"></CircularProgress>
            </div>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Linear Progress"
        >
            <LinearProgress :value="0.25"></LinearProgress>
            <LinearProgress :indeterminate="true"></LinearProgress>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { LinearProgress, CircularProgress } from '../../../../ui/src'
</script>
