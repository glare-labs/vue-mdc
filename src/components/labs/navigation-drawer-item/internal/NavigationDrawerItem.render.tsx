import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import { props, slots } from './NavigationDrawerItem.type'
import { css } from 'aphrodite/no-important'
import { sharedNavigationDrawerItemStyles } from './NavigationDrawerItem.styles'
import { Ripple } from '../../../../lib'
import { NavigationDrawerProvider } from '../../../../components/labs/navigation-drawer/internal/NavigationDrawer.render'

export const renderNavigationDrawerItem = defineComponent({
    props,
    slots,
    // ../../../..ts-ignore
    setup(props, { slots }) {

        const classes = computed(() => ({
            activeIndicator: css(
                sharedNavigationDrawerItemStyles.label,
                sharedNavigationDrawerItemStyles.icon,
                sharedNavigationDrawerItemStyles.indicator,
                sharedNavigationDrawerItemStyles.activeIndicator,
            ),
            inactiveIndicator: css(
                sharedNavigationDrawerItemStyles.label,
                sharedNavigationDrawerItemStyles.icon,
                sharedNavigationDrawerItemStyles.indicator,
            ),
            headline: css(
                sharedNavigationDrawerItemStyles.headline,
            ),
        }))

        const provider = inject<NavigationDrawerProvider>('navigation-drawer-provider')!

        const index = ref(0)
        onMounted(() => {
            index.value = provider.getTabIndex()
        })

        return () => (
            <div>
                <p class={classes.value.headline}>
                    {slots.label && slots.label()}
                </p>
                <div
                    class={index.value === provider?.currentIndex.value ? classes.value.activeIndicator : classes.value.inactiveIndicator}
                    onClick={() => provider?.setCurrentIndex(index.value)}
                >
                    <Ripple></Ripple>
                    {slots.icon && slots.icon()}
                    {slots.default && slots.default()}
                </div>
            </div>
        )
    },
    components: {
        Ripple,
    },
})
