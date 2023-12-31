import { defineComponent } from 'vue'
import { props, slots } from './IconButton.type'
import { css } from 'aphrodite/no-important'
import { sharedIconButtonStyles } from './IconButton.styles'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Icon-Button': typeof renderIconButton,
    }
}

export const renderIconButton = defineComponent({
    name: 'AmIconButton',
    props,
    slots,
    data: () => ({
        selected: false,
    }),
    computed: {
        classes() {
            return css(
                sharedIconButtonStyles.root,
                sharedIconButtonStyles[this.size],
                sharedIconButtonStyles[this.appearance],
                sharedIconButtonStyles[this.shape],
                this.toggle ? this.selected ? sharedIconButtonStyles['toggle-selected'] : sharedIconButtonStyles['toggle-unselect'] : sharedIconButtonStyles['no-toggle'],
                this.disabled && sharedIconButtonStyles.disabled,
            )
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
