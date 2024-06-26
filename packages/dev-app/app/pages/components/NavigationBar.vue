<template>
    <NuxtLayout
        name="page-view-layout"
        headline="NavigationBar"
    >
        <NuxtLayout
            name="component-layout"
            headline="NavigationBar"
        >
            <NavigationBar>
                <NavigationTab label="Tab 1">
                    <template #inactive-icon>
                        <Icon>send</Icon>
                    </template>
                    <template #active-icon>
                        <Icon>group</Icon>
                    </template>
                </NavigationTab>
                <NavigationTab label="Tab 2">
                    <template #inactive-icon>
                        <Icon>send</Icon>
                    </template>
                    <template #active-icon>
                        <Icon>group</Icon>
                    </template>
                </NavigationTab>
            </NavigationBar>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { NavigationBar, NavigationTab, Icon } from '../../../../ui/src'

definePageMeta({
    name: 'NavigationBar'
})
</script>
