import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internal/component-name-prefix/component-name-prefix'
import { isServer } from '../../utils/is-server'
import { Ripple } from '../ripple/ripple'
import { type INavigationTabEventMap, type TNavigationTabClickEventDetail } from './navigation-tab-event'
import css from './styles/navigation-tab.module.scss'

class NavigationTabComponent {
    private readonly name = `${componentNamePrefix}-navigation-tab`

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
    private readonly emits: Array<keyof INavigationTabEventMap> = [
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
        },
        beforeUnmount() {
            (this.$el as HTMLElement).removeEventListener('click', this.handleTabClick)
        },
        methods: {
            handleTabClick(e: Event) {
                e.preventDefault()
                const tabClickEvent = new CustomEvent<TNavigationTabClickEventDetail>(
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
                    data-component="navigation-tab"
                    data-is-navigation-tab
                    class={[css['navigation-tab']]}
                    role='tab'
                >
                    <Ripple></Ripple>

                    <span aria-hidden="true" class={css["icon-content"]}>
                        <span class={css["active-indicator"]}></span>
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

export const NavigationTab = new NavigationTabComponent().component
