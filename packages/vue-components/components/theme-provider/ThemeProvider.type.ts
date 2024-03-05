import type { EMaterialContrastLevel } from '../../utils/material-theme'

export interface IThemeProvider {

    /**
     * @default false
     */
    dark?: boolean

    /**
     * @default '#2A6B3C'
     */
    sourceColor?: string

    /**
     * @default 0
     */
    contrastLevel?: number | EMaterialContrastLevel
}
