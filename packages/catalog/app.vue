<template>
    <ThemeProvider
        :source-color="sourceColor"
        :dark="isDark"
    >
        <ContentProvider>
            <NavigationDrawerProvider v-slot="{ isOpen }">
                <Background class="flex flex-col h-svh min-h-svh max-h-svh overflow-clip">

                    <Header></Header>

                    <div
                        class="lg:grid grid-cols-6 gap-2 flex-grow h-full overflow-clip m-2 mt-0"
                        :style="{
                            'grid-template-rows': `${isOpen ? 'auto' : '0px auto'}`,
                        }"
                        :class="isOpen ? 'lg:ml-0' : 'ml-2'"
                    >
                        <NavigationDrawer :class="isOpen ? 'lg:col-span-1' : ''"></NavigationDrawer>
                        <Content
                            class="col-span-full h-full w-full"
                            :class="{ 'lg:col-span-5': isOpen }"
                        ></Content>
                    </div>

                </Background>

            </NavigationDrawerProvider>
        </ContentProvider>
    </ThemeProvider>
</template>

<script setup lang="ts">
import { Icon, IconButton, RegisterComponents, Ripple, ThemeProvider, Button } from '../vue-components/lib'
import 'material-symbols'

const app = useNuxtApp().vueApp
// @ts-ignore
app.use(RegisterComponents(ThemeProvider, Ripple, Icon, IconButton, Button))

export type ThemeProvider = {
    isDark: Ref<boolean>
    sourceColor: Ref<string>
}

const isDark = ref(false)
const sourceColor = ref('#2A6B3C')
provide<ThemeProvider>('theme-provider', {
    isDark,
    sourceColor
})

</script>

<style scoped>
</style>
