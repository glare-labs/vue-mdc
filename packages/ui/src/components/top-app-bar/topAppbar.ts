import { PropType } from 'vue'

export const propsShared = {

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
