import { type SlotsType, defineComponent } from 'vue'
import css from './Switch.module.css'
import { Ripple } from '../ripple/Ripple'

export const Switch = defineComponent({
    name: 'GlareUi-Switch',
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
        showSelectedIcon: {
            type: Boolean,
            default: false,
        },
        withIcon: {
            type: Boolean,
            default: false,
        },
        withIconSelectedOnly: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    slots: {} as SlotsType<{
        'on-icon': void,
        'off-icon': void,
    }>,
    data(vm) {
        return ({
            selected: vm.defaultSelected
        })
    },
    watch: {
        selected(val) {
            this.$emit('update:modelValue', val)
        },
        modelValue(val) {
            this.selected = val
        },
    },
    methods: {
        setSelected(selected: boolean) {
            if (this.disabled) return
            this.selected = selected
        },
        selectedHandle() {
            this.setSelected(!this.selected)
        }
    },
    created() {
        if (this.defaultSelected !== null) this.$emit('update:modelValue', this.defaultSelected)
        if (this.defaultSelected !== null && this.modelValue !== null) console.warn('When defaultSelected and v-model are provided at the same time, the value of v-model will be replaced by defaultSelected.')
    },
    render() {
        return (
            <span
                class={[css.surface, this.disabled && css.disabled, this.selected ? css.selected : css.unselected]}
                onClick={this.selectedHandle}
                role="switch"
                data-am-switch
            >
                <input
                    class={css.input}
                    type="checkbox"
                    role="switch"
                    checked={this.selected}
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                />

                <span class={css.background}></span >
                <span class={css.outline}></span >

                <span class={css['handle-container']}>
                    <Ripple></Ripple>

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
                    </span>
                </span>
            </span >
        )
    },
})

function SwitchOnIcon() {
    return (
        <div class={[css.icon, css['icon--on']]}>
            <svg viewBox="0 0 24 24">
                <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
            </svg>
        </div>
    )
}

function SwitchOffIcon() {
    return (
        <div class={[css.icon, css['icon--off']]}>
            <svg viewBox="0 0 24 24">
                <path
                    d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"
                />
            </svg>
        </div>
    )
}
