import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { isServer } from '../../utils/is-server'
import { Ripple } from '../ripple/ripple'
import { EIconButtonAppearance, type TIconButtonAppearance } from './icon-button-appearance'
import { EIconButtonType, type TIconButtonType } from './icon-button-type'
import css from './styles/icon-button.module.scss'

class ToggleIconButtonComponent {
    private readonly name = `${componentNamePrefix}-toggle-icon-button`
    private readonly props = {
        appearance: {
            type: String as PropType<TIconButtonAppearance>,
            default: EIconButtonAppearance.Standard,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String as PropType<TIconButtonType>,
            default: EIconButtonType.Button,
        },
        defaultSelected: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        modelValue: {
            type: Boolean as PropType<boolean>,
            default: null,
        }
    }
    private readonly emits = [
        'update:modelValue',
        'change'
    ]
    private readonly slots = {} as SlotsType<{
        default: void
    }>

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        emits: this.emits,
        slots: this.slots,
        mounted() {
            if (isServer()) {
                return
            }
            (this.$el as HTMLButtonElement).addEventListener('click', this.handleIconButtonClick)
        },
        beforeUpdate() {
            if (this.modelValue !== null) {
                this.selected = this.modelValue
            }
        },
        beforeUnmount() {
            (this.$el as HTMLButtonElement).removeEventListener('click', this.handleIconButtonClick)
        },
        data: (props) => ({
            selected: props.defaultSelected || props.modelValue,
        }),
        methods: {
            handleIconButtonClick(e: Event) {
                e.stopImmediatePropagation()
                e.preventDefault()
                this.setSelected(!this.selected)
            },
            setSelected(value: boolean) {
                const changeEvent = new Event('change', { bubbles: true, cancelable: true, })
                this.$emit('change', changeEvent)
                const preventChange = !dispatchEvent(changeEvent)
                if (preventChange) {
                    return
                }
                if (this.selected === value) {
                    return
                }
                this.selected = value
                this.$emit('update:modelValue', value)
            }
        },
        render() {
            const renderIcon = (
                <span class={css.icon}>
                    {this.$slots.default && this.$slots.default()}
                </span>
            )

            return (
                <button
                    class={[
                        css[this.appearance],
                        css['toggle-icon-button'],
                        this.selected && css.selected,
                        this.disabled && css.disabled,
                    ]}
                    data-component="togglable-icon-button"
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    type={this.type}
                    role='checkbox'
                >
                    <Ripple></Ripple>

                    <div aria-hidden="true" class={css.touch}></div>
                    <div aria-hidden="true" class={css.background}></div>
                    <div aria-hidden="true" class={css.outline}></div>

                    {renderIcon}
                </button>
            )
        }
    })
}

export const ToggleIconButton = new ToggleIconButtonComponent().component
