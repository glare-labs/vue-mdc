import { PropType, SlotsType, computed, defineComponent, ref, watch } from 'vue'
import { EMaterialContrastLevel, EMaterialVariant, MaterialThemeGenerator, TColor, type TMaterialContrastLevel, type TMaterialVariant } from '../../utils/material-theme'
import typoCss from '../typography/MaterialTypographyImplement.module.css'

export const GlareContextInjection = Symbol()

type TSlots = {
    default: void
}
type TThemeConfiguration = {
    sourceColor: TColor
    dark: boolean
    contrastLevel: TMaterialContrastLevel
    variant: TMaterialVariant

}

class GlareProviderComponent {
    private static readonly name = 'GlareUi-GlareProvider'
    private static readonly props = {
        sourceColor: {
            default: '#123456',
            type: String as PropType<TColor>
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
    private static readonly slots = {} as SlotsType<TSlots>

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
            watch(() => props, () => {
                setThemeConfiguration({
                    contrastLevel: props.contrastLevel,
                    dark: props.dark,
                    sourceColor: props.sourceColor,
                    variant: props.variant,
                })
            })
            const tokensStyleText = computed<string>(() => `:root {${MaterialThemeGenerator.toStyleText(MaterialThemeGenerator.generate(props.sourceColor, {
                contrastLevel: props.contrastLevel,
                isDark: props.dark,
                variant: props.variant
            }))}}}`)
    
            return () => (
                <div ref={root} class={typoCss.typography}>
                    <style>{ tokensStyleText.value }</style>
                    {slots.default && slots.default()}
                </div>
            )
        },
    })
}

export const GlareProvider = GlareProviderComponent.component
