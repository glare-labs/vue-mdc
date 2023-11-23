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
    MakeSurfaceContainer(target, dark)
}

/**
 * @see ONLY DEV IN EMVIRONMENT
 */
function MakeSurfaceContainer(target: HTMLElement, dark: boolean) {
    if(!dark) {
        target.style.setProperty('--md-sys-color-surface-container-lowest', '#ffffff')
        target.style.setProperty('--md-sys-color-surface-container-low', '#f1f5ec')
        target.style.setProperty('--md-sys-color-surface-container', '#ebefe7')
        target.style.setProperty('--md-sys-color-surface-container-high', '#e5e9e1')
        target.style.setProperty('--md-sys-color-surface-container-highest', '#e0e4dc')
    } else {
        target.style.setProperty('--md-sys-color-surface-container-lowest', '#0b0f0b')
        target.style.setProperty('--md-sys-color-surface-container-low', '#181d18')
        target.style.setProperty('--md-sys-color-surface-container', '#1c211c')
        target.style.setProperty('--md-sys-color-surface-container-high', '#262b26')
        target.style.setProperty('--md-sys-color-surface-container-highest', '#313630')

    }
}