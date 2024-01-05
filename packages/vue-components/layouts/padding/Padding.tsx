import { computed, defineComponent, type PropType, type SlotsType } from 'vue'
import css from './Padding.module.css'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Layout-Padding': typeof renderPadding,
    }
}

const renderPadding = defineComponent({
    name: 'AmLayoutPadding',
    slots: Object as SlotsType<{
        default?: void
    }>,
    props: {
        padding: {
            default: '4px',
            type: String as PropType<`${number}px` | `${number}rem` | `${number}em`>,
        },
    },
    setup(props, { slots }) {
        const classes = computed(() => [
            css.surface,
        ])
        return () => (
            <div class={classes.value} style={{ ['--mamv-layout-padding-padding']: props.padding }}>
                {slots.default && slots.default()}
            </div>
        )
    },
})

export {
    renderPadding as Padding,
}
