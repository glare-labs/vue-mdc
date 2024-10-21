<template>
    <div>
        <NavigationBar>
            <NavigationTab label="Label 1">
                <template #active-icon>
                    <Icon>home</Icon>
                </template>
                <template #inactive-icon>
                    <Icon>home</Icon>
                </template>
            </NavigationTab>

            <NavigationTab label="Label 2">
                <template #active-icon>
                    <Icon>send</Icon>
                </template>
                <template #inactive-icon>
                    <Icon>send</Icon>
                </template>
            </NavigationTab>

            <NavigationTab label="Label 3">
                <template #active-icon>
                    <Icon>person</Icon>
                </template>
                <template #inactive-icon>
                    <Icon>person</Icon>
                </template>
            </NavigationTab>
        </NavigationBar>

        <NavigationBar ripple-unbounded>
            <NavigationTab label="Label 1">
                <template #active-icon>
                    <Icon>home</Icon>
                </template>
                <template #inactive-icon>
                    <Icon>home</Icon>
                </template>
            </NavigationTab>

            <NavigationTab label="Label 2">
                <template #active-icon>
                    <Icon>send</Icon>
                </template>
                <template #inactive-icon>
                    <Icon>send</Icon>
                </template>
            </NavigationTab>

            <NavigationTab label="Label 3">
                <template #active-icon>
                    <Icon>person</Icon>
                </template>
                <template #inactive-icon>
                    <Icon>person</Icon>
                </template>
            </NavigationTab>
        </NavigationBar>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '../../../../../vue-mdc/src/components/icon'
import { NavigationBar } from '../../../../../vue-mdc/src/components/navigation-bar'
import { NavigationTab } from '../../../../../vue-mdc/src/components/navigation-tab'

</script>

<style scoped></style>
