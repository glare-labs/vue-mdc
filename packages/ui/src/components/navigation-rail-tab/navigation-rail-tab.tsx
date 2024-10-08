import { defineComponent, type PropType, type SlotsType } from 'vue'
import { AttachableController, SAttachableController, type AttachableControllerHost } from '../../utils/attachable-controller'
import { isServer } from '../../utils/is-server'
import { Ripple } from '../ripple/ripple'
import { type INavigationRailTabEventMap, type TNavigationRailTabClickEventDetail } from './navigation-rail-tab-event'
import css from './styles/navigation-rail-tab.module.scss'

class NavigationRailTabComponent {
    private readonly name = `GlareUi-NavigationRailTab`
    private readonly props = {
        label: {
            type: String as PropType<string>,
            default: 'Unnamed Tab'
        }
    }
    private readonly slots = {} as SlotsType<{
        default: void
        'active-icon': void
        'inactive-icon': void
    }>
    private readonly emits: Array<keyof INavigationRailTabEventMap> = [
        'tab-click'
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
            (this.$el as HTMLElement).addEventListener('click', this.handleTabClick)

            const ripple = (this.$el as HTMLElement).querySelector('&>span>.ripple')! as AttachableControllerHost;
            (ripple[SAttachableController] as AttachableController).attach(this.$el)
        },
        beforeUnmount() {
            (this.$el as HTMLElement).removeEventListener('click', this.handleTabClick)
        },
        methods: {
            handleTabClick() {
                const tabClickEvent = new CustomEvent<TNavigationRailTabClickEventDetail>(
                    'tab-click',
                    {
                        bubbles: true,
                        composed: true,
                        detail: {
                            tab: this.$el as HTMLElement
                        }
                    }
                )
                this.$el.dispatchEvent(tabClickEvent)
                this.$emit('tab-click', tabClickEvent)
            }
        },
        render() {
            return (
                <button
                    data-component="navigation-rail-tab"
                    data-is-navigation-tab
                    class={[css['navigation-rail-tab']]}
                    role='tab'
                >

                    <span aria-hidden="true" class={[css["icon-content"]]}>
                        <Ripple class="ripple"></Ripple>
                        <span class={css["active-indicator"]}>
                        </span>
                        <span class={css["icon"]}>
                            {this.$slots['inactive-icon'] ? this.$slots['inactive-icon']() : this.$slots.default && this.$slots.default()}
                        </span>
                        <span class={[css["icon"], css["icon--active"]]}>
                            {this.$slots['active-icon'] ? this.$slots['active-icon']() : this.$slots.default && this.$slots.default()}
                        </span>
                        {/* ${this.renderBadge()} */}
                    </span>

                    {(typeof this.label.length !== 'undefined' || this.label !== null) && (
                        <span class={css['label']}>
                            {this.label}
                        </span>
                    )}

                </button>)
        }
    })

}

export const NavigationRailTab = new NavigationRailTabComponent().component
