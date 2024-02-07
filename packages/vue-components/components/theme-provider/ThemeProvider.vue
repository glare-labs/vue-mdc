<template>
    <div :style="themeStyleText">
        <slot :tokens="themeStyleText"></slot>
    </div>
</template>

<script setup lang="ts">
import { generateMaterialThemeStyleText } from '../../utils/material-theme'
import { computed } from 'vue'
import type { IThemeProvider } from './ThemeProvider.type'

const props = withDefaults(
    defineProps<IThemeProvider>(),
    {
        dark: false,
        sourceColor: '#2A6B3C',
        contrastLevel: 0,
    }
)

const emits = defineEmits<{
    'theme-update': [],
}>()

const themeStyleText = computed(() => {
    emits('theme-update')
    return generateMaterialThemeStyleText(props.sourceColor, props.dark, props.contrastLevel)
})

</script>

