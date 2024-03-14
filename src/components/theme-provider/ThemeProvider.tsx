import { argbFromHex } from '@material/material-color-utilities'
import { EMaterialContrastLevel, MaterialDynamicColorGenerator, type TMaterialContrastLevel } from '../../utils/material-theme'
import { type PropType, defineComponent } from 'vue'
import css from './ThemeProvider.module.css'

export const ThemeProvider = defineComponent({
    name: 'GlareUi-ThemeProvider',
    props: {
        sourceColor: {
            type: String,
            default: '#2A6B3C'
        },
        dark: {
            type: Boolean,
            default: false
        },
        contrastLevel: {
            type: Number as PropType<TMaterialContrastLevel>,
            default: EMaterialContrastLevel.Default
        },
    },
    emits: {
        themeUpdate(payload: { style: string }) {
            return payload
        }
    },
    computed: {
        materialThemeStyle() {
            const themeStyleText = MaterialDynamicColorGenerator.ToStyleText(MaterialDynamicColorGenerator.GenerateBySourceColor({
                sourceColor: argbFromHex(this.sourceColor),
                contrastLevel: this.contrastLevel,
                isDark: this.dark
            }))
            this.$emit('themeUpdate', {
                style: themeStyleText
            })
            return themeStyleText
        }
    },
    render() {
        return (
            <div style={this.materialThemeStyle} class={css.typescale}>
                {this.$slots.default && this.$slots.default()}
            </div>
        )
    },
})
