<template>
    <div class="bg-[--md-sys-color-surface] overflow-auto rounded-3xl p-3">
        <template v-if="!content.isHomepage.value && content.currentPage.value !== null">
            <ContentRenderer
                :value="content.currentPage.value"
                class="md-panel"
            ></ContentRenderer>
        </template>
        <Homepage v-else></Homepage>
    </div>
</template>

<script setup lang="ts">
import type { ContentProvider } from './ContentProvider.vue'

const content = inject<ContentProvider>('content-provider')!

</script>

<style scoped>
</style>
