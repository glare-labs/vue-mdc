export interface INavigationTabEventMap {
    'tab-click': TNavigationTabClickEvent
}

export type TNavigationTabClickEvent = CustomEvent<TNavigationTabClickEventDetail>
export type TNavigationTabClickEventDetail = {
    tab: HTMLElement
    label: string
}
