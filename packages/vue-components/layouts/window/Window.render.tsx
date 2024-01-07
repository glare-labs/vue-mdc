import { defineComponent, type SlotsType } from 'vue'
import css from './Window.module.css'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Layout-Window': typeof renderWindow,
    }
}

const renderWindow = defineComponent({
    name: 'AmLayoutWindow',
    slots: Object as SlotsType<{
        default?: void
    }>,
    setup(_, { slots }) {
        return () => (
            <div class={css.surface}>
                {slots.default && slots.default()}
            </div>
        )
    },
})

export {
    renderWindow as Window
}
