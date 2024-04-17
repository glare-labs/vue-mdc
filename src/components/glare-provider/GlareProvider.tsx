import { ComputedRef, PropType, SlotsType, computed, defineComponent, provide, ref, watch } from 'vue'
import { EMaterialContrastLevel, EMaterialVariant, MaterialThemeGenerator, TColor, TMaterialColors, type TMaterialContrastLevel, type TMaterialVariant } from '../../utils/material-theme'
import { MaterialTypescale } from '../../utils/material-typescale'

export const GlareContextInjection = Symbol()

type TPublicData = {
    themeConfiguration: TThemeConfiguration,
    tokensObject: TMaterialColors,
    tokensStyleText: string
}
type TSlots = {
    default: TPublicData
}
type TThemeConfiguration = {
    sourceColor: TColor
    dark: boolean
    contrastLevel: TMaterialContrastLevel
    variant: TMaterialVariant

}
const Props = {
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

export const GlareProvider = defineComponent({
    name: 'GlareUi-GlareProvider',
    props: Props,
    slots: {} as SlotsType<TSlots>,
    setup(props) {
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

        watch(props, () => {
            setThemeConfiguration({
                contrastLevel: props.contrastLevel,
                dark: props.dark,
                sourceColor: props.sourceColor,
                variant: props.variant,
            })
        })

        const tokensObject = computed<TMaterialColors>(() => MaterialThemeGenerator.generate(props.sourceColor, {
            contrastLevel: props.contrastLevel,
            isDark: props.dark,
            variant: props.variant
        }))
        const tokensStyleText = computed<string>(() => MaterialThemeGenerator.toStyleText(tokensObject.value))

        const publicData = computed<TPublicData>(() => ({
            themeConfiguration: themeConfiguration.value,
            tokensObject: tokensObject.value,
            tokensStyleText: tokensStyleText.value,
        }))

        provide<ComputedRef<TPublicData>>(GlareContextInjection, publicData)
        return {
            publicData
        }
    },
    computed: {
        styleTextContent() {
            return `:root {${this.publicData.tokensStyleText}} ${MaterialTypescale.generate()}`
        }
    },
    render() {
        return (
            <>
                <style type='text/css'>
                    {this.styleTextContent}
                </style>
                {this.$slots.default(this.publicData)}
            </>
        )
    }
})
