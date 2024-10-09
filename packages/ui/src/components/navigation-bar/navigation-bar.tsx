import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internal/component-name-prefix/component-name-prefix'
import { NavigableController, type INavigableElementEventMap, type TNavigableElementChangeEventDetail } from '../../internal/controller/navigable-controller'
import { isServer } from '../../utils/is-server'
import { Elevation } from '../elevation'
import type { TNavigationRailTabClickEventDetail } from '../navigation-rail-tab'
import type { TNavigationTabClickEvent } from '../navigation-tab'
import css from './styles/navigation-bar.module.scss'

class NavigationBarComponent {
    private readonly name = `${componentNamePrefix}-navigation-bar`

    private readonly props = {
        defaultActiveIndex: {
            type: Number as PropType<number>,
            default: 0,
        },
        rippleUnbounded: {
            type: Boolean as PropType<boolean>,
            default: false,
        }
    }
    private readonly slots = {} as SlotsType<{
        default: void
    }>
    private readonly emits: Array<keyof INavigableElementEventMap> = [
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
                const eventTab = (e as TNavigationTabClickEvent).detail.tab
                const changeEvent = new CustomEvent<TNavigableElementChangeEventDetail>('change', {
                    cancelable: true,
                    bubbles: true,
                    composed: true,
                    detail: {
                        indexAfterUpdate: this.navigableController.getNavigationTabs().findIndex(tab => tab === eventTab),
                        indexBeforeUpdate: this.navigableController.activeIndex,
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
                <div
                    data-component="navigation-bar"
                    class={[css['navigation-bar'], this.rippleUnbounded && css['ripple-unbounded']]}
                >
                    {this.$slots.default && this.$slots.default()}

                    <Elevation></Elevation>
                </div>
            )
        }
    })
}

export const NavigationBar = new NavigationBarComponent().component
