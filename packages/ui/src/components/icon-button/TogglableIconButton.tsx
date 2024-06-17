import { type PropType, computed, defineComponent, onBeforeMount, ref, watch, type SlotsType } from 'vue'
import { Ripple } from '../ripple/Ripple'
import { EIconButtonAppearance, type TIconButtonAppearance } from './IconButtonAppearance'
import { EIconButtonType, type TIconButtonType } from './IconButtonType'
import css from './styles/icon-button.module.scss'

export class TogglableIconButtonComponent {
    private name = 'GlareUi-TogglableIconButton'
    private props = {
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
            default: false,
        }
    }
    private emits = [
        'update:modelValue'
    ]
    private slots = {} as SlotsType<{
        default: void
    }>

    public component = defineComponent({
        name: this.name,
        props: this.props,
        emits: this.emits,
        slots: this.slots,
        setup(props, { emit }) {
            /**
             * @private
             */
            const _selected = ref(props.modelValue)
    
            /**
             * @public
             */
            const selected = computed({
                get: () => _selected.value,
                set: (value: boolean) => {
                    _selected.value = value
                    emit('update:modelValue', value)
                }
            })
    
            onBeforeMount(() => {
                selected.value = props.defaultSelected
            })
    
            watch(() => props.modelValue, (value: boolean) => {
                selected.value = value
            })
    
            /**
             * @public
             */
            const handleClicked = () => {
                selected.value = !selected.value
            }
    
            return {
                selected,
                handleClicked
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
                        css['icon-button'],
                        css[this.appearance],
                        css['toggle-icon-button'],
                        this.selected && css.selected,
                        this.disabled && css.disabled,
                    ]}
                    data-component="togglable-icon-button"
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    type={this.type}
                    onClick={this.handleClicked}
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

export const TogglableIconButton = new TogglableIconButtonComponent().component
