import { defineComponent } from 'vue'
import { emits, props, slots } from './Button.type'
import { buttonStyles } from './Button.styles'
import { css } from 'aphrodite'
import { Elevation } from '@/components/elevation'

export const renderButton = defineComponent({
    name: 'MAMVButton',
    props,
    slots,
    emits,
    computed: {
        classes() {
            return {
                root: css(
                    buttonStyles.root,
                    !this.disabled && buttonStyles[this.appearance],
                    buttonStyles[this.variant],
                    buttonStyles[this.shape],
                    buttonStyles[this.size],
                    buttonStyles[`${this.size}WithIcon`],
                    this.iconOnly && buttonStyles[`${this.size}IconOnly`],
                    this.disabled && buttonStyles.disabledRoot,
                    !this.disabled ? this.appearance === 'elevated' ? buttonStyles.activeElevationForever : (['filled', 'filled-tonal'].includes(this.appearance) && buttonStyles.activeElevationOnHover) : buttonStyles.activeElevationNever,
                    
                ),
                icon: css(
                    buttonStyles.iconRoot,
                    buttonStyles[`${this.size}Icon`],
                    !this.iconOnly && buttonStyles[this.iconPosition],
                )
            }
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
                class={this.classes.root}
                {
                    ...{
                        on: {
                            'click': () => {

                            }
                        }
                    }
                }
                style="user-select: none"
            >
                <Elevation></Elevation>
                {
                    this.iconPosition === 'left' && this.$slots.icon && <span class={this.classes.icon}>{ this.$slots.icon() }</span>
                }
                { !this.iconOnly && this.$slots.default && this.$slots.default() }
                {
                    this.iconPosition === 'right' && this.$slots.icon && <span class={this.classes.icon}>{ this.$slots.icon() }</span>
                }
            </span>
        )
    },
    mounted() {
        const target = this.$el as HTMLElement
        if (this.disabled) {
            target.setAttribute('disabled', 'true')
            target.setAttribute('aria-disabled', 'true')
        }
    },
    components: {
        Elevation
    }
})
