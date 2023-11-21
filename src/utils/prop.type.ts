import { PropType } from 'vue'

/**
 * Use for defineProps<>()
 */
export type VueProp<T> = {
    default: T
    type: PropType<T>
    require?: boolean
}
