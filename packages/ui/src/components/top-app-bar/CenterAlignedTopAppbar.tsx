import { PropType, SlotsType, defineComponent } from 'vue'
import css from './CenterAlignedTopAppbar.module.css'
import { Elevation } from '../elevation/Elevation'

const props = {

    /**
     * CenterAlignedTopAppbar组件显示的标题
     * 
     * @default 'Untitled'
     */
    title: {
        type: String as PropType<string>,
        default: 'Untitled'
    },

    /**
     * 强制启用sticky样式, 启用后此组件将粘滞在[top: 0]的位置
     * @example
     * ```html
     * <div class="max-h-screen min-h-screen overflow-auto" @scroll="topAppbarScrolledEvent">
     *   <CenterAlignedTopAppbar title="Title" forcedSticky></CenterAlignedTopAppbar>
     * </div>
     * ```
     */
    forcedSticky: {
        type: Boolean as PropType<boolean>,
        default: false
    },

    /**
     * 强制启用on-scroll样式, 通常情况下on-scroll样式在页面或盒子进度条滚动后出现
     * @example
     * ```html
     * <div class="max-h-screen min-h-screen overflow-auto" @scroll="topAppbarScrolledEvent">
     *   <CenterAlignedTopAppbar title="Title" forcedOnScroll></CenterAlignedTopAppbar>
     * </div>
     * ```
     */
    forcedOnScroll: {
        type: Boolean as PropType<boolean>,
        default: false
    }
}
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
            <div data-is-top-app-bar="true" data-is-forced-sticky={this.forcedSticky} data-is-forced-on-scroll={this.forcedOnScroll} class={[css.container, this.forcedSticky && css.sticky, this.forcedOnScroll && css['on-scroll']]}>
                {renderLeadingIcon}
                {renderTitle}
                {renderTrailingIcon}
                <Elevation></Elevation>
            </div>
        )
    }
})
