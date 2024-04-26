import { SlotsType, computed, defineComponent, inject } from 'vue'
import { Ripple } from '../ripple/Ripple'
import { INavigationBarProvider, SNavigationBarProvider } from '../navigation-bar/NavigationBar'
import css from './Navigation.module.css'

export const NavigationTab = defineComponent({
    inject: {
        bar: {
            from: SNavigationBarProvider
        }
    },
    setup(props, ctx) {
        const injection = inject<INavigationBarProvider>(SNavigationBarProvider)

        return {
            injection
        }
    },
    slots: {} as SlotsType<{
        default: void,
        icon: void
    }>,
    render() {
        return (
            <div
                data-is-tab
                class={[css.surface]}
            >
                <span class={[css.indicator]}>
                    {
                        this.$slots.icon ? this.$slots.icon() :
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" />
                            </svg>

                    }
                </span>

                <span class={[css.label]}>
                    {
                        this.$slots.default && this.$slots.default()
                    }
                </span>

                <Ripple></Ripple>

                <div data-touch-target class={css['touch-target']}></div>
            </div >)
    }
})
