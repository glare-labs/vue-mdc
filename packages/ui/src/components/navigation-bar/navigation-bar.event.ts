export interface INavigationBarEventMap {
    'change': TNavigationBarChangeEvent
}

export type TNavigationBarChangeEvent = CustomEvent<TNavigationBarChangeEventDetail>
export type TNavigationBarChangeEventDetail = {
    indexBeforeUpdate: number
    indexAfterUpdate: number
}
