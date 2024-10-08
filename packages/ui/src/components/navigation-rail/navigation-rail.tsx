import { defineComponent, type PropType, type SlotsType } from 'vue'
import { isServer } from '../../utils/is-server'
import type { TNavigationBarChangeEventDetail } from '../navigation-bar'
import { type TNavigationRailTabClickEventDetail } from '../navigation-rail-tab/index'
import { ENavigationRailPosition, type TNavigationRailPosition } from './navigation-rail-position'
import { NavigationRailTreeWalker } from './navigation-rail-tree-walker'
import type { INavigationRailEventMap } from './navigation-rail.event'
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

            this.treewalker = new NavigationRailTreeWalker((this.$el as HTMLElement))
            if (this.getTabElements().length !== 0) {
                this.setActiveIndex(this.defaultActiveIndex)
            }
            (this.$el as HTMLElement).addEventListener('tab-click', this.handleTabClick)
        },

        beforeUnmount() {
            (this.$el as HTMLElement).removeEventListener('tab-click', this.handleTabClick)
        },
        data: () => ({
            activeIndex: -1,
            activeElement: null as HTMLElement | null,
            treewalker: null as null | NavigationRailTreeWalker,
        }),
        methods: {
            getTabElements() {
                return this.treewalker?.actionButtonElements ?? []
            },
            handleTabClick(e: Event) {
                this.setActiveIndex(this.getTabElements().indexOf((e as CustomEvent<TNavigationRailTabClickEventDetail>).detail.tab))
            },
            setActiveIndex(index: number) {
                if (this.activeIndex === index) {
                    return
                }
                if (index < 0 || index >= this.getTabElements().length) {
                    return
                }

                const changeEvent = new CustomEvent<TNavigationBarChangeEventDetail>('change', {
                    detail: {
                        activeElement: this.getTabElements()[index],
                        activeIndex: index,
                    },
                    cancelable: true,
                })
                this.$emit('change', changeEvent)
                const preventChange = !this.$el.dispatchEvent(changeEvent)
                if (preventChange) {
                    return
                }

                if (this.activeIndex !== -1) {
                    this.getTabElements()[this.activeIndex].removeAttribute('active')
                }
                this.activeIndex = index
                this.getTabElements()[index].setAttribute('active', 'true')
            },
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
