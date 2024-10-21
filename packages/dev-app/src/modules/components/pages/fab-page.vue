<template>
    <div>
        <Fab :size="EFabSize.Large">
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>
        <Fab :size="EFabSize.Medium">
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>
        <Fab :size="EFabSize.Small">
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>

        <Fab :variant="EFabVariant.Primary">
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>
        <Fab :variant="EFabVariant.Secondary">
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>
        <Fab :variant="EFabVariant.Tertiary">
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>
        <Fab :variant="EFabVariant.Surface">
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>

        <Fab :size="EFabSize.Large">
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>

        <Fab
            :size="EFabSize.Medium"
            label="Medium Fab Label Only"
        >
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>

        <Fab :size="EFabSize.Small">
            <template #default>
                <Icon>send</Icon>
            </template>
        </Fab>


    </div>
</template>

<script setup lang="ts">
import { EFabSize, EFabVariant, Fab } from '../../../../../vue-mdc/src/components/fab'
import { Icon } from '../../../../../vue-mdc/src/components/icon'
</script>

<style scoped></style>
