import { computed, defineComponent, type PropType, type SlotsType } from 'vue'
import css from './Margin.module.css'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Layout-Margin': typeof renderMargin,
    }
}

const renderMargin = defineComponent({
    name: 'AmLayoutMargin',
    slots: Object as SlotsType<{
        default?: void
    }>,
    props: {
        margin: {
            default: '4px',
            type: String as PropType<`${number}px` | `${number}rem` | `${number}em`>,
        },
    },
    setup(props, { slots }) {
        const classes = computed(() => [
            css.surface,
        ])
        return () => (
            <div class={classes.value} style={{ ['--mamv-layout-margin-margin']: props.margin }}>
                {slots.default && slots.default()}
            </div>
        )
    },
})

export {
    renderMargin as Margin
}
