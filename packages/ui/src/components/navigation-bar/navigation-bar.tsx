import { defineComponent, type PropType, type SlotsType } from 'vue'
import { isServer } from '../../utils/is-server'
import { type TNavigationTabClickEventDetail } from '../navigation-tab/navigation-tab-event'
import { NavigationBarTreeWalker } from './navigation-bar-tree-walker'
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

            this.treewalker = new NavigationBarTreeWalker((this.$el as HTMLElement))
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
            treewalker: null as null | NavigationBarTreeWalker,
        }),
        methods: {
            getTabElements() {
                return this.treewalker?.actionButtonElements ?? []
            },
            handleTabClick(e: Event) {
                this.setActiveIndex(this.getTabElements().indexOf((e as CustomEvent<TNavigationTabClickEventDetail>).detail.tab))
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
