/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import type { ExtractPublicPropTypes, PropType, VNode } from 'vue'

export const props = {
    modal: {
        default: true,
        type: Boolean as PropType<boolean>
    },
    defaultOpen: {
        default: false,
        type: Boolean as PropType<boolean>,
    },
    modelValue: {
        default: null,
        type: Boolean as PropType<boolean>,
    }
} as const

export type TNavigationDrawerProps = ExtractPublicPropTypes<typeof props>

export type TNavigationDrawerSlots = {
    default?: VNode
}
