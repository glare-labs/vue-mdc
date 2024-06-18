import { defineStore } from 'pinia'
import { EMaterialContrastLevel, EMaterialVariant } from '../../ui/src'

export const useThemeStore = defineStore('dev-app-theme', {
    state: () => ({
        sourceColorHex: '#142d80',
        isDark: false,
        contrastLevel: EMaterialContrastLevel.Default,
        variant: EMaterialVariant.CONTENT
    }),
})
