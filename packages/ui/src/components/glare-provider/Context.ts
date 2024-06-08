import type { ComputedRef, Ref } from 'vue'
import type { TMaterialContrastLevel } from '../../utils/theme/MaterialContrastLevel'
import type { TMaterialColorTokens, TSourceColorHex } from '../../utils/theme/MaterialTheme'
import type { TMaterialVariant } from '../../utils/theme/MaterialVariant'

export const GlareProviderContext = Symbol('glare-glare-provider-context')

export type TGlareProviderContext = {
    theme: ComputedRef<{
        tokens: TMaterialColorTokens
        styleText: string
    }>
    themeConfiguration: Ref<{
        sourceColor: TSourceColorHex
        dark: boolean
        contrastLevel: TMaterialContrastLevel
        variant: TMaterialVariant
    }>,
    setThemeConfiguration: (optional?: Partial<{
        sourceColor: TSourceColorHex
        dark: boolean
        contrastLevel: TMaterialContrastLevel
        variant: TMaterialVariant
    }>) => void,
    disableRipple: boolean,
}
