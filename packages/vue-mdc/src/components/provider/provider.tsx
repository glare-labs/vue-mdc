import { EMaterialContrastLevel, EMaterialVariant, MaterialDynamicTokens, MaterialTokens, type TMaterialContrastLevel, type TMaterialVariant } from '@glare-labs/material-tokens-generator'
import { Hct, TonalPalette } from '@material/material-color-utilities'
import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { isServer } from '../../utils/is-server'

class ProviderComponent {
    private readonly name = `${componentNamePrefix}-provider`

    protected readonly props = {
        sourceColorHct: {
            default: Hct.from(90, 100, 75),
            type: Object as PropType<Hct>
        },
        enableDynamicMode: {
            default: false,
            type: Boolean as PropType<boolean>
        },
        primaryPalette: {
            default: TonalPalette.fromHueAndChroma(50, 50),
            type: Object as PropType<TonalPalette>,
        },
        secondaryPalette: {
            default: TonalPalette.fromHueAndChroma(50, 50),
            type: Object as PropType<TonalPalette>,
        },
        tertiaryPalette: {
            default: TonalPalette.fromHueAndChroma(50, 50),
            type: Object as PropType<TonalPalette>,
        },
        neutralPalette: {
            default: TonalPalette.fromHueAndChroma(50, 50),
            type: Object as PropType<TonalPalette>,
        },
        neutralVariantPalette: {
            default: TonalPalette.fromHueAndChroma(50, 50),
            type: Object as PropType<TonalPalette>,
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
            default: EMaterialVariant.Content,
            type: Number as PropType<TMaterialVariant>
        },
        styleAttribute: {
            default: 'md-theme-style-target',
            type: String as PropType<string>
        },
        prefix: {
            default: 'md-sys-color',
            type: String as PropType<string>
        },
        noEmit: {
            default: false,
            type: Boolean as PropType<boolean>
        }
    }
    protected readonly slots = {} as SlotsType<{
        default: void
    }>
    protected readonly emits = ['theme-update']

    public component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        mounted() {
            if (isServer()) {
                return
            }

            if (!(this.$el as Element).getAttribute(this.styleAttribute)) {
                (this.$el as Element).setAttribute(this.styleAttribute, '')
            }

            if (!this.noEmit && !this.queryMdStyleElement()) {
                const sE = this.createMdStyleElement()
                this.updateMdStyleElement(sE, this.createMdThemeStyle())
                this.insertMdStyleElementToRoot(sE)
            }
        },
        updated() {
            if(this.noEmit) {
                const styleElement = this.queryMdStyleElement()
                if (styleElement !== null) {
                    this.updateMdStyleElement(styleElement, this.createMdThemeStyle())
                }
            }
        },
        beforeUnmount() {
            this.queryMdStyleElement()?.remove()
        },
        methods: {
            createMdStyleElement() {
                const styleElement = document.createElement('style')
                styleElement.setAttribute('class', 'md-theme-provider')
                return styleElement
            },
            queryMdStyleElement() {
                return (this.$el as Element).querySelector('.md-theme-provider')
            },
            insertMdStyleElementToRoot(styleElement: Element) {
                (this.$el as Element).appendChild(styleElement)
            },
            updateMdStyleElement(styleElement: Element, styleText: string) {
                const themeUpdateEvent = new Event('theme-update', { cancelable: true })
                this.$emit('theme-update', themeUpdateEvent)
                const preventUpdate = !dispatchEvent(themeUpdateEvent)
                if (preventUpdate) {
                    return
                }
                styleElement.textContent = `[${this.styleAttribute}] {${styleText}}`
            },
            createMdThemeStyle() {
                let theme = null
                if (this.enableDynamicMode) {
                    theme = new MaterialDynamicTokens({
                        sourceColorHct: this.sourceColorHct,
                        primaryPalette: this.primaryPalette,
                        secondaryPalette: this.secondaryPalette,
                        tertiaryPalette: this.tertiaryPalette,
                        neutralPalette: this.neutralPalette,
                        neutralVariantPalette: this.neutralVariantPalette,
                        contrastLevel: this.contrastLevel,
                        isDark: this.dark,
                        variant: this.variant,
                        prefix: 'md-sys-color'
                    })
                } else {
                    theme = new MaterialTokens(this.sourceColorHct, {
                        contrastLevel: this.contrastLevel,
                        isDark: this.dark,
                        variant: this.variant,
                        prefix: this.prefix
                    })
                }
                return theme.cssText()
            },
        },
        render() {
            return (
                <div data-component="glare-provider" class="glare-provider">
                    {
                        this.$slots.default && this.$slots.default()
                    }
                </div>
            )
        }
    })
}

export const Provider = new ProviderComponent().component
