import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { defineComponent, ref, type PropType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { RippleAttachableController } from './ripple-attachable-controller'
import css from './styles/ripple.module.scss'

export const Ripple = defineComponent({
    name: `${componentNamePrefix}-ripple`,
    emits: [],
    props: {
        id: {
            default: null,
            type: String as PropType<string>
        },
        for: {
            default: null,
            type: String as PropType<string>
        },
        disabled: {
            default: false,
            type: Boolean as PropType<boolean>
        }
    },
    setup(props) {
        const root = ref<HTMLElement | null>(null)

        const _disabled = ref(props.disabled)
        const _for = ref(props.for)
        const _id = ref(props.id)

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'id', ref: _id, reflect: true, type: 'string' },
                { attribute: 'disabled', ref: _disabled, reflect: true, type: 'boolean' },
                { attribute: 'for', ref: _for, reflect: true, type: 'string' },
            ],
            tick: 'before'
        })

        const controller = new RippleAttachableController(root)

        return () => (
            <span
                data-component="ripple"
                aria-hidden="true"
                class={[css.ripple]}
                ref={root}
            ></span>

        )
    },
})
