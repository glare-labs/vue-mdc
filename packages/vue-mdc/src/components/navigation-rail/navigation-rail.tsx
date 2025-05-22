/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { defineComponent, onMounted, ref, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { useNavigable, type INavigableHost, type INavigationItem } from '../../internals/controller/use-navigable'
import { renderNavigationDestination } from '../../internals/navigation/render-navigation-destination'
import { isServer } from '../../utils'
import { NavigationRailTab } from '../navigation-rail-tab'
import css from './styles/navigation-rail.module.scss'

export type TNavigationRailPosition = 'top' | 'center' | 'bottom'
export enum ENavigationRailPosition {
    Left = 'top',
    Center = 'center',
    Right = 'bottom',
}

export const NavigationRail = defineComponent({
    name: `${componentNamePrefix}-navigation-rail`,
    slots: {} as SlotsType<{
        default?: void
        start?: void
        end?: void
    }>,
    emits: [
        'change'
    ],
    props: {
        defaultActiveOrder: {
            type: Number as PropType<number>,
            default: -2,
        },
        position: {
            type: String as PropType<TNavigationRailPosition>,
            default: ENavigationRailPosition.Center,
        },
        tabs: {
            type: Array as PropType<Array<INavigationItem>>,
            default: [],
        },
        hideInactiveLabel: {
            type: Boolean as PropType<boolean>,
            default: false,
        }
    },
    setup(props, { slots, emit }) {
        const root = ref<INavigableHost | null>(null)
        const tabContainer = ref<HTMLElement | null>(null)

        const _position = ref(props.position)

        const handleChange = (e: Event) => {
            emit('change', e)
        }

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'position', ref: _position, reflect: true, type: 'string' },
            ],
            tick: 'after'
        })

        useNavigable(root, {
            tabs: props.tabs,
            handleChange,
        })

        onMounted(() => {
            if (isServer()) {
                return
            }
        })

        return () => {
            renderNavigationDestination({
                tabs: props.tabs,
                container: tabContainer!,
                component: NavigationRailTab,
                props: (tabConfig) => ({
                    hideInactiveLabel: typeof tabConfig.hideInactiveLabel === 'undefined' ? props.hideInactiveLabel : tabConfig.hideInactiveLabel,
                    label: tabConfig.label ?? 'Unnamed Tab',
                }),
            })

            return (
                <div
                    data-component="navigation-rail"
                    class={[css['navigation-rail'], css[_position.value]]}
                    ref={root}
                >
                    <span class={css['start-wrapper']}>
                        {slots.start && slots.start()}
                    </span>
                    <span class={css['tabs-wrapper']} ref={tabContainer}>
                        {slots.default && slots.default()}
                    </span>
                    <span class={css['end-wrapper']}>
                        {slots.end && slots.end()}
                    </span>

                    <span aria-hidden="true" class={css.background}></span>
                </div>
            )
        }
    },
})
