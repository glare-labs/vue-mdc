import { defineComponent } from 'vue'
import css from './Checkbox.module.css'
import { Ripple } from '../ripple/Ripple'

export const Checkbox = defineComponent({
    name: 'GlareUi-Checkbox',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        defaultSelected: {
            type: Boolean,
            default: null,
        },
        modelValue: {
            type: Boolean,
            default: null,
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    watch: {
        modelValue(val: boolean) {
            this.checked = val
        },
        checked(val: boolean) {
            console.log('u')

            this.$emit('update:modelValue', val)
        }
    },
    data(vm) {
        return ({
            prevChecked: false,
            prevDisabled: false,
            prevIndeterminate: false,
            checked: vm.defaultSelected ?? vm.modelValue ?? false,
            indeterminate: vm.indeterminate,
        })
    },
    created() {
        if (this.defaultSelected !== null) this.$emit('update:modelValue', this.defaultSelected)
        if (this.defaultSelected !== null && this.modelValue !== null) console.warn('When defaultSelected and v-model are provided at the same time, the value of v-model will be replaced by defaultSelected.')

    },
    computed: {
        containerClasse() {
            const prevNone = !this.prevChecked && !this.prevIndeterminate
            const prevChecked = this.prevChecked && !this.prevIndeterminate
            const prevIndeterminate = this.prevIndeterminate
            const isChecked = this.checked && !this.indeterminate
            const isIndeterminate = this.indeterminate

            return ([
                this.disabled && css['disabled'],
                isChecked || isIndeterminate && css.selected,
                !isChecked && css.isIndeterminate && css.unselected,
                isChecked && css.checked,
                isIndeterminate && css.indeterminate,
                prevNone && css['prev-unselected'],
                prevChecked && css['prev-checked'],
                prevIndeterminate && css['prev-indeterminate'],
                this.prevDisabled && css['prev-disabled'],
            ])
        },
    },
    methods: {
        handleInput(e: Event) {
            const target = e.target as HTMLInputElement
            this.checked = target.checked
            this.indeterminate = target.indeterminate
        },
    },
    render() {
        return (
            <div class={[css.checkbox, ...this.containerClasse]}>
                <Ripple></Ripple>

                <div class={css.outline}></div>
                <div class={css.background}></div>

                <input
                    class={[css.input]}
                    type="checkbox"
                    checked={this.checked}
                    aria-checked={this.checked}
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    onInput={this.handleInput}
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
