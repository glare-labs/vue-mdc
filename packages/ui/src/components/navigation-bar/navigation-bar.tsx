import { defineComponent, type PropType, type SlotsType } from 'vue'
import { NavigableController } from '../../internal/controller/navigable-controller'
import { isServer } from '../../utils/is-server'
import type { TNavigationRailTabClickEventDetail } from '../navigation-rail-tab'
import type { TNavigationTabClickEvent } from '../navigation-tab'
import type { INavigationBarEventMap, TNavigationBarChangeEventDetail } from './navigation-bar.event'
import css from './styles/navigation-bar.module.scss'

export type TNavigationBarPosition = 'left' | 'center' | 'right'

export const enum ENavigationBarPosition {
    Left = 'left',
    Center = 'center',
    Right = 'right',
}

class NavigationBarComponent {
    private readonly name = `GlareUi-NavigationBar`
    private readonly props = {
        defaultActiveIndex: {
            type: Number,
            default: 0,
        },
        position: {
            type: String as PropType<TNavigationBarPosition>,
            default: ENavigationBarPosition.Center,
        },
    }
    private readonly slots = {} as SlotsType<{
        default: void
    }>
    private readonly emits: Array<keyof INavigationBarEventMap> = [
        'change'
    ]

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
                const eventTab = (e as TNavigationTabClickEvent).detail.tab
                const changeEvent = new CustomEvent<TNavigationBarChangeEventDetail>('change', {
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
                <div
                    data-component="navigation-bar"
                    class={[css['navigation-bar']]}
                >
                    {this.$slots.default && this.$slots.default()}
                </div>
            )
        }
    })
}

export const NavigationBar = new NavigationBarComponent().component
