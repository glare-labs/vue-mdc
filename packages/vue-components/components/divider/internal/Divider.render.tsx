import { defineComponent } from 'vue'
import { props } from './Divider.type'
import css from './Divider.module.css'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Divider': typeof renderDivider,
    }
}

/**
 * @alias am-divided
 */
export const renderDivider = defineComponent({
    name: 'AmDivider',
    props,
    computed: {
        classes() {
            return [
                css.surface,
                css[this.direction],
                css[this.variant],
            ]
        },
    },
    render() {
        return (
            <span
                class={this.classes}
                aria-hidden='true'
            ></span>
        )
    },
})
