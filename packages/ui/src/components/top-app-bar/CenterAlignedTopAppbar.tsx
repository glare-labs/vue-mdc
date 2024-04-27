import { PropType, SlotsType, computed, defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'
import css from './CenterAlignedTopAppbar.module.css'
import { Elevation } from '../elevation/Elevation'
import { nextTick } from 'process'

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
     * CenterAlignedTopAppbar组件监听的目标元素, 目标元素可以是CSS选择器字符串, 也可以是'window'或'document'字符串
     * @example
     * ```html
     * <CenterAlignedTopAppbar title="Title" container="window" sticky></CenterAlignedTopAppbar>
     * <CenterAlignedTopAppbar title="Title" container="document"></CenterAlignedTopAppbar>
     * <CenterAlignedTopAppbar title="Title" container="#app"></CenterAlignedTopAppbar>
     * ```
     * 
     * 当被监听的对象的scrollTop属性值大于64时, 激活此组件的sticky效果. 通常情况下, 建议您设置sticky属性值为true
     * 
     * @default 'window'
     */
    container: {
        type: String as PropType<string | 'window' | 'document'>,
        default: 'window'
    },

    /**
     * CenterAlignedTopAppbar组件是否激活sticky状态
     * 
     * 当sticky设置为true时, 此组件会附着在页面的top为0px的位置
     * 
     * @default false
     */
    sticky: {
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
        const targetElement = computed<Element | null | Document | (Window & typeof globalThis)>(() => {
            if (typeof window === 'undefined' || typeof document === 'undefined') {
                return document.querySelector(props.container)
            }
            if (props.container === 'window') {
                return window
            } else if (props.container === 'document') {
                return document
            }
            return document.querySelector(props.container)
        })

        const isScrolled = ref(false)
        const updateIsScrolled = (target: (EventTarget | HTMLElement | Document | Window | null)) => {
            if (target === null) return
            /**
             * + types
             *   - target.scrollTop: target is an HTMLElement
             *   - target.scrollingElement.scrollTop: target may be document or window object
             * 
             */
            // @ts-ignore
            const top = target.scrollTop ?? target.scrollingElement.scrollTop

            /**
             * the height of the TopAppbar is 64px
             */
            if (top > 64) {
                isScrolled.value = true
            } else {
                isScrolled.value = false
            }
        }


        const handleScrolled = (e: Event) => {
            updateIsScrolled(e.target)
        }
        const attach = () => {
            targetElement.value?.addEventListener('scroll', handleScrolled)
        }
        const detach = () => {
            targetElement.value?.removeEventListener('scroll', handleScrolled)
        }

        onMounted(() => {
            attach()
        })
        onBeforeUpdate(() => {
            detach()
        })
        onUpdated(() => {
            attach()
        })
        onBeforeUnmount(() => {
            detach()
        })

        return {
            isScrolled
        }
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

        const containerStyles = [css.container, this.isScrolled && css['on-scroll'], this.sticky && css.sticky]

        return (
            <div class={containerStyles}>
                {renderLeadingIcon}
                {renderTitle}
                {renderTrailingIcon}
                <Elevation></Elevation>
            </div>
        )
    }
})
