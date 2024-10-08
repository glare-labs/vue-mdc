export interface INavigationRailTabEventMap {
    'tab-click': TNavigationRailTabClickEvent
}

export type TNavigationRailTabClickEvent = CustomEvent<TNavigationRailTabClickEventDetail>
export type TNavigationRailTabClickEventDetail = {
    tab: HTMLElement
}
