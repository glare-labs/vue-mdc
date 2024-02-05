import type { PropType } from 'vue'

export type ElevationLevelType = 0 | 1 | 2 | 3 | 4 | 5

export const props = {

    /**
     * @default 0
     */
    level: {
        default: 0,
        type: Number as PropType<ElevationLevelType>
    }
}
