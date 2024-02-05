import { GenerateMaterialTheme } from '../../utils/material-theme'
import { computed, defineCustomElement } from 'vue'
import { emits, props, slots } from './ThemeProvider.type'

declare module 'vue' {
    export interface GlobalComponents {
        'am-theme-provider': typeof ThemeProvider,
    }
}

export const ThemeProvider = defineCustomElement({
    name: 'AmThemeProvider',
    props,
    slots,
    emits,
    styles: [],
    setup(props, { emit }) {
        const themeStyle = computed(() => {
            emit('theme-update')
            return GenerateMaterialTheme(props.sourceColor, props.dark)
        })

        return () => (
            <div style={themeStyle.value}>
                <slot></slot>
            </div>
        )
    },
    inheritAttrs: true,
})
