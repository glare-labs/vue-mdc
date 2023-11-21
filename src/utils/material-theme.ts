import { argbFromHex, themeFromSourceColor, applyTheme } from '@material/material-color-utilities'


export function GenerateMaterialTheme(
    target: HTMLElement,
    sourceColor: string,
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches
) {
    // Get the theme from a hex color
    const theme = themeFromSourceColor(argbFromHex(sourceColor))


    // Apply the theme to the body by updating custom properties for material tokens
    applyTheme(theme, { target, dark })

}