<template>
    <div>
        <IconButton :appearance="EIconButtonAppearance.Filled">
            <Icon>send</Icon>
        </IconButton>
        <IconButton :appearance="EIconButtonAppearance.FilledTonal">
            <Icon>send</Icon>
        </IconButton>
        <IconButton :appearance="EIconButtonAppearance.Outlined">
            <Icon>send</Icon>
        </IconButton>
        <IconButton :appearance="EIconButtonAppearance.Standard">
            <Icon>send</Icon>
        </IconButton>

        <ToggleIconButton :appearance="EIconButtonAppearance.Filled">
            <Icon>send</Icon>
        </ToggleIconButton>
        <ToggleIconButton :appearance="EIconButtonAppearance.FilledTonal">
            <Icon>send</Icon>
        </ToggleIconButton>
        <ToggleIconButton :appearance="EIconButtonAppearance.Outlined">
            <Icon>send</Icon>
        </ToggleIconButton>
        <ToggleIconButton :appearance="EIconButtonAppearance.Standard">
            <Icon>send</Icon>
        </ToggleIconButton>

        <IconButton
            disabled
            :appearance="EIconButtonAppearance.Filled"
        >
            <Icon>send</Icon>
        </IconButton>
        <IconButton
            disabled
            :appearance="EIconButtonAppearance.FilledTonal"
        >
            <Icon>send</Icon>
        </IconButton>
        <IconButton
            disabled
            :appearance="EIconButtonAppearance.Outlined"
        >
            <Icon>send</Icon>
        </IconButton>
        <IconButton
            disabled
            :appearance="EIconButtonAppearance.Standard"
        >
            <Icon>send</Icon>
        </IconButton>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '../../../../../vue-mdc/src/components/icon'
import { EIconButtonAppearance, IconButton, ToggleIconButton } from '../../../../../vue-mdc/src/components/icon-button'

</script>

<style scoped></style>
