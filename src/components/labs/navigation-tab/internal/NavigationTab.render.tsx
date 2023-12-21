import { computed, defineComponent, inject, ref } from 'vue'
import { props, slots } from './NavigationTab.type'
import { css } from 'aphrodite/no-important'
import { sharedNavigationTabStyles } from './NavigationTab.styles'
import { NavigationBarProvider } from '@/components/labs/navigation-bar/internal/NavigationBar.render'

export const renderNavigationTab = defineComponent({
    name: 'MAMVNavigationTab',
    props,
    slots,
    setup(props, { slots }) {
        const context = inject<NavigationBarProvider>(
            'navigation-bar-provider',
            /**
             * If a developer makes a mistake about provider, the code throws an error to browser.
             */
            {
                activeIndex: ref(0),
                getTabId: () => {
                    throw new Error('Not found context from \'navigation-bar-provider\'')
                },
                setActiveIndex() {
                    throw new Error('Not found context from \'navigation-bar-provider\'')
                },
            }
        )

        const tabId = context.getTabId()

        const classes = computed(() => ({
            container: css(
                sharedNavigationTabStyles.container,
                sharedNavigationTabStyles.stateLayer,
                sharedNavigationTabStyles.icon,
                sharedNavigationTabStyles.label,
                props.disabled && sharedNavigationTabStyles.disabled,
            ),
            activeIndicator: css(
                sharedNavigationTabStyles.indicator,
                sharedNavigationTabStyles.activeIndicator,
            ),
            indicator: css(
                sharedNavigationTabStyles.indicator
            ),
        }))



        return () => (
            <button
                class={classes.value.container}
                onClick={() => context.setActiveIndex(tabId)}
                aria-disabled={props.disabled}
                disabled={props.disabled}
            >
                <span class={!props.disabled && context.activeIndex.value === tabId ? classes.value.activeIndicator : classes.value.indicator}>
                    {slots.default && slots.default()}
                </span>
                {!props.iconOnly && props.label}
                {tabId}
            </button>
        )
    },
})