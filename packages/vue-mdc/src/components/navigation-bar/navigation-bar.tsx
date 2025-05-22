/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { defineComponent, ref, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { useNavigable, type INavigationItem } from '../../internals/controller/use-navigable'
import { renderNavigationDestination } from '../../internals/navigation/render-navigation-destination'
import { Elevation } from '../elevation'
import { NavigationTab } from '../navigation-tab'
import css from './styles/navigation-bar.module.scss'

export enum ENavigationBarRippleStyle {
    Default = 'default',
    Unbounded = 'unbounded',
    Bounded = 'bounded',
}

export type TNavigationBarRippleStyle = 'default' | 'unbounded' | 'bounded'

export const NavigationBar = defineComponent({
    name: `${componentNamePrefix}-navigation-bar`,
    slots: {} as SlotsType<{
        default: void
    }>,
    props: {
        defaultActiveOrder: {
            type: Number as PropType<number>,
            default: -2,
        },
        rippleStyle: {
            type: String as PropType<TNavigationBarRippleStyle>,
            default: ENavigationBarRippleStyle.Default,
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
    emits: [
        'change'
    ],
    setup(props, { slots, emit }) {
        const root = ref<HTMLElement | null>(null)

        const _rippleStyle = ref(props.rippleStyle)

        const handleChange = (e: Event) => {
            emit('change', e)
        }

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'ripple-style', ref: _rippleStyle, reflect: true, type: 'string' },
            ],
            tick: 'after'
        })

        useNavigable(root, {
            tabs: [],
            handleChange,
        })

        return () => {
            renderNavigationDestination({
                component: NavigationTab,
                container: root,
                tabs: props.tabs,
                props: (tabConfig) => ({
                    hideInactiveLabel: typeof tabConfig.hideInactiveLabel === 'undefined' ? props.hideInactiveLabel : tabConfig.hideInactiveLabel,
                    label: tabConfig.label ?? 'Unnamed Tab',
                })
            })

            return (
                <div
                    data-component="navigation-bar"
                    class={[css['navigation-bar'], _rippleStyle.value === ENavigationBarRippleStyle.Unbounded && css['ripple-unbounded']]}
                    ref={root}
                >
                    {slots.default && slots.default()}

                    <Elevation></Elevation>
                </div>
            )
        }
    },
})
