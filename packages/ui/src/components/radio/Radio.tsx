import { generateUuid } from '../../utils/uuid'
import { defineComponent } from 'vue'
import { Ripple } from '../ripple/Ripple'
import css from './styles/radio.module.scss'

export const Radio = defineComponent({
    name: 'GlareUi-Radio',
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
    },
    emits: ['update:modelValue'],
    data(vm) {
        return ({
            selected: vm.defaultSelected,
            /**
             * Unique id for mask.
             */
            maskId: generateUuid()
        })
    },
    watch: {
        modelValue(val) {
            this.selected = val
        },
        selected(val) {
            this.$emit('update:modelValue', val)
        }
    },
    methods: {
        setChecked(e: boolean) {
            this.selected = e
        },
        clickHandle() {
            if (this.disabled) return
            this.setChecked(!this.selected)
        },
    },
    created() {
        if (this.defaultSelected !== null) this.$emit('update:modelValue', this.defaultSelected)
        if (this.defaultSelected !== null && this.modelValue !== null) console.warn('When defaultSelected and v-model are provided at the same time, the value of v-model will be replaced by defaultSelected.')
    },
    render() {
        return (
            <div
                data-component="radio"
                role="radio"
                class={[css.radio, this.selected && css.checked, this.disabled && css.disabled]}
                onClick={this.clickHandle}
            >
                <Ripple></Ripple>

                <svg
                    aria-hidden="true"
                    class={css.icon}
                    viewBox="0 0 20 20"
                >
                    <mask id={this.maskId}>
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
                        class={[css.outer, css.circle]}
                        cx="10"
                        cy="10"
                        r="10"
                        mask={`url(#${this.maskId})`}
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
                    checked={this.selected}
                    disabled={this.disabled}
                />
            </div>
        )
    },
})
