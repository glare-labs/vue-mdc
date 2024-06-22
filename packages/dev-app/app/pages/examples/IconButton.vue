<template>
    <NuxtLayout
        name="page-view-layout"
        headline="IconButton"
    >
        <NuxtLayout
            name="component-layout"
            headline="IconButton"
        >
            <IconButton appearance="standard">
                <Icon>send</Icon>
            </IconButton>
            <IconButton appearance="filled">
                <Icon>send</Icon>
            </IconButton>
            <IconButton appearance="filled-tonal">
                <Icon>send</Icon>
            </IconButton>
            <IconButton appearance="outlined">
                <Icon>send</Icon>
            </IconButton>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Togglable icon-button"
        >
            <TogglableIconButton appearance="standard">
                <Icon>send</Icon>
            </TogglableIconButton>
            <TogglableIconButton appearance="filled">
                <Icon>send</Icon>
            </TogglableIconButton>
            <TogglableIconButton appearance="filled-tonal">
                <Icon>send</Icon>
            </TogglableIconButton>
            <TogglableIconButton appearance="outlined">
                <Icon>send</Icon>
            </TogglableIconButton>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Disabled icon-button"
        >
            <TogglableIconButton
                :disabled="true"
                appearance="standard"
            >
                <Icon>send</Icon>
            </TogglableIconButton>
            <TogglableIconButton
                :disabled="true"
                appearance="filled"
            >
                <Icon>send</Icon>
            </TogglableIconButton>
            <TogglableIconButton
                :disabled="true"
                appearance="filled-tonal"
            >
                <Icon>send</Icon>
            </TogglableIconButton>
            <TogglableIconButton
                :disabled="true"
                appearance="outlined"
            >
                <Icon>send</Icon>
            </TogglableIconButton>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { IconButton, TogglableIconButton, Icon } from '../../../../ui/src'
</script>
