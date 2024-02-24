import type { ComputedRef } from 'vue'

export type TNavigationBarPositions = 'left' | 'center' | 'right'

export interface INavigationBar {

    /**
     * @default null
     */
    defaultActiveIndex: number

    /**
     * @default null
     */
    modelValue: number

    /**
     * @default 'center'
     */
    position: TNavigationBarPositions
}

export const navigationBarProvider = Symbol()
export interface INavigationBarProvider {
    currentIndex: ComputedRef<number>
    setCurrentIndex: (index: number) => void
}
