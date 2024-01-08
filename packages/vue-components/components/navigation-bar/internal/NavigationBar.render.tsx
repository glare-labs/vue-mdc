import { type Ref, computed, defineComponent, provide, ref, watch } from 'vue'
import { emits, props, slots } from './NavigationBar.type'
import { NavigationBarStyles } from './NavigationBar.css'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Navigation-Bar': typeof renderNavigationBar,
    }
}

export interface NavigationBarProvider {
    activeIndex: Ref<number | null>
    setActiveIndex: (e: number) => void
}

/**
 * @alias Am-Navigation-Bar
 */
export const renderNavigationBar = defineComponent({
    name: 'AmNavigationBar',
    props,
    slots,
    emits,
    setup(props, { slots, emit }) {

        /**
         * [barRef] is a pointer of HTML root.
         * 
         * It will be inited in watch. In watch, we get root's children to 
         * [tabs] and then we set data-tab-id to each tab.
         */
        const barRef = ref<HTMLElement | null>(null)
        const tabs = ref<Element[]>([])
        const tabSize = computed(() => tabs.value.length)

        /**
         * Get children, set data-tab-id and set [activeIndex].
         */
        watch(barRef, () => {
            if (barRef.value === null) return
            tabs.value = [...barRef.value.children!].filter(e => e.getAttribute('data-is-tab'))
            if (tabs.value.length === 0) return
            tabs.value.forEach((e, i) => {
                e.setAttribute('data-tab-id', i.toString())
            })

            if (activeIndex.value === null && props.defaultActiveIndex !== null) {
                syncValueToActiveIndex(props.defaultActiveIndex)
            } else if (props.modelValue !== null) {
                syncValueToActiveIndex(props.modelValue)
            } else {
                syncValueToActiveIndex(0)
            }
        }, {
            immediate: true
        })

        /**
         * Current index of navigation bar.
         * 
         * @see range
         * 0 <= [activeIndex] < [tabs.value.length]
         * If there is no tab's child, [activeIndex] is null.
         */
        const activeIndex = ref<number | null>(null)
        const setActiveIndex = (index: number) => {
            if (index === activeIndex.value) return
            if (index >= tabs.value.length || index < 0) {
                throw new Error('NavigationBar\'s index is out of the bound.')
            }
            activeIndex.value = index
            emit('update:modelValue', activeIndex.value)
        }

        const syncValueToActiveIndex = (value: number | null) => {
            if (value === null) return
            setActiveIndex(value)
        }
        watch(() => props.modelValue, () => {
            syncValueToActiveIndex(props.modelValue)
        })

        const classes = computed(() => [
            NavigationBarStyles.container,
        ])

        provide<NavigationBarProvider, string>('navigation-bar-provider', {
            activeIndex: activeIndex,
            setActiveIndex: setActiveIndex,
        })

        return () => (
            <span ref={barRef} class={classes.value}>
                {
                    slots.default && slots.default({
                        activeIndex: activeIndex.value,
                        setActiveIndex: setActiveIndex,
                        tabSize: tabSize.value,
                    })
                }

            </span>
        )
    },
})
