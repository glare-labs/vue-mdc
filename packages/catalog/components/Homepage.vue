<template>
    <div class="p-6 space-y-32 lg:text-center">
        <section class="space-y-8">
            <section class="flex flex-col">
                <p
                    class="font-bold text-2xl text-[--md-sys-color-on-surface-variant]"
                    variant="headline-large"
                >
                    Material
                </p>
                <p
                    class="font-bold text-6xl bg-gradient-to-br from-green-300 to-emerald-900 bg-clip-text text-transparent"
                    variant="display-large"
                >
                    Anti-Mage
                </p>
            </section>

            <p class="block text-xl text-[--md-sys-color-on-surface]">
                尝试我们的Material Design 3的实现, Anti-Mage, 为Vue3提供。
            </p>

            <div class="space-x-2">
                <ClientOnly>
                    <Button @click="() => {
                        content.currentPage.value = data.data.value
                        content.isHomepage.value = false
                    }">
                        <Icon>play_arrow</Icon>
                        快速开始
                    </Button> <a
                        href="https://github.com/bre97-web/material-anti-mage-vue"
                        target="_blank"
                    >
                        <Button appearance="text">
                            <Icon>code</Icon>
                            Github
                        </Button>
                    </a>
                </ClientOnly>
            </div>
        </section>



        <section class="paragraph">
            <div class="title-card-group">
                <div>
                    <ClientOnly>
                        <Ripple></Ripple>
                        <Icon class="icon">deployed_code</Icon>
                    </ClientOnly>
                    <section>
                        <h1>完全的TypeScript支持</h1>
                        <p>代码通过TypeScript构建，自然能够通过TS代码感知获取流畅地编码体验。</p>
                    </section>
                </div>

                <div>
                    <ClientOnly>

                        <Ripple></Ripple>
                        <Icon class="icon">rocket_launch</Icon>
                    </ClientOnly>

                    <section>
                        <h1>在Vue3上快速启动</h1>
                        <p>通过插件的方式注册全局组件，或指定要注册的组件。</p>
                    </section>
                </div>

                <div>
                    <ClientOnly>

                        <Ripple></Ripple>
                        <Icon class="icon">token</Icon>
                    </ClientOnly>

                    <section>
                        <h1>基于Material Design 3的设计原则</h1>
                        <p>所有组件尽可能的符合MD设计规范。基于谷歌的天然的动态配色，和深色模式。</p>
                    </section>
                </div>

            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { ContentProvider } from './ContentProvider.vue'

const content = inject<ContentProvider>('content-provider')!

const data = await useAsyncData('quick-start', () => queryContent('/quick-start').findOne())

</script>

<style scoped>
</style>
