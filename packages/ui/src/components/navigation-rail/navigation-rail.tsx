import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internal/component-name-prefix/component-name-prefix'
import { NavigableController, type INavigableElementEventMap, type TNavigableElementChangeEventDetail } from '../../internal/controller/navigable-controller'
import { isServer } from '../../utils/is-server'
import type { TNavigationRailTabClickEvent, TNavigationRailTabClickEventDetail } from '../navigation-rail-tab'
import { ENavigationRailPosition, type TNavigationRailPosition } from './navigation-rail-position'
import css from './styles/navigation-rail.module.scss'

class NavigationRailComponent {
    private readonly name = `${componentNamePrefix}-navigation-rail`

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
    private emits: Array<keyof INavigableElementEventMap> = [
        'change'
    ]
    private slots = {} as SlotsType<{
        default?: void
        start?: void
        end?: void
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
            this.navigableController.activeIndex = this.defaultActiveIndex
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
                const changeEvent = new CustomEvent<TNavigableElementChangeEventDetail>('change', {
                    cancelable: true,
                    bubbles: true,
                    composed: true,
                    detail: {
                        indexAfterUpdate: this.navigableController.getNavigationTabs().findIndex(tab => tab === eventTab),
                        indexBeforeUpdate: this.navigableController.activeIndex,
                        label: (e as TNavigationRailTabClickEvent).detail.label
                    }
                })
                this.$emit('change', changeEvent)
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
                    <span class={css['start-wrapper']}>
                        {this.$slots.start && this.$slots.start()}
                    </span>
                    <span class={css['tabs-wrapper']}>
                        {this.$slots.default && this.$slots.default()}
                    </span>
                    <span class={css['end-wrapper']}>
                        {this.$slots.end && this.$slots.end()}
                    </span>

                    <span aria-hidden="true" class={css.background}></span>
                </div>
            )
        }
    })
}

export const NavigationRail = new NavigationRailComponent().component
