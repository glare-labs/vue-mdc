<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Button"
    >
        <NuxtLayout
            name="component-layout"
            headline="Button"
        >
            <Button appearance="filled">Send</Button>
            <Button appearance="filled-tonal">Send</Button>
            <Button appearance="elevated">Send</Button>
            <Button appearance="outlined">Send</Button>
            <Button appearance="text">Send</Button>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Button with leading-icon slot"
        >

            <Button appearance="filled">
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button appearance="filled-tonal">
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button appearance="elevated">
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button appearance="outlined">
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button appearance="text">
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Button with trailing-icon slot"
        >
            <Button
                appearance="filled"
                icon-position="right"
            >
                Send
                <template #trailing-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button
                appearance="filled-tonal"
                icon-position="right"
            >
                Send
                <template #trailing-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button
                appearance="elevated"
                icon-position="right"
            >
                Send
                <template #trailing-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button
                appearance="outlined"
                icon-position="right"
            >
                Send
                <template #trailing-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button
                appearance="text"
                icon-position="right"
            >
                Send
                <template #trailing-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Disabled button with leading-icon slot"
        >
            <Button
                appearance="filled"
                icon-position="right"
                disabled
            >
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button
                appearance="filled-tonal"
                icon-position="right"
                disabled
            >
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button
                appearance="elevated"
                icon-position="right"
                disabled
            >
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button
                appearance="outlined"
                icon-position="right"
                disabled
            >
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
            <Button
                appearance="text"
                icon-position="right"
                disabled
            >
                Send
                <template #leading-icon>
                    <Icon>send</Icon>
                </template>
            </Button>
        </NuxtLayout>

    </NuxtLayout>
</template>

<script setup lang="ts">
import { Button, Icon } from '../../../../ui/src'

definePageMeta({
    name: 'Button'
})
</script>
