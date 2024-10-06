import { isServer } from '../../utils/is-server'

export class NavigationBarTreeWalker {
    private treewalk: null | TreeWalker

    constructor(root: Element) {
        this.treewalk = isServer() ? null : document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT)
    }

    public get actionButtonElements() {
        if (this.treewalk === null) {
            return []
        }
        const buttons: Array<HTMLElement> = []
        while (this.treewalk?.nextNode()) {
            if ((this.treewalk.currentNode as HTMLElement).attributes.getNamedItem('data-is-navigation-tab')) {
                buttons.push(this.treewalk.currentNode as HTMLElement)
            }
        }
        this.treewalk.currentNode = this.treewalk.root
        return buttons
    }
}
