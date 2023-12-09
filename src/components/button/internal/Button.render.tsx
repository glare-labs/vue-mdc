import { defineComponent } from 'vue'
import { emits, props, slots } from './Button.type'
import { sharedButtonStyles } from './Button.styles'
import { css } from 'aphrodite/no-important'
import { Elevation } from '@/components/elevation'
import { Ripple } from '@/components/ripple'

export const renderButton = defineComponent({
    name: 'MAMVButton',
    props,
    slots,
    emits,
    computed: {
        classes() {
            return css(
                sharedButtonStyles.root,
                sharedButtonStyles[this.shape],
                sharedButtonStyles[this.size],
                sharedButtonStyles[this.appearance],
                this.$slots.icon !== undefined ? sharedButtonStyles.paddingWithIcon : sharedButtonStyles.padding,
                this.iconOnly && sharedButtonStyles['icon-only'],
                this.disabled && sharedButtonStyles.disabled,
            )

        },
    },
    methods: {
        mousedownEvent(e: Event) {
            if(this.disabled) return 
            this.$emit('mousedown', e)
        },
        mouseenterEvent(e: Event) {
            if(this.disabled) return 
            this.$emit('mouseenter', e)
        },
        mouseleaveEvent(e: Event) {
            if(this.disabled) return 
            this.$emit('mouseleave', e)
        },
        mousemoveEvent(e: Event) {
            if(this.disabled) return 
            this.$emit('mousemove', e)
        },
        mouseoutEvent(e: Event) {
            if(this.disabled) return 
            this.$emit('mouseout', e)
        },
        mouseoverEvent(e: Event) {
            if(this.disabled) return 
            this.$emit('mouseover', e)
        },
        mouseupEvent(e: Event) {
            if(this.disabled) return 
            this.$emit('mouseup', e)
        },
        clickEvent(e: Event) {
            if(this.disabled) return 
            if(this.type === 'reset') {
                this.resetEvent()
            } else if(this.type === 'submit') {
                this.submitEvent()
            } else {
                this.buttonEvent(e)
            }
        },
        auxclickEvent(e: Event) {
            if(this.disabled) return 
            this.$emit('auxclick', e)
        },
        dblclickEvent(e: Event) {
            if(this.disabled) return 
            this.$emit('dblclick', e)
        },
        submitEvent() {
            if(this.form === undefined) return
            const formRoot = document.querySelector(this.form) as HTMLFormElement
            formRoot.submit()
        },
        resetEvent() {
            if(this.form === undefined) return
            const formRoot = document.querySelector(this.form) as HTMLFormElement
            formRoot.reset()
        },
        buttonEvent(e: Event) {
            this.$emit('click', e)
        },
        aria() {
            const target = this.$el as HTMLElement
            if (this.disabled) {
                target.setAttribute('disabled', 'true')
                target.setAttribute('aria-disabled', 'true')
            } else {
                target.removeAttribute('disabled')
                target.removeAttribute('aria-disabled')
            }
        },
    },
    render() {
        return (
            <span
                role='button'
                onMousedown={this.mousedownEvent}
                onMouseenter={this.mouseenterEvent}
                onMouseleave={this.mouseleaveEvent}
                onMousemove={this.mousemoveEvent}
                onMouseout={this.mouseoutEvent}
                onMouseover={this.mouseoverEvent}
                onMouseup={this.mouseupEvent}
                onClick={this.clickEvent}
                onAuxclick={this.auxclickEvent}
                onDblclick={this.mousedownEvent}
                class={this.classes}
            >
                <Elevation></Elevation>
                <Ripple disabled={this.disabled}></Ripple>
                { (this.iconPosition === 'left' && this.$slots.icon) && this.$slots.icon() }
                { !this.iconOnly && this.$slots.default && this.$slots.default() }
                { (this.iconPosition === 'right' && this.$slots.icon) && this.$slots.icon() }
            </span>
        )
    },
    disabled: {
        handler() {
            this.aria()
        }
    },
    mounted() {
        this.aria()
    },
    components: {
        Elevation,
        Ripple
    }
})
