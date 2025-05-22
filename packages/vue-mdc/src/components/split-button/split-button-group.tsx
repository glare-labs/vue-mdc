/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import { defineComponent, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import css from './styles/split-button.module.scss'

export const SplitButtonGroup = defineComponent({
    name: `${componentNamePrefix}-split-button-group`,
    slots: {} as SlotsType<{
        default?: void
    }>,
    emits: [],
    props: {},
    setup(props, { slots }) {

        return () => (
            <div class={css['button-group']}>
                {slots.default && slots.default()}
            </div>
        )
    },
})
