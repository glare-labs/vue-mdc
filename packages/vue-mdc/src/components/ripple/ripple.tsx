import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { defineComponent, onMounted, ref, type PropType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { isServer } from '../../utils'
import { RippleAttachableController } from './ripple-attachable-controller'
import css from './styles/ripple.module.scss'

export const Ripple = defineComponent({
    name: `${componentNamePrefix}-ripple`,
    emits: [],
    props: {
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

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'disabled', ref: _disabled, reflect: true, type: 'boolean' },
                { attribute: 'for', ref: _for, reflect: true, type: 'string' },
            ],
        })

        onMounted(() => {
            if (isServer()) {
                return
            }

            const rippleAttachableController = new RippleAttachableController(root.value!)

            if (_for.value !== null) {
                root.value?.setAttribute('for', _for.value)
            }

            rippleAttachableController.hostConnected()
        })

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
