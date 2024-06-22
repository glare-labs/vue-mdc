import { EMaterialContrastLevel, EMaterialVariant, type TMaterialContrastLevel, type TMaterialVariant } from '../../../ui/src'
import { defineStore } from 'pinia'

interface IThemeStoreState {
    sourceColorHex: string,
    isDark: boolean,
    contrastLevel: TMaterialContrastLevel
    variant: TMaterialVariant
}

export const useThemeStore = defineStore('dev-app-theme-store', {
    state: () => ({
        theme: {
            sourceColorHex: '#142d80',
            isDark: false,
            contrastLevel: EMaterialContrastLevel.Default,
            variant: EMaterialVariant.CONTENT
        } as IThemeStoreState
    }),
    getters: {
        getTheme: (state) => state.theme,
    },
    actions: {
        setTheme(callback: (e: IThemeStoreState) => Partial<IThemeStoreState>) {
            this.theme = {
                ...this.theme,
                ...callback(this.theme),
            }
        }
    }
})
