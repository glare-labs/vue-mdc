import { computed, defineComponent, type PropType, type SlotsType } from 'vue'
import css from './Flex.module.css'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Layout-Flex': typeof renderFlex,
    }
}

const renderFlex = defineComponent({
    name: 'AmLayoutFlex',
    slots: Object as SlotsType<{
        default?: void
    }>,
    props: {
        direction: {
            default: 'horizontal',
            type: String as PropType<'horizontal' | 'vertical'>,
        },
        reverse: {
            default: false,
            type: Boolean as PropType<boolean>
        },
        gap: {
            default: '0px',
            type: String as PropType<`${number}px` | `${number}rem` | `${number}em`>,
        },
    },
    setup(props, { slots }) {
        const flexDirectionProperty = computed(() => {
            if (props.direction === 'horizontal' && props.reverse) {
                return 'horizontal-reverse'
            } else if (props.direction === 'horizontal') {
                return 'horizontal'
            } else if (props.reverse) {
                return 'vertical-reverse'
            }
            return 'vertical'
        })
        const classes = computed(() => [
            css.surface,
            css[flexDirectionProperty.value]
        ])
        return () => (
            <div class={classes.value} style={{ ['--mamv-layout-flex-gap']: props.gap }}>
                {slots.default && slots.default()}
            </div>
        )
    },
})

export {
    renderFlex as Flex
}
