<template>
    <div>
        <NavigationRail>
            <NavigationRailTab label="Label 1">
                <template #active-icon>
                    <Icon>home</Icon>
                </template>
                <template #inactive-icon>
                    <Icon>home</Icon>
                </template>
            </NavigationRailTab>

            <NavigationRailTab label="Label 2">
                <template #active-icon>
                    <Icon>send</Icon>
                </template>
                <template #inactive-icon>
                    <Icon>send</Icon>
                </template>
            </NavigationRailTab>

            <NavigationRailTab label="Label 3">
                <template #active-icon>
                    <Icon>person</Icon>
                </template>
                <template #inactive-icon>
                    <Icon>person</Icon>
                </template>
            </NavigationRailTab>
        </NavigationRail>

    </div>
</template>

<script setup lang="ts">
import { Icon } from '../../../../../vue-mdc/src/components/icon'
import { NavigationRail } from '../../../../../vue-mdc/src/components/navigation-rail'
import { NavigationRailTab } from '../../../../../vue-mdc/src/components/navigation-rail-tab'

</script>

<style scoped></style>
