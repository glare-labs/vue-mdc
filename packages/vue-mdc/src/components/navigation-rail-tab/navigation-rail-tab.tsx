import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { AttachableController, SAttachableController, type IAttachableControllerHost } from '../../internals/controller/attachable-controller'
import { isServer } from '../../utils/is-server'
import { FocusRing } from '../focus-ring'
import { Ripple } from '../ripple/ripple'
import { type INavigationRailTabEventMap, type TNavigationRailTabClickEventDetail } from './navigation-rail-tab-event'
import css from './styles/navigation-rail-tab.module.scss'

class NavigationRailTabComponent {
    private readonly name = `${componentNamePrefix}-navigation-rail-tab`

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

            const ripple = (this.$el as HTMLElement).querySelector('&>span>.ripple')! as IAttachableControllerHost;
            (ripple[SAttachableController] as AttachableController).attach(this.$el)
        },
        beforeUnmount() {
            (this.$el as HTMLElement).removeEventListener('click', this.handleTabClick)
        },
        methods: {
            handleTabClick(e: Event) {
                e.preventDefault()
                const tabClickEvent = new CustomEvent<TNavigationRailTabClickEventDetail>(
                    'tab-click',
                    {
                        bubbles: true,
                        composed: true,
                        detail: {
                            tab: this.$el as HTMLElement,
                            label: this.label
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

                    <FocusRing shapeInherit={false}></FocusRing>
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
