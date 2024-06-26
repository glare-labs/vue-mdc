<template>
    <NuxtLayout
        name="page-view-layout"
        :disable-headline="true"
    >
        <template #default>
            <Typography :variant="ETypographyVariant.HeadlineMedium">DevApp</Typography>
            <div
                class="bg-secondary-container text-on-secondary-container rounded-2xl flex items-start gap-4 px-6 py-4 mt-6">
                <Icon class="mt-1">verified</Icon>
                <div class="flex flex-col">
                    <Typography :variant="ETypographyVariant.TitleMedium">You have started the server.
                    </Typography>
                    <Typography>This page is used for previewing, debugging during development, and also for
                        deploying
                        pages to this repository.</Typography>
                </div>
            </div>
        </template>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { ETypographyVariant, Icon, Typography } from '../../../ui/src'

definePageMeta({
    name: 'Home'
})
</script>

<style scoped></style>
