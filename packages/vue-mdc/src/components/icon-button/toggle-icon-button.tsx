import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { defineComponent, onBeforeUnmount, onBeforeUpdate, onMounted, ref, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { isServer } from '../../utils/is-server'
import { FocusRing } from '../focus-ring'
import { Ripple } from '../ripple/ripple'
import { EIconButtonAppearance, type TIconButtonAppearance } from './icon-button-appearance'
import css from './styles/icon-button.module.scss'

export const ToggleIconButton = defineComponent({
    name: `${componentNamePrefix}-toggle-icon-button`,
    slots: {} as SlotsType<{
        default: void
    }>,
    emits: [
        'update:modelValue',
        'change'
    ],
    props: {
        appearance: {
            type: String as PropType<TIconButtonAppearance>,
            default: EIconButtonAppearance.Standard,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        defaultSelected: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        modelValue: {
            type: Boolean as PropType<boolean>,
            default: null,
        },
        name: {
            type: String as PropType<string>,
            default: null,
        },
        value: {
            type: String as PropType<string>,
            default: null,
        },
    },
    setup(props, { slots, emit }) {
        const root = ref<HTMLElement | null>(null)

        /**
         * States
         */
        const _selected = ref(props.defaultSelected)

        /**
         * Props
         */
        const _appearance = ref(props.appearance)
        const _disabled = ref(props.disabled)
        const _name = ref(props.name)
        const _value = ref(props.value)

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'appearance', ref: _appearance, reflect: true, type: 'string', },
                { attribute: 'disabled', ref: _disabled, reflect: true, type: 'boolean', },
                { attribute: 'name', ref: _name, reflect: true, type: 'string', },
                { attribute: 'value', ref: _value, reflect: true, type: 'string', },
                { attribute: 'selected', ref: _selected, reflect: true, type: 'boolean', },
            ],
        })

        /**
         * Methods
         */
        const setSelected = (value: boolean) => {
            const changeEvent = new Event('change', { bubbles: true, cancelable: true, })
            emit('change', changeEvent)
            const preventChange = !dispatchEvent(changeEvent)
            if (preventChange) {
                return
            }
            console.log('u')

            _selected.value = value
            emit('update:modelValue', value)
        }
        const handleIconButtonClick = (e: Event) => {
            e.stopImmediatePropagation()
            e.preventDefault()
            if (_disabled.value) {
                return
            }
            setSelected(!_selected.value)
        }

        onMounted(() => {
            if (isServer()) {
                return
            }

            root.value?.addEventListener('click', handleIconButtonClick)
        })

        onBeforeUnmount(() => {
            root.value?.removeEventListener('click', handleIconButtonClick)
        })

        onBeforeUpdate(() => {
            if (props.modelValue !== null) {
                _selected.value = props.modelValue
            }
        })

        return () => {
            const renderIcon = (
                <span class={css.icon}>
                    {slots.default && slots.default()}
                </span>
            )

            return (
                <button
                    class={[
                        css[_appearance.value],
                        css['toggle-icon-button'],
                        _selected.value && css.selected,
                        _disabled.value && css.disabled,
                    ]}
                    data-component="togglable-icon-button"
                    role='checkbox'
                    ref={root}
                >
                    <Ripple></Ripple>
                    <FocusRing shapeInherit={false}></FocusRing>

                    <div aria-hidden="true" class={css.touch}></div>
                    <div aria-hidden="true" class={css.background}></div>
                    <div aria-hidden="true" class={css.outline}></div>

                    {renderIcon}
                </button>
            )
        }
    },
    inheritAttrs: true,
})
