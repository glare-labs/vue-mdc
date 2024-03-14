import { defineComponent, type PropType, type SlotsType } from 'vue'
import css from './IconButton.module.css'
import { Ripple } from '../ripple/Ripple'

export type TIconButtonAppearance = 'filled' | 'outlined' | 'filled-tonal' | 'standard'
export type TIconButtonType = 'button' | 'submit' | 'reset'

export enum EIconButtonAppearance {
    Filled = 'filled',
    Outlined = 'outlined',
    FilledTonal = 'filled-tonal',
    Standard = 'standard',
}
export enum EIconButtonType {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}

export const IconButton = defineComponent({
    name: 'GlareUi-IconButton',
    props: {
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
        toggle: {
            type: Boolean,
            default: false,
        },
        defaultSelected: {
            type: Boolean,
            default: null,
        },
        modelValue: {
            type: Boolean,
            default({ defaultSelected }: { defaultSelected: boolean | null }) {
                return defaultSelected ?? false
            },
        },
    },
    emits: ['update:modelValue', 'change'],
    methods: {
        handleClick(e: MouseEvent) {
            if (this.disabled) return
            this.$emit('update:modelValue', !this.modelValue)
            this.$emit('change', this.modelValue)
        },
    },
    slots: {} as SlotsType<{
        default: void
    }>,
    created() {
        if (this.defaultSelected !== null) this.$emit('update:modelValue', this.defaultSelected)
        if (this.defaultSelected !== null && this.modelValue !== null) console.warn('When defaultSelected and v-model are provided at the same time, the value of v-model will be replaced by defaultSelected.')
    },
    render() {
        return (
            <button
                class={[
                    css.surface,
                    css[this.appearance],
                    (this.toggle && this.modelValue) ? css.selected : css.unselected, this.toggle && css.toggle,
                    this.disabled && css.disabled
                ]}
                onClick={this.handleClick}
                disabled={this.disabled}
                type={this.type}
            >
                <Ripple></Ripple>

                <div class={css.touch}></div>
                <div class={css.background}></div>
                <div class={css.outline}></div>

                {this.$slots.default && this.$slots.default()}
            </button>
        )
    }
})
