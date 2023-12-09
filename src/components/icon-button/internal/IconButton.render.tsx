import { defineComponent } from 'vue'
import { emits, props, slots } from './IconButton.type'
import { css } from 'aphrodite/no-important'
import { sharedIconButtonStyles } from './IconButton.styles'
import { Ripple } from '@/components/ripple'

export const renderIconButton = defineComponent({
    name: 'MAMVIconButton',
    props,
    slots,
    emits,
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
            <span
                role='button'
                class={this.classes}
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
            >
                <Ripple disabled={this.disabled}></Ripple>
                {
                    this.$slots.default && this.$slots.default()
                }
                
            </span>
        )
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
            }
            this.buttonEvent(e)
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
            this.setSelected(e, !this.selected)
        },
        setSelected(e: Event, data: boolean) {
            this.selected = data
            this.$emit('select', e, data)
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
    watch: {
        disabled: {
            handler() {
                this.aria()
            }
        },
    },
    created() {
        this.selected = this.defaultSelected
    },
    mounted() {
        this.aria()
    },
    components: {
        Ripple,
    }
})