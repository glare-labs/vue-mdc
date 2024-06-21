import { type DeepReadonly, type PropType, type SlotsType, type UnwrapNestedRefs, type VNodeRef, type WritableComputedRef, computed, defineComponent, onMounted, provide, readonly, ref, watch } from 'vue'
import { MaterialTheme, type TMaterialColorTokens, type TSourceColorHex } from '../../utils/theme/MaterialTheme'
import { Version } from '../../utils/Version'
import { EMaterialContrastLevel, type TMaterialContrastLevel } from '../../utils/theme/MaterialContrastLevel'
import { EMaterialVariant, type TMaterialVariant } from '../../utils/theme/MaterialVariant'
import { argbFromHex, Hct } from '@material/material-color-utilities'
import { GlareProviderContext, type TGlareProviderContext } from './Context'

type TThemeConfiguration = {
    sourceColor: TSourceColorHex
    dark: boolean
    contrastLevel: TMaterialContrastLevel
    variant: TMaterialVariant
}

class GlareProviderComponent {
    protected name = 'GlareUi-GlareProvider'
    protected props = {
        sourceColor: {
            default: '#1d4e20',
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
            default: EMaterialVariant.CONTENT,
            type: Number as PropType<TMaterialVariant>
        },
        disableRipple: {
            default: false,
            type: Boolean as PropType<boolean>
        },
    }
    protected slots = {} as SlotsType<{
        default: {
            version: string
            sourceColor: TSourceColorHex
            dark: boolean
            contrastLevel: TMaterialContrastLevel
            variant: TMaterialVariant
            colorTokens: TMaterialColorTokens
        }
    }>
    protected emits = []

    public component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        setup(props) {
            /**
             * 用于生成颜色的主题配置
             */
            const _themeConfiguration = ref<TThemeConfiguration>({
                sourceColor: props.sourceColor,
                dark: props.dark,
                contrastLevel: props.contrastLevel,
                variant: props.variant,
            })
            const themeConfiguration = computed({
                get: () => ({
                    contrastLevel: _themeConfiguration.value.contrastLevel,
                    isDark: _themeConfiguration.value.dark,
                    sourceColor: _themeConfiguration.value.sourceColor,
                    variant: _themeConfiguration.value.variant,
                }),
                set: (optional?: Partial<TThemeConfiguration>) => {
                    _themeConfiguration.value = {
                        ..._themeConfiguration.value,
                        ...optional
                    }
                }
            })
            watch(props, (changes) => {
                themeConfiguration.value = ({
                    contrastLevel: changes.contrastLevel,
                    dark: changes.dark,
                    sourceColor: changes.sourceColor,
                    variant: changes.variant,
                })
            }, {
                immediate: false,
            })

            const theme = computed(() => {
                /**
                 * New token prefix: --gu-sys-color-*
                 */
                let materialThemeGenerator = new MaterialTheme().setTokenPrefix('gu-sys-color').generate({...themeConfiguration.value, sourceColor: Hct.fromInt(argbFromHex(themeConfiguration.value!.sourceColor!))})
                const guTokens = materialThemeGenerator

                materialThemeGenerator = new MaterialTheme().setTokenPrefix('md-sys-color').generate({...themeConfiguration.value, sourceColor: Hct.fromInt(argbFromHex(themeConfiguration.value!.sourceColor!))})
                const mdTokens = materialThemeGenerator
                

                return ({
                    tokens: guTokens.tokens,
                    styleText: `.glare-provider {${guTokens.styleText()}; ${mdTokens.styleText()}};`,
                })
            })
    
            provide<DeepReadonly<UnwrapNestedRefs<TGlareProviderContext>>>(GlareProviderContext, readonly({
                theme,
                themeConfiguration: _themeConfiguration,
                setThemeConfiguration: (optional?: Partial<TThemeConfiguration>) => {
                    _themeConfiguration.value = {
                        ..._themeConfiguration.value,
                        ...optional
                    }
                },
                disableRipple: props.disableRipple,
            }))



            return {
                theme,
                themeConfiguration,
            }
        },
        render() {
            return (
                <div class={'glare-provider'}>
                    <style>{ this.theme.styleText }</style>
                    {
                        this.$slots.default && this.$slots.default({
                            version: Version.version,
                            contrastLevel: this.themeConfiguration!.contrastLevel!,
                            dark: this.themeConfiguration!.dark!,
                            sourceColor: this.themeConfiguration!.sourceColor!,
                            variant: this.themeConfiguration!.variant!,
                            colorTokens: this.theme.tokens
                        })
                    }
                </div>
            )
        }
    })
}

export const GlareProvider = new GlareProviderComponent().component
