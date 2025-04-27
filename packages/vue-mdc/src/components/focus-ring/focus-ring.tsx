import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { defineComponent, onBeforeUnmount, onMounted, ref, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { isServer } from '../../utils'
import { FocusRingController } from './focus-ring-controller'
import css from './styles/focus-ring.module.scss'

export const FocusRing = defineComponent({
    name: `${componentNamePrefix}-focus-ring`,
    slots: {} as SlotsType<{}>,
    emits: [],
    props: {
        /**
         * Default is false. When inward is true, the focus-ring focuses within the element.
         * 
         * @default false
         */
        inward: {
            default: false,
            type: Boolean as PropType<boolean>,
        },
        shapeInherit: {
            default: true,
            type: Boolean as PropType<boolean>,
        },
        /**
         * The target element that activates the focus-ring component. 
         * If this parameter is not specified, the parent element is the target element by default. 
         * Please make sure that the **position attribute value of the target element's CSS is relative**.
         * 
         * @default null
         */
        for: {
            default: null,
            type: String as PropType<string | null>,
        },
    },
    setup(props) {
        const root = ref<HTMLElement | null>(null)
        const focusRingController = ref<null | FocusRingController>(null)

        const _for = ref(props.for)
        const _inward = ref(props.inward)
        const _shapeInherit = ref(props.shapeInherit)

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'for', ref: _for, reflect: true, type: 'string' },
                { attribute: 'inward', ref: _inward, reflect: true, type: 'boolean' },
                { attribute: 'shape-inherit', ref: _shapeInherit, reflect: true, type: 'boolean' },
            ]
        })

        onMounted(() => {
            if (isServer()) {
                return
            }

            focusRingController.value = new FocusRingController(root.value!)
            focusRingController.value.htmlFor = _for.value
            focusRingController.value.hostConnected()
        })

        onBeforeUnmount(() => {
            focusRingController.value?.hostDisconnected()
        })

        return () => (
            <div
                class={css['focus-ring']}
                aria-hidden="true"
                data-component="focus-ring"
                ref={root}
            ></div>

        )
    },
})
