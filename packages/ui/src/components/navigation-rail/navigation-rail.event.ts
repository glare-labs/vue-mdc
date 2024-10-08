export interface INavigationRailEventMap {
    'change': TNavigationRailChangeEvent
}

export type TNavigationRailChangeEvent = CustomEvent<TNavigationRailChangeEventDetail>
export type TNavigationRailChangeEventDetail = {
    indexBeforeUpdate: number
    indexAfterUpdate: number
}
