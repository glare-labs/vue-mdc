import { defineComponent } from 'vue'
import { props, slots } from './FabExtended.type'
import { css } from 'aphrodite/no-important'
import { fabStyles } from './FabExtended.styles'
import { Elevation } from '@/components/elevation'

export const renderFabExtended = defineComponent({
    name: 'MAMVFabExtended',
    props,
    slots,
    computed: {
        classes() {
            return {
                root: css(
                    fabStyles.root,
                    fabStyles[this.variant],
                    fabStyles.containerLabel,
                    fabStyles.containerIcon,
                    this.lowered ? fabStyles.containerElevationLow : fabStyles.containerElevation,
                    this.disabled && fabStyles.disabledRoot,
                ),
            }
        }
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
        buttonEvent(e: Event) {
            this.$emit('click', e)
        },
    },
    render() {
        return (
            <div
                class={this.classes.root}
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
            >
                <Elevation></Elevation>
                {
                    this.iconPosition === 'left' && this.$slots.icon && this.$slots.icon()
                }
                { this.$slots.default && this.$slots.default() }
                {
                    this.iconPosition === 'right' && this.$slots.icon && this.$slots.icon()
                }
            </div>
        )
    }
})