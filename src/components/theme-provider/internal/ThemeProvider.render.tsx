import { GenerateMaterialTheme } from '@/utils/material-theme'
import { defineComponent, onMounted, ref } from 'vue'
import { props, slots } from './ThemeProvider.type'

export const renderThemeProvider = () => defineComponent({
    name: 'MAMVThemeProvider',
    props,
    slots,
    setup(props, { slots }) {
        const target = ref()
        
        onMounted(() => {
            GenerateMaterialTheme(target.value, props.sourceColor.toString(), ['true'].includes(props.dark.toString()))
        })

        return () => (
            <div ref={target}>
                {
                    slots.default()
                }
            </div>
        )
    },
})
