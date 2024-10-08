export interface INavigationRailEventMap {
    'change': TNavigationRailChangeEvent
}

export type TNavigationRailChangeEvent = CustomEvent<TNavigationRailChangeEventDetail>
export type TNavigationRailChangeEventDetail = {
    activeIndex: number
    activeElement: HTMLElement
}
