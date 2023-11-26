import { defineComponent } from 'vue'
import { data, props, slots } from './IconButton.type'
import { css } from 'aphrodite'
import { iconButtonStyles } from './IconButton.styles'

export const renderIconButton = defineComponent({
    name: 'MAMVIconButton',
    props,
    slots,
    data,
    computed: {
        classes() {
            return {
                root: css(
                    iconButtonStyles.root,
                    iconButtonStyles[this.size],
                    iconButtonStyles[this.variant],
                    !this.disabled && iconButtonStyles.untoggle,
                    this.variant !== 'surface' && this.toggle && this.isSelected && iconButtonStyles.toggle,
                    this.disabled && iconButtonStyles.disabledRoot,
                ),
                icon: css(
                    iconButtonStyles.iconRoot,
                    iconButtonStyles[`${this.size}Icon`],
                )
            }
        },
    },
    render() {
        return (
            <div class={this.classes.root} onClick={this.clickEvent}>
                
                {
                    this.$slots.default && <span aria-hidden="true" class={this.classes.icon}>{ this.$slots.default() }</span>
                }
                
            </div>
        )
    },
    methods: {
        setIsSelected(e: boolean) {
            this.isSelected = e
        },
        clickEvent() {
            if(this.disabled) return 
            this.setIsSelected(!this.isSelected)
        }
    },
    created() {
        if(this.variant === 'surface' && this.toggle) {
            console.warn('Can not set the property \'toggle\' in a surface properted icon-button.')
        }
        if(this.toggle && this.selected) {
            console.warn('Please set \'toggle\' in the icon-button if you want it is selected.')
        }
    },
    beforeMount() {
        this.isSelected = this.selected
    },
    mounted() {
        /**
         * aria
         */
        const target = this.$el as HTMLElement
        if (this.disabled) {
            target.setAttribute('disabled', 'true')
            target.setAttribute('aria-disabled', 'true')
        }

    },
    
})