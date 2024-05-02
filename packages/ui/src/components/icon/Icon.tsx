import { defineComponent, type PropType, type SlotsType } from 'vue'
import css from './Icon.module.css'

export type TIconSize = 'small' | 'medium' | 'large'
export type TIconVariant = 'outlined' | 'rounded' | 'sharp'

export const enum EIconSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}
export const enum EIconVariant {
    Outlined = 'outlined',
    Rounded = 'rounded',
    Sharp = 'sharp',
}

const props = {
    /**
     * 图标大小
     * 
     * + size
     *   - small
     *   - medium
     *   - large
     * 
     * 可以导入枚举对象EIconSize来传入大小
     * ```html
     * <Icon :size="EIconSize.Large">send</Icon>
     * <Icon :size="EIconSize.Medium">send</Icon>
     * <Icon :size="EIconSize.Small">send</Icon>
     * ```
     * 
     * @default small
     */
    size: {
        type: String as PropType<TIconSize>,
        default: EIconSize.Medium,
    },

    /**
     * 图标变体
     * 
     * _此选项仅在项目安装了依赖项`material-symbols`时有效_
     * 
     * + variant
     *   - sharp
     *   - rounded
     *   - outlined
     * 
     * sharp更锐利, rounded更平滑, outlined较为一般化
     * 
     * 可以导入枚举对象EIconSize来传入大小
     * ```html
     * <Icon :variant="EIconVariant.Sharp">send</Icon>
     * ```
     * 
     * @default rounded
     */
    variant: {
        type: String as PropType<TIconVariant>,
        default: EIconVariant.Rounded,
    },
}
const slots = {} as SlotsType<{
    default?: void
}>

export const Icon = defineComponent({
    name: 'GlareUi-Icon',
    props,
    slots,
    render() {
        return (
            <span class={[css.icon, css[this.size], css[this.variant]]}>
                {this.$slots.default && this.$slots.default()}
            </span>

        )
    }
})
