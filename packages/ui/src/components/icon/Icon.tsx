import { defineComponent, type PropType, type SlotsType } from 'vue'
import css from './styles/icon.module.scss'
import { EIconVariant, type TIconVariant } from './IconVariant'

class IconComponent {
    private name = `GlareUi-Icon`
    private props = { 
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
    private slots = {} as SlotsType<{
        default?: void
    }>

    
    public comonent = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        render() {
            return (
                <span data-component="icon" class={[css.icon, css[this.variant]]}>
                    {this.$slots.default && this.$slots.default()}
                </span>
    
            )
        }
    })
    
}

export const Icon = new IconComponent().comonent
