<template>
    <NuxtLayout name="page-view-layout">
        <NuxtLayout
            name="component-layout"
            headline="Elevation, level: 3"
        >
            <div class="box">
                <Elevation :level="3"></Elevation>
            </div>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="v-elevation: 3"
        >
            <div
                v-elevation="3"
                class="box"
            ></div>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Elevation level: 3, .hover-elevation:hover level: 1"
        >
            <div class="box hover-elevation">
                <Elevation :level="3"></Elevation>
            </div>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="All elevation levels"
        >
            <div class="box small">
                <Typography :variant="ETypographyVariant.LabelLarge">Level 0</Typography>
                <Elevation :level="0"></Elevation>
            </div>
            <div class="box small">
                <Typography :variant="ETypographyVariant.LabelLarge">Level 1</Typography>
                <Elevation :level="1"></Elevation>
            </div>
            <div class="box small">
                <Typography :variant="ETypographyVariant.LabelLarge">Level 2</Typography>
                <Elevation :level="2"></Elevation>
            </div>
            <div class="box small">
                <Typography :variant="ETypographyVariant.LabelLarge">Level 3</Typography>
                <Elevation :level="3"></Elevation>
            </div>
            <div class="box small">
                <Typography :variant="ETypographyVariant.LabelLarge">Level 4</Typography>
                <Elevation :level="4"></Elevation>
            </div>
            <div class="box small">
                <Typography :variant="ETypographyVariant.LabelLarge">Level 5</Typography>
                <Elevation :level="5"></Elevation>
            </div>
        </NuxtLayout>

    </NuxtLayout>
</template>

<script setup lang="ts">
import { Elevation, vElevation, Typography, ETypographyVariant } from '../../../../ui/src'
</script>

<style>
.box {
    @apply h-24 w-full relative grid place-content-center;

    &.small {
        @apply h-16;
    }

    &.hover-elevation:hover {
        --gu-elevation-level: 1;
    }
}
</style>
