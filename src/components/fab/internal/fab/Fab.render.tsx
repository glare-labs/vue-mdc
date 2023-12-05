import { defineComponent } from 'vue'
import { props, slots } from './Fab.type'
import { css } from 'aphrodite'
import { fabStyles } from './Fab.styles'
import { Elevation } from '@/components/elevation'

export const renderFab = defineComponent({
    name: 'MAMVFab',
    props,
    slots,
    computed: {
        classes() {
            return {
                root: css(
                    fabStyles.root,
                    fabStyles.containerShape,
                    fabStyles[this.variant],
                    this.lowered ? fabStyles.containerLowElevation : fabStyles.containerElevation,
                    fabStyles.containerColor,
                    fabStyles.containerSize,
                    fabStyles[this.size],
                    this.disabled && fabStyles.disabledRoot,
                ),
                iconRoot: css(
                    fabStyles.iconRoot,
                    fabStyles.iconSize,
                    fabStyles.iconColor,
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
                { this.$slots.default && this.$slots.default() }
            </div>
        )
    }
})