import { SlotsType, defineComponent } from 'vue'
import { Elevation } from '../elevation/Elevation'
import { propsShared } from './TopAppbar'
import css from './CenterAlignedTopAppbar.module.css'
import cssShared from './topAppbar.module.css'

const props = propsShared
const slots = {} as SlotsType<{
    /**
     * 位于TopAppbar左侧的图标按钮
     * 
     * **不应该设置多个图标**
     */
    leadingIcon?: void

    /**
     * 位于TopAppbar左侧的图标按钮
     * 
     * **不应该设置多个图标**
     */
    trailingIcon?: void
}>
const emits = {

}

export const CenterAlignedTopAppbar = defineComponent({
    name: 'GlareUi-CenterAlignedTopAppbar',
    props,
    slots,
    emits,
    setup(props, ctx) {
    },
    render() {
        const renderLeadingIcon = (
            <span class={css['leading-icon']}>
                {this.$slots.leadingIcon && this.$slots.leadingIcon()}
            </span>
        )
        const renderTrailingIcon = (
            <span class={css['trailing-icon']}>
                {this.$slots.trailingIcon && this.$slots.trailingIcon()}
            </span>
        )
        const renderTitle = (
            <span class={css.headline}>
                {this.title}
            </span>
        )

        return (
            <div
                data-is-top-app-bar="true"
                data-is-forced-sticky={this.forcedSticky}
                data-is-forced-on-scroll={this.forcedOnScroll}
                class={[css.container, cssShared.base, this.forcedSticky && cssShared.sticky, this.forcedOnScroll && cssShared['on-scroll']]}
            >
                {renderLeadingIcon}
                {renderTitle}
                {renderTrailingIcon}
                <Elevation></Elevation>
            </div>
        )
    }
})
