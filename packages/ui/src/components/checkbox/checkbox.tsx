import { defineComponent } from 'vue'
import { isServer } from '../../utils/is-server'
import { Ripple } from '../ripple/ripple'
import css from './styles/checkbox.module.scss'

class CheckboxComponent {
    private readonly name = `GlareUi-Checkbox`
    private readonly props = {
        disabled: {
            type: Boolean,
            default: false,
        },
        defaultChecked: {
            type: Boolean,
            default: null,
        },
        modelValue: {
            type: Boolean,
            default: null,
        },
        indeterminate: {
            type: Boolean,
            default: null,
        },
    }
    private readonly emits = [
        'update:modelValue',
        'change'
    ]

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        emits: this.emits,
        data: (props) => ({
            prevChecked: false,
            prevDisabled: false,
            prevIndeterminate: false,
            checked: props.defaultChecked || props.modelValue || false,
            interIndeterminate: props.indeterminate || false,
        }),
        created() {
            if (this.defaultChecked !== null) {
                this.$emit('update:modelValue', this.defaultChecked)
            }
        },
        mounted() {
            if(isServer()) {
                return
            }
            ((this.$el as Element).querySelector('&>.input-target') as HTMLInputElement).addEventListener('change', this.handleChange)
        },
        beforeUpdate() {
            this.prevChecked = this.checked
            this.prevDisabled = this.disabled
            this.prevIndeterminate = this.interIndeterminate

            if(this.modelValue !== null) {
                this.setChecked(this.modelValue)
            }
        },
        beforeUnmount() {
            ((this.$el as Element).querySelector('&>.input-target') as HTMLInputElement).removeEventListener('change', this.handleChange)
        },
        methods: {
            handleChange(e: Event) {
                const target = e.target as HTMLInputElement
                this.setChecked(target.checked)
                this.interIndeterminate = target.indeterminate
            },
            setChecked(value: boolean) {
                const changeEvent = new Event('change', { bubbles: true, cancelable: true})
                this.$emit('change', changeEvent)
                const preventChange = !dispatchEvent(changeEvent)
                if(preventChange) {
                    return
                }
                if(this.checked === value) {
                    return
                }
                this.checked = value
                this.$emit('update:modelValue', value)
            }
        },
        render() {
            const prevNone = !this.prevChecked && !this.prevIndeterminate
            const prevChecked = this.prevChecked && !this.prevIndeterminate
            const prevIndeterminate = this.prevIndeterminate
            const isChecked = this.checked && !this.interIndeterminate
            const isIndeterminate = this.interIndeterminate

            const classes = ([
                this.disabled && css.disabled,
                (isChecked || isIndeterminate) && css.selected,
                (!isChecked && !css.isIndeterminate) && css.unselected,
                isChecked && css.checked,
                isIndeterminate && css.indeterminate,
                prevNone && css['prev-unselected'],
                prevChecked && css['prev-checked'],
                prevIndeterminate && css['prev-indeterminate'],
                this.prevDisabled && css['prev-disabled'],
            ])
            return (
                <div data-component="checkbox" class={[css.checkbox, ...classes]}>
                    <Ripple></Ripple>

                    <div aria-hidden="true" class={css.outline}></div>
                    <div aria-hidden="true" class={css.background}></div>

                    <input
                        class="input-target"
                        type="checkbox"
                        checked={this.checked}
                        aria-checked={this.checked}
                        disabled={this.disabled}
                        aria-disabled={this.disabled}
                    />

                    <svg
                        class={css.icon}
                        viewBox="0 0 18 18"
                        aria-hidden="true"
                    >
                        <rect class={[css.mark, css.short]}></rect>
                        <rect class={[css.mark, css.long]}></rect>
                    </svg>
                </div>
            )
        }
    })
}

export const Checkbox = new CheckboxComponent().component
