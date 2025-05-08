import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { defineComponent, ref, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import css from './styles/plain-tooltip.module.scss'

export const PlainTooltip = defineComponent({
    name: `${componentNamePrefix}-plain-tooltip`,
    emits: [],
    slots: {} as SlotsType<{}>,
    props: {
        ['supportingText']: {
            type: String as PropType<string>,
            default: null
        },
    },
    setup(props, { }) {
        const root = ref<HTMLElement | null>(null)

        /**
         * Props
         */
        const _supportingText = ref(props.supportingText)

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'supporting-text', ref: _supportingText, reflect: true, type: 'string' },
            ],
        })

        return () => {
            return (
                <span ref={root} class={css['plain-tooltip']}>
                    {_supportingText.value && <span class={css['supporting-text']}>{_supportingText.value}</span>}
                </span>
            )
        }
    },
    inheritAttrs: false,
})
