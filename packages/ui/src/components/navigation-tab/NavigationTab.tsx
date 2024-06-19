import { type PropType, type SlotsType, defineComponent, inject } from 'vue'
import { Ripple } from '../ripple/Ripple'
import { type INavigationBarProvider, SNavigationBarProvider } from '../navigation-bar/NavigationBar'
import css from './styles/navigation-tab.module.scss'

class NavigationTabComponent {
    private name = `GlareUi-NavigationTab`
    private props = {
        label: {
            type: String as PropType<string>,
            default: 'Unnamed Tab'
        }
    }
    private slots = {} as SlotsType<{
        default: void
        'active-icon': void
        'inactive-icon': void
    }>
    private inject = {
        bar: {
            from: SNavigationBarProvider
        }
    }

    public component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        inject: this.inject,
        setup(props, ctx) {
            const injection = inject<INavigationBarProvider>(SNavigationBarProvider)
    
            return {
                injection
            }
        },
        render() {
            return (
                <button
                    data-component="navigation-tab"
                    data-is-tab
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
