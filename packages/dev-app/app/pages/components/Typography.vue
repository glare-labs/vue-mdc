<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Typography"
    >
        <NuxtLayout
            name="component-layout"
            headline="Typography"
        >
            <div class="grid">
                <Typography variant="display-large">display-large</Typography>
                <Typography variant="display-medium">display-medium</Typography>
                <Typography variant="display-small">display-small</Typography>
                <Typography variant="headline-large">headline-large</Typography>
                <Typography variant="headline-medium">headline-medium</Typography>
                <Typography variant="headline-small">headline-small</Typography>
                <Typography variant="title-large">title-large</Typography>
                <Typography variant="title-medium">title-medium</Typography>
                <Typography variant="title-small">title-small</Typography>
                <Typography variant="label-large">label-large</Typography>
                <Typography variant="label-medium">label-medium</Typography>
                <Typography variant="label-small">label-small</Typography>
                <Typography variant="body-large">body-large</Typography>
                <Typography variant="body-medium">body-medium</Typography>
                <Typography variant="body-small">body-small</Typography>
            </div>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Typography } from '../../../../ui/src'

definePageMeta({
    name: 'Typography'
})
</script>
