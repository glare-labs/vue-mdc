import type { ComputedRef } from 'vue'


export interface INavigationBar {

    /**
     * @default null
     */
    defaultActiveIndex?: number

    /**
     * @default null
     */
    modelValue?: number

}

export const navigationBarProvider = Symbol()
export interface INavigationBarProvider {
    currentIndex: ComputedRef<number>
    setCurrentIndex: (index: number) => void
}
