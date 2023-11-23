export * from './ThemeProvider.render'
import { toRef } from 'vue'
import { renderThemeProvider } from './ThemeProvider.render'

export const ThemeProvider = toRef(() => renderThemeProvider())
