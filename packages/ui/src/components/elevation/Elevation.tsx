import { defineComponent, type PropType } from 'vue'
import css from './Elevation.module.css'
import { EElevationLevel, TElevationLevel } from './ElevationLevel'

class ElevationComponent {
    private static readonly name = 'GlareUi-Elevation'
    private static readonly props = {
        /**
         * 阴影级数, 取值在0到5之间, 包括0和5
         * 
         * 请确保**父元素的position为relative**, 并且父元素必须拥有大小
         * 
         * + level
         *   - 0
         *   - 1
         *   - 2
         *   - 3
         *   - 4
         *   - 5
         * 
         * 可以导入枚举对象EElevationLevel来传入大小
         * ```html
         * <div class="relative w-[32px] h-[32px]">
         *   <Glare.Elevation :level="EElevationLevel.Level3"></Glare.Elevation>
         * </div>
         * ```
         * 
         * @default 0
         */
        level: {
            type: Number as PropType<TElevationLevel>,
            default: EElevationLevel.Level0,
            validator(value: number) {
                return value >= EElevationLevel.Level0 && value <= EElevationLevel.Level5
            },
        },
    }

    public static readonly component = defineComponent({
        name: this.name,
        props: this.props,
        render() {
            return (
                <span class={[css.elevation, css[`level-${this.level}`]]}></span>
            )
        },
    })
}

export const Elevation = ElevationComponent.component
