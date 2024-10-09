import { isServer } from '../../utils/is-server'

export interface INavigableElementEventMap {
    'change': CustomEvent<TNavigableElementChangeEventDetail>
}
export type TNavigableElementChangeEventDetail = {
    indexBeforeUpdate: number
    indexAfterUpdate: number
}

export const SNavigableControllerHost = Symbol('navigableController')

export interface INavigableControllerHost extends HTMLElement {
    [SNavigableControllerHost]?: INavigableController
}
export interface INavigableController {
    getNavigationTabs: () => Array<HTMLElement>
}

export class NavigableController implements INavigableController {

    private treewalker = null as null | TreeWalker

    private _activeIndex = -1
    public get activeIndex() {
        return this._activeIndex
    }
    public set activeIndex(value: number) {
        if (this._activeIndex === value) {
            return
        }
        if (value >= this.tabsCount() || value < 0) {
            console.warn(`Navigation active-index(value: ${value}) is out of bounds.`)
            return
        }
        this._activeIndex = value
        this.setCurrentTabByActiveIndex(this.getNavigationTabs(), value)
    }

    public get host() {
        return this._host
    }

    constructor(
        private _host: INavigableControllerHost,
    ) {
        if (isServer()) {
            return
        }
        this.treewalker = document.createTreeWalker(_host, NodeFilter.SHOW_ELEMENT)
        _host[SNavigableControllerHost] = this

        if (this.getNavigationTabs().length !== 0) {
            this.activeIndex = 0
        }
    }

    public getNavigationTabs(): Array<HTMLElement> {
        if (this.treewalker === null) {
            return []
        }
        const tabs = [] as Array<HTMLElement>
        while (this.treewalker.nextNode()) {
            if ((this.treewalker.currentNode as HTMLElement).attributes.getNamedItem('data-is-navigation-tab')) {
                tabs.push(this.treewalker.currentNode as HTMLElement)
            }
        }
        this.treewalker.currentNode = this.treewalker.root
        return tabs
    }
    public tabsCount() {
        return this.getNavigationTabs().length
    }

    private setCurrentTabByActiveIndex(tabs: Array<HTMLElement>, activeIndex: number) {
        if (activeIndex >= tabs.length) {
            return
        }
        tabs.forEach(tab => tab.removeAttribute('active'))
        tabs[activeIndex].setAttribute('active', 'true')
    }

}
