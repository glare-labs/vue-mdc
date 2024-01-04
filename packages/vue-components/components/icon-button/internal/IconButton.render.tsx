import { defineComponent } from 'vue'
import { props, slots } from './IconButton.type'
import { IconButtonStyle } from './IconButton.css'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Icon-Button': typeof renderIconButton,
    }
}

/**
 * @alias Am-Icon-Button
 */
export const renderIconButton = defineComponent({
    name: 'AmIconButton',
    props,
    slots,
    data: () => ({
        selected: false,
    }),
    computed: {
        classes() {
            return [
                IconButtonStyle.surface,
                IconButtonStyle.appearance[this.appearance],
                IconButtonStyle.shape[this.shape],
                this.toggle ? this.selected ? IconButtonStyle.toggle['toggle-selected'] : IconButtonStyle.toggle['toggle-unselect'] : IconButtonStyle.toggle['no-toggle'],
                this.disabled && IconButtonStyle.disabled,
            ]
        },
    },
    render() {
        return (
            <button
                role='button'
                disabled={this.disabled}
                aria-disabled={this.disabled}
                class={this.classes}
                onClick={this.updateToggleState}
            >
                <am-ripple disabled={this.disabled}></am-ripple>
                {
                    this.$slots.default && this.$slots.default({
                        selected: this.selected
                    })
                }

            </button>
        )
    },
    methods: {
        setSelected(e: boolean) {
            if (this.disabled || !this.toggle) return
            this.selected = e
        },
        updateToggleState() {
            this.setSelected(!this.selected)
        }
    },
    created() {
        this.selected = this.defaultSelected
    },
})
