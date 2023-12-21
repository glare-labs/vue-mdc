import { Ref, computed, defineComponent, provide, ref, shallowRef } from 'vue'
import { props, slots } from './NavigationBar.type'
import { css } from 'aphrodite/no-important'
import { sharedNavigationBarStyles } from './NavigationBar.styles'

export interface NavigationBarProvider {
    activeIndex: Ref<number>
    setActiveIndex: (e: number) => void
    getTabId: () => number
}

export const renderNavigationBar = defineComponent({
    name: 'MAMVNavigationBar',
    props,
    slots,
    setup(props, { slots }) {
        const activeIndex = ref(props.defaultActiveIndex)
        const setActiveIndex = (index: number) => {
            activeIndex.value = index
            if (activeIndex.value < 0 || activeIndex.value >= initTabId.value.id) {
                activeIndex.value = 0
                console.warn('The navigation-bar\'s activeIndex had out of the bound, but we reset activeIndex to 0')
            }
        }

        const initTabId = shallowRef({
            id: 0,
        })
        const getTabId = () => initTabId.value.id++

        const classes = computed(() => css(
            sharedNavigationBarStyles.container,
        ))

        provide<NavigationBarProvider, string>('navigation-bar-provider', {
            activeIndex: activeIndex,
            setActiveIndex: setActiveIndex,
            getTabId: getTabId,
        })

        return () => (
            <span class={classes.value}>
                {
                    slots.default && slots.default({
                        activeIndex: activeIndex.value,
                        setActiveIndex: setActiveIndex,
                    })
                }

            </span>
        )
    },
})
