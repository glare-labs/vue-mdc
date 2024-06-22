<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Fab"
    >
        <NuxtLayout
            name="component-layout"
            headline="Variant: surface"
        >
            <Fab variant="surface"></Fab>
            <Fab variant="surface">
                <Icon>send</Icon>
            </Fab>
            <Fab
                variant="surface"
                label="send"
            ></Fab>
            <Fab
                variant="surface"
                label="send"
            >
                <Icon>send</Icon>
            </Fab>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Variant: primary"
        >
            <Fab variant="primary"></Fab>
            <Fab variant="primary">
                <Icon>send</Icon>
            </Fab>
            <Fab
                variant="primary"
                label="send"
            ></Fab>
            <Fab
                variant="primary"
                label="send"
            >
                <Icon>send</Icon>
            </Fab>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Variant: primary, lowered"
        >
            <Fab
                :lowered="true"
                variant="primary"
            ></Fab>
            <Fab
                :lowered="true"
                variant="primary"
            >
                <Icon>send</Icon>
            </Fab>
            <Fab
                :lowered="true"
                variant="primary"
                label="send"
            ></Fab>
            <Fab
                :lowered="true"
                variant="primary"
                label="send"
            >
                <Icon>send</Icon>
            </Fab>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Variant: secondary"
        >
            <Fab variant="secondary"></Fab>
            <Fab variant="secondary">
                <Icon>send</Icon>
            </Fab>
            <Fab
                variant="secondary"
                label="send"
            ></Fab>
            <Fab
                variant="secondary"
                label="send"
            >
                <Icon>send</Icon>
            </Fab>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Variant: tertiary"
        >
            <Fab variant="tertiary"></Fab>
            <Fab variant="tertiary">
                <Icon>send</Icon>
            </Fab>
            <Fab
                variant="tertiary"
                label="send"
            ></Fab>
            <Fab
                variant="tertiary"
                label="send"
            >
                <Icon>send</Icon>
            </Fab>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Size: small"
        >
            <Fab size="small"></Fab>
            <Fab size="small">
                <Icon>send</Icon>
            </Fab>
            <Fab
                size="small"
                label="send"
            >
                <Icon>send</Icon>
            </Fab>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Size: medium"
        >
            <Fab size="medium"></Fab>
            <Fab size="medium">
                <Icon>send</Icon>
            </Fab>
            <Fab
                size="medium"
                label="send"
            ></Fab>
            <Fab
                size="medium"
                label="send"
            >
                <Icon>send</Icon>
            </Fab>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Size: large"
        >
            <Fab size="large"></Fab>
            <Fab size="large">
                <Icon>send</Icon>
            </Fab>
            <Fab
                size="large"
                label="send"
            >
                <Icon>send</Icon>
            </Fab>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { Fab, Icon } from '../../../../ui/src'
</script>
