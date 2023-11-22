export * from './renderThemeProvider'
import { toRef } from 'vue'
import { ThemeProvider as TP } from './renderThemeProvider'

export const ThemeProvider = toRef(() => TP())
