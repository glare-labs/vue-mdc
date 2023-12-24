import { computed, defineComponent, provide, ref, Ref } from 'vue'
import { props, slots } from './NavigationDrawer.type'
import { css } from 'aphrodite/no-important'
import { sharedNavigationDrawerStyles } from './NavigationDrawer.styles'
import { Elevation, Ripple } from '@/lib'

export type NavigationDrawerProvider = {
    currentIndex: Ref<number>
    setCurrentIndex: (e: number) => void
    getTabIndex: () => number
}

export const renderNavigationDrawer = defineComponent({
    props,
    slots,
    setup(props, { slots }) {
        const isOpen = ref(props.defaultOpen)
        const setIsOpen = (e: boolean) => {
            isOpen.value = e
        }

        const currentIndex = ref(0)
        const setCurrentIndex = (e: number) => {
            currentIndex.value = e
        }
        let initTabIndex = 0
        const getTabIndex = () => initTabIndex++

        const classes = computed(() => ({
            root: css(
                sharedNavigationDrawerStyles.root,
            ),
            container: css(
                sharedNavigationDrawerStyles.container,
                props.model ? sharedNavigationDrawerStyles['container-model'] : sharedNavigationDrawerStyles['container-standard'],
                isOpen.value ? sharedNavigationDrawerStyles.containerOpen : sharedNavigationDrawerStyles.containerClose,
            )
        }))

        provide<NavigationDrawerProvider>('navigation-drawer-provider', {
            currentIndex: currentIndex,
            setCurrentIndex,
            getTabIndex,
        })

        return () => (
            <div
                role='dialog'
                class={classes.value.root}
            >
                {
                    props.model && isOpen.value && <div aria-hidden="true" onClick={() => setIsOpen(false)} class={css(sharedNavigationDrawerStyles['container-scrim'])}></div>
                }

                <ul
                    class={classes.value.container}
                >
                    {slots.default && slots.default()}
                </ul>

            </div>
        )
    },
    components: {
        Ripple,
    },
})
