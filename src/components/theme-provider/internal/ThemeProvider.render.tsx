import { GenerateMaterialTheme } from '@/utils/material-theme'
import { defineComponent } from 'vue'
import { props, slots } from './ThemeProvider.type'

export const renderThemeProvider = defineComponent({
    name: 'MAMVThemeProvider',
    props,
    slots,
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
            GenerateMaterialTheme(
                this.$el,
                this.sourceColor.toString(),
                ['true'].includes(this.dark.toString())
            )
        }
    },
    mounted() {
        this.generateTheme()
    },
    updated() {
        this.generateTheme()
    },
})
