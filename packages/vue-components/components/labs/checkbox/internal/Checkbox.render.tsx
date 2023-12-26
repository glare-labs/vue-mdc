import { defineComponent } from 'vue'
import { props } from './Checkbox.type'
import { css } from 'aphrodite/no-important'
import { sharedCheckboxStyles } from './Checkbox.styles'
import { Ripple } from '../../../../components/ripple/index'

export const renderCheckbox = defineComponent({
    name: 'MAMVChecbox',
    props,
    computed: {
        classes() {
            return css(
                sharedCheckboxStyles.root,
                this.checked ? sharedCheckboxStyles.selected : sharedCheckboxStyles.unselect,
                sharedCheckboxStyles[this.size],
                sharedCheckboxStyles[this.shape],
                this.disabled && sharedCheckboxStyles.disabled,
            )
        },
    },
    render() {
        return (
            <input
                type='checkbox'
                class={this.classes}
                onClick={this.clickEvent}
                aria-label={this.ariaLabel}
                aria-aria-labelledby={this.ariaLabelledby}
                aria-disabled={this.disabled}
            >
                <Ripple disabled={this.disabled}></Ripple>
            </input>
        )
    },
    data: () => ({
        checked: false,
    }),
    created() {
        this.checked = this.defaultChecked
    },
    methods: {
        clickEvent() {
            if (this.disabled) return
            this.setChecked(!this.checked)
        },
        setChecked(e: boolean) {
            this.checked = e
        },
    },
    components: {
        Ripple,
    },
    inheritAttrs: true,
})
