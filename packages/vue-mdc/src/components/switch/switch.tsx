import { type PropType, type SlotsType, defineComponent } from 'vue'
import { dispatchActivationClick, isActivationClick, redispatchEvent } from '../../internals'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { generateUuid } from '../../utils'
import { isServer } from '../../utils/is-server'
import { FocusRing } from '../focus-ring'
import { Ripple } from '../ripple/ripple'
import css from './styles/switch.module.scss'

const SwitchOnIcon = () => (
    <div class={[css.icon, css['icon--on']]}>
        <svg viewBox="0 0 24 24">
            <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
    </div>
)

const SwitchOffIcon = () => (
    <div class={[css.icon, css['icon--off']]}>
        <svg viewBox="0 0 24 24">
            <path
                d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"
            />
        </svg>
    </div>
)



export const Switch = defineComponent({
    name: `${componentNamePrefix}-switch`,
    slots: {} as SlotsType<{
        'on-icon': void,
        'off-icon': void,
    }>,
    emits: [
        'update:modelValue',
        'change'
    ],
    props: {
        disabled: {
            type: Boolean as PropType<boolean>,
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
        withIcon: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        withIconSelectedOnly: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        value: {
            type: String as PropType<string>,
            default: 'on',
        },
    },
    data: () => ({
        _selected: false,
    }),
    computed: {
        selected: {
            get() {
                return this._selected
            },
            set(value: boolean) {
                if (this.modelValue !== null && this.modelValue !== value) {
                    this.$emit('update:modelValue', value)
                }

                this._selected = value

                if (value) {
                    this.getRootElement()?.setAttribute('selected', `true`)
                } else {
                    this.getRootElement()?.removeAttribute('selected')
                }
            },
        }
    },
    created() {
        if (this.modelValue === null) {
            this.selected = this.defaultSelected
        } else {
            this.selected = this.modelValue
        }
    },
    mounted() {
        if (isServer()) {
            return
        }

        this.getRootElement()?.addEventListener('click', this.handleClick)

        const innerId = `switch-${generateUuid()}`
        this.getInputElement()?.setAttribute('id', innerId)
        this.getFocusRingElement()?.setAttribute('for', innerId)
        this.getRippleElement()?.setAttribute('for', innerId)

        this.$watch('disabled', (value) => {
            if (value) {
                this.getRootElement()?.setAttribute('disabled', `true`)
                this.getInputElement()?.setAttribute('disabled', `true`)
            } else {
                this.getRootElement()?.removeAttribute('disabled')
                this.getInputElement()?.removeAttribute('disabled')
            }
        })

        this.$watch('modelValue', (value) => {
            this.selected = value
        })
    },
    beforeUnmount() {
        this.getRootElement()?.removeEventListener('click', this.handleClick)
    },
    methods: {
        getRootElement(): HTMLElement | null {
            return this.$el as HTMLElement | null
        },
        getFocusRingElement(): HTMLElement | null {
            return (this.$el as HTMLElement).querySelector('[data-component="focus-ring"]')
        },
        getRippleElement(): HTMLElement | null {
            return (this.$el as HTMLElement).querySelector('[data-component="ripple"]')
        },
        getInputElement(): HTMLInputElement | null {
            return (this.$el as HTMLElement).querySelector(`input.need-inner-id`)
        },
        handleClick(event: MouseEvent) {
            if (!isActivationClick(event) || !this.getInputElement()) {
                return
            }

            this.getRootElement()?.focus()
            if (this.getInputElement()) {
                dispatchActivationClick(this.getInputElement()!)
            }
        },
        handleKeydown() {
            // TODO
        },
        handleInput(event: Event) {
            const target = event.target as HTMLInputElement
            this.selected = target.checked
        },
        handleChange(event: Event) {
            redispatchEvent(this.getRootElement()!, event)
        }
    },
    render() {
        const renderIcon = (
            <span class={[css.handle, (this.withIconSelectedOnly || this.withIcon) && css['with-icon']]}>
                {
                    (this.withIconSelectedOnly || this.withIcon) &&
                    <div class={css.icons}>
                        {
                            this.selected && (this.$slots['on-icon'] ? this.$slots['on-icon']() : <SwitchOnIcon></SwitchOnIcon>)
                        }
                        {
                            !this.withIconSelectedOnly && !this.selected && (this.$slots['off-icon'] ? this.$slots['off-icon']() : <SwitchOffIcon></SwitchOffIcon>)
                        }
                    </div>
                }
            </span>)

        return (
            <div
                class={[css.switch, this.disabled && css.disabled, this.selected ? css.selected : css.unselected]}
                role="switch"
                aria-disabled={this.disabled}
                data-component="switch"
            >
                <FocusRing shapeInherit={false}></FocusRing>

                <input
                    type="checkbox"
                    role="switch"
                    checked={this.selected}
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    class={"need-inner-id"}
                    onInput={this.handleInput}
                    onChange={this.handleChange}
                />

                <span aria-hidden="true" class={css.background}></span >
                <span aria-hidden="true" class={css.outline}></span >

                <span class={css.track} aria-hidden="true">
                    <span class={css['handle-container']}>
                        <Ripple></Ripple>
                        {renderIcon}
                    </span>
                </span>
            </div>
        )
    },
})
