import { computed, defineComponent, inject, ref } from 'vue'
import { props, slots } from './NavigationTab.type'
import { NavigationTabStyles } from './NavigationTab.css'
import type { NavigationBarProvider } from '../../navigation-bar/internal/NavigationBar.render'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Navigation-Tab': typeof renderNavigationTab,
    }
}

/**
 * @alias Am-Navigation-Tab
 */
export const renderNavigationTab = defineComponent({
    name: 'AmNavigationTab',
    props,
    slots,
    setup(props, { slots }) {
        const context = inject<NavigationBarProvider>('navigation-bar-provider')!

        const tabRef = ref<HTMLElement | null>(null)
        const tabId = computed(() => {
            const id = tabRef.value?.getAttribute('data-tab-id')
            if (id !== null || id !== undefined) {
                return parseInt(id!)
            }
            return null
        })

        const classes = computed(() => ({
            container: [
                NavigationTabStyles.container,
                NavigationTabStyles.stateLayer,
                NavigationTabStyles.icon,
                NavigationTabStyles.label,
                props.disabled && NavigationTabStyles.disabled,
            ],
            indicator: [
                NavigationTabStyles.indicator,
                (!props.disabled && context.activeIndex.value === tabId.value) && NavigationTabStyles.activeIndicator,
            ],
        }))

        return () => (
            <button
                ref={tabRef}
                class={classes.value.container}
                aria-disabled={props.disabled}
                disabled={props.disabled}
                data-is-tab
                onClick={() => context.setActiveIndex(tabId.value!)}
            >
                <span class={classes.value.indicator}>
                    {slots.default && slots.default()}
                </span>
                {!props.iconOnly && props.label}
            </button>
        )
    },
})
