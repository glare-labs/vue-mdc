<template>
    <div>
        <slot :is-open="isOpen"></slot>
    </div>
</template>

<script setup lang="ts">

export type NavigationProvider = {
    isOpen: Ref<boolean>
    setIsOpen: (e: boolean) => void
}

const isOpen = ref(true)
const setIsOpen = (e: boolean) => {
    isOpen.value = e
}

provide<NavigationProvider>('navigation-drawer-provider', {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
})

</script>

<style scoped>
</style>
