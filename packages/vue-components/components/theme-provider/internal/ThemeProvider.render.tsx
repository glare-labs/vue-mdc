import { GenerateMaterialTheme } from '../../../utils/material-theme'
import { defineComponent } from 'vue'
import { emits, props, slots } from './ThemeProvider.type'

export const renderThemeProvider = defineComponent({
    name: 'MAMVThemeProvider',
    props,
    slots,
    emits,
    render() {
        return (
            <div>
                {
                    this.$slots.default && this.$slots.default()
                }
            </div>
        )
    },
    methods: {
        generateTheme() {
            const result = GenerateMaterialTheme(
                this.$el,
                this.sourceColor.toString(),
                ['true'].includes(this.dark.toString())
            )
            this.$emit('theme-updated', result)
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
})
