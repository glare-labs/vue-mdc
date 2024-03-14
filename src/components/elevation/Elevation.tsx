import { defineComponent, type PropType } from 'vue'
import css from './Elevation.module.css'

export type TElevationLevel = 0 | 1 | 2 | 3 | 4 | 5
export const enum EElevationLevel {
    Level0 = 0,
    Level1 = 1,
    Level2 = 2,
    Level3 = 3,
    Level4 = 4,
    Level5 = 5,
}

export const Elevation = defineComponent({
    name: 'GlareUi-Elevation',
    props: {
        level: {
            type: Number as PropType<TElevationLevel>,
            default: EElevationLevel.Level0,
            validator(value: number) {
                return value >= EElevationLevel.Level0 && value <= EElevationLevel.Level5
            },
        },
    },
    setup(props, _) {

        return () => (
            <span class={[css.surface, css[`level-${props.level}`]]}></span>
        )
    },
})
