import { defineComponent, type PropType, type SlotsType } from 'vue'
import { isServer } from '../../utils/is-server'
import { generateUuid } from '../../utils/uuid'
import { Ripple } from '../ripple/ripple'
import css from './styles/radio.module.scss'

class RadioComponent {
    private readonly name = 'GlareUi-Radio'
    private readonly props = {
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        defaultChecked: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        modelValue: {
            type: Boolean as PropType<boolean>,
            default: null,
        },
    }
    private readonly slots = {} as SlotsType<{}>
    private readonly emits = [
        'update:modelValue',
        'change'
    ]

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        emits: this.emits,
        created() {
            if (this.modelValue === null) {
                this.checked = this.defaultChecked
                this.$emit('update:modelValue', this.defaultChecked)

            } else {
                this.checked = this.modelValue
            }
        },
        mounted() {
            if (isServer()) {
                return
            }
            (this.$el as Element).addEventListener('click', this.handleClick)

            const maskElement = (this.$el as Element).querySelector('&>svg>.mask')
            const needMaskElement = (this.$el as Element).querySelector('&>svg>.need-mask')
            if (this.maskId === null) {
                this.maskId = generateUuid()
            }
            maskElement?.setAttribute('id', this.maskId)
            needMaskElement?.setAttribute('mask', `url(#${this.maskId})`)
        },
        beforeUpdate() {
            if (this.modelValue !== null) {
                this.setChecked(this.modelValue)
            }
        },
        beforeUnmount() {
            (this.$el as Element).removeEventListener('click', this.handleClick)
        },
        data: () => ({
            checked: false,
            /**
             * Unique id for mask.
             */
            maskId: null as string | null
        }),
        methods: {
            setChecked(checked: boolean) {
                const changeEvent = new Event('change', { cancelable: true })
                this.$emit('change', changeEvent)
                const preventChange = !dispatchEvent(changeEvent)
                if (preventChange) {
                    return
                }
                if (this.checked === checked) {
                    return
                }
                this.checked = checked
                this.$emit('update:modelValue', checked)
            },
            handleClick() {
                if (this.disabled) {
                    return
                }
                this.setChecked(!this.checked)
            },
        },

        render() {
            return (
                <div
                    data-component="radio"
                    role="radio"
                    class={[css.radio, this.checked && css.checked, this.disabled && css.disabled]}
                >
                    <Ripple></Ripple>

                    <svg
                        aria-hidden="true"
                        class={css.icon}
                        viewBox="0 0 20 20"
                    >
                        <mask class="mask">
                            <rect
                                width="100%"
                                height="100%"
                                fill="white"
                            />
                            <circle
                                cx="10"
                                cy="10"
                                r="8"
                                fill="black"
                            />
                        </mask>
                        <circle
                            class={["need-mask", css.outer, css.circle]}
                            cx="10"
                            cy="10"
                            r="10"
                        />
                        <circle
                            class={[css.inner, css.circle]}
                            cx="10"
                            cy="10"
                            r="5"
                        />
                    </svg>

                    <input
                        type="radio"
                        class={css.input}
                        tabindex="-1"
                        checked={this.checked}
                        disabled={this.disabled}
                    />
                </div>
            )
        },
    })

}

export const Radio = new RadioComponent().component
