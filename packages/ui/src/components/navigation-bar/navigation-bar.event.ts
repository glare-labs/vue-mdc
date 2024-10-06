export interface INavigationBarEventMap {
    'change': TNavigationBarChangeEvent
}

export type TNavigationBarChangeEvent = CustomEvent<TNavigationBarChangeEventDetail>
export type TNavigationBarChangeEventDetail = {
    activeIndex: number
    activeElement: HTMLElement
}
