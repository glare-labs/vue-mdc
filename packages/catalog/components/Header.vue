<template>
    <header class="flex w-full items-center justify-between">
        <ClientOnly>
            <IconButton
                appearance="standard"
                @click="() => navigation.setIsOpen(!navigation.isOpen.value)"
            >
                <Icon>expand</Icon>
            </IconButton>
            <IconButton
                appearance="standard"
                @click="() => theme.isDark.value = !theme.isDark.value"
            >
                <Icon>{{ theme.isDark.value ? 'light_mode' : 'dark_mode' }}</Icon>
            </IconButton>
        </ClientOnly>

    </header>
</template>

<script setup lang="ts">
import type { ThemeProvider } from '~/app.vue'
import type { NavigationProvider } from './NavigationDrawerProvider.vue'

const navigation = inject<NavigationProvider>('navigation-drawer-provider')!
const theme = inject<ThemeProvider>('theme-provider')!

</script>

<style scoped>
</style>
