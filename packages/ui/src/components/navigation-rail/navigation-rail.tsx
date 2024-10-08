import { defineComponent, type PropType, type SlotsType } from 'vue'
import { NavigableController } from '../../internal/controller/navigable-controller'
import { isServer } from '../../utils/is-server'
import type { TNavigationRailTabClickEvent, TNavigationRailTabClickEventDetail } from '../navigation-rail-tab'
import { ENavigationRailPosition, type TNavigationRailPosition } from './navigation-rail-position'
import type { INavigationRailEventMap, TNavigationRailChangeEventDetail } from './navigation-rail.event'
import css from './styles/navigation-rail.module.scss'

class NavigationRailComponent {
    private name = 'GlareUi-NavigationRail'
    private props = {
        defaultActiveIndex: {
            type: Number,
            default: 0,
        },
        position: {
            type: String as PropType<TNavigationRailPosition>,
            default: ENavigationRailPosition.Center,
        },
    }
    private emits: Array<keyof INavigationRailEventMap> = [
        'change'
    ]
    private slots = {} as SlotsType<{
        default?: void
    }>

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        emits: this.emits,
        mounted() {
            if (isServer()) {
                return
            }
            this.navigableController = new NavigableController(this.$el)
            this.navigableController.host.addEventListener('tab-click', this.handleTabClick)
        },
        beforeUnmount() {
            this.navigableController?.host.removeEventListener('tab-click', this.handleTabClick)
        },
        data: () => ({
            navigableController: null as null | NavigableController,
        }),
        methods: {
            handleTabClick(e: Event) {
                e.preventDefault()
                e.stopPropagation()
                if (this.navigableController === null) {
                    return
                }
                const eventTab = (e as TNavigationRailTabClickEvent).detail.tab
                const changeEvent = new CustomEvent<TNavigationRailChangeEventDetail>('change', {
                    cancelable: true,
                    bubbles: true,
                    composed: true,
                    detail: {
                        indexAfterUpdate: this.navigableController.getNavigationTabs().findIndex(tab => tab === eventTab),
                        indexBeforeUpdate: this.navigableController.activeIndex,
                    }
                })
                const preventChange = !this.navigableController.host.dispatchEvent(changeEvent)
                if (preventChange) {
                    return
                }
                this.navigableController.activeIndex = this.navigableController.getNavigationTabs().findIndex(tab => tab === (e as CustomEvent<TNavigationRailTabClickEventDetail>).detail.tab)
            }
        },
        render() {
            return (
                <div data-component="navigation-rail" class={[css['navigation-rail'], css[this.position]]}>
                    <span class={css.tabs}>
                        {this.$slots.default && this.$slots.default()}
                    </span>
                    <span aria-hidden="true" class={css.background}></span>
                </div>
            )
        }
    })
}

export const NavigationRail = new NavigationRailComponent().component
