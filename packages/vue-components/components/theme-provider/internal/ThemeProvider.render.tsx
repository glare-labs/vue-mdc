import { GenerateMaterialTheme } from '../../../utils/material-theme'
import { defineComponent } from 'vue'
import { emits, props, slots } from './ThemeProvider.type'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Theme-Provider': typeof renderThemeProvider,
    }
}

export const renderThemeProvider = defineComponent({
    name: 'AmThemeProvider',
    props,
    slots,
    emits,
    render() {
        return (
            <div style={this.style}>
                {
                    this.$slots.default && this.$slots.default()
                }
            </div>
        )
    },
    data: () => ({
        style: '',
    }),
    methods: {
        generateTheme() {
            this.style = GenerateMaterialTheme(
                this.sourceColor.toString(),
                this.dark
            )
            this.$emit('theme-updated', this.style)
        },
    },
    watch: {
        sourceColor: {
            handler() {
                this.generateTheme()
            },
        },
        dark: {
            handler() {
                this.generateTheme()
            },
        },
    },
    mounted() {
        this.generateTheme()
    },
    inheritAttrs: false,
})
