import { type PropType, type SlotsType, computed, defineComponent, ref, watch } from 'vue'
import { MaterialTheme, type TMaterialColorTokens, type TSourceColorHex } from '../../theme/MaterialTheme'
import { Version } from '../../utils/Version'
import typoCss from '../typography/MaterialTypographyImplement.module.css'
import { EMaterialContrastLevel, type TMaterialContrastLevel } from '../../theme/MaterialContrastLevel'
import { EMaterialVariant, type TMaterialVariant } from '../../theme/MaterialVariant'
import { argbFromHex, Hct } from '@material/material-color-utilities'

export const GlareContextInjection = Symbol()

type TThemeConfiguration = {
    sourceColor: TSourceColorHex
    dark: boolean
    contrastLevel: TMaterialContrastLevel
    variant: TMaterialVariant
}

class GlareProviderComponent {
    private static readonly name = 'GlareUi-GlareProvider'
    private static readonly props = {
        sourceColor: {
            default: '#123456',
            type: String as PropType<TSourceColorHex>
        },
        dark: {
            default: false,
            type: Boolean as PropType<boolean>
        },
        contrastLevel: {
            default: EMaterialContrastLevel.Default,
            type: Number as PropType<TMaterialContrastLevel>
        },
        variant: {
            default: EMaterialVariant.TONAL_SPOT,
            type: Number as PropType<TMaterialVariant>
        },
    }
    private static readonly slots = {} as SlotsType<{
        default: {
            version: string
            sourceColor: TSourceColorHex
            dark: boolean
            contrastLevel: TMaterialContrastLevel
            variant: TMaterialVariant
            colorTokens: TMaterialColorTokens
        }
    }>

    public static readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        setup(props, { slots }) {
            const root = ref<null | HTMLElement>(null)

            /**
             * 用于生成颜色的主题配置
             */
            const themeConfiguration = ref<TThemeConfiguration>({
                sourceColor: props.sourceColor,
                dark: props.dark,
                contrastLevel: props.contrastLevel,
                variant: props.variant,
            })
            const setThemeConfiguration = (optional?: Partial<TThemeConfiguration>) => {
                themeConfiguration.value = {
                    ...themeConfiguration.value,
                    ...optional
                }
            }
            watch(() => props, (c) => {
                console.log('u', c);
                
                setThemeConfiguration({
                    contrastLevel: props.contrastLevel,
                    dark: props.dark,
                    sourceColor: props.sourceColor,
                    variant: props.variant,
                })
            })

            const theme = computed(() => MaterialTheme.generate({
                    contrastLevel: themeConfiguration.value.contrastLevel,
                    isDark: themeConfiguration.value.dark,
                    sourceColor: Hct.fromInt(argbFromHex(themeConfiguration.value.sourceColor)),
                    variant: themeConfiguration.value.variant,
                })
            )
            const themeStyleTokens = computed(() => theme.value.styleText())
    
            return () => (
                <div ref={root} class={typoCss.typography}>
                    <style>{ themeStyleTokens.value }</style>
                    {slots.default && slots.default({
                        version: Version.version,
                        contrastLevel: themeConfiguration.value.contrastLevel,
                        dark: themeConfiguration.value.dark,
                        sourceColor: themeConfiguration.value.sourceColor,
                        variant: themeConfiguration.value.variant,
                        colorTokens: theme.value.tokens
                    })}
                </div>
            )
        },
    })
}

export const GlareProvider = GlareProviderComponent.component
