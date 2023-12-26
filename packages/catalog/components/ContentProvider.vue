<template>
    <div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const isHomepage = ref(true)
const page = ref(null)

export type ContentProvider = {
    isHomepage: Ref<boolean>
    currentPage: Ref<null | ParsedContent>
}

provide<ContentProvider>('content-provider', {
    isHomepage,
    currentPage: page
})

</script>

<style scoped>
</style>
