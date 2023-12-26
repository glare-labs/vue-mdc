<template>
    <div class="overflow-auto">
        <div
            v-if="navigation.isOpen.value"
            class="scrim"
            @click="() => navigation.setIsOpen(false)"
        ></div>

        <NavigationDrawerModelPanel :open="navigation.isOpen.value">
            <ContentList v-slot="{ list }">
                <NavigationDrawerList
                    :list="list"
                    :current-page="content.currentPage.value"
                    :is-homepage="content.isHomepage.value"
                    @set-current-page="(e: null | ParsedContent) => content.currentPage.value = e"
                    @set-is-homepage="(e: boolean) => content.isHomepage.value = e"
                >
                    <template #start>
                        <div class="md:hidden md:pointer-events-none self-end">
                            <ClientOnly>
                                <IconButton
                                    appearance="standard"
                                    @click="() => navigation.setIsOpen(false)"
                                    class="h-[44px] min-h-[44px] w-[44px] min-w-[44px]"
                                >
                                    <Icon>close</Icon>
                                </IconButton>
                            </ClientOnly>
                        </div>
                    </template>
                </NavigationDrawerList>
            </ContentList>
        </NavigationDrawerModelPanel>

    </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { ContentProvider } from './ContentProvider.vue'
import type { NavigationProvider } from './NavigationDrawerProvider.vue'

const navigation = inject<NavigationProvider>('navigation-drawer-provider')!
const content = inject<ContentProvider>('content-provider')!

</script>

<style scoped>
.scrim {
    @apply bg-[--md-sys-color-scrim] opacity-[0.2] w-screen h-screen absolute left-0 top-0 z-10 lg:hidden lg:pointer-events-none;
}
</style>
