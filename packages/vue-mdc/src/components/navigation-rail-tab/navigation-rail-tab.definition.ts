/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import type { ExtractPublicPropTypes, PropType, VNode } from 'vue'

export const props = {
    label: {
        type: String as PropType<string>,
        default: 'Unnamed Tab',
    },
    hideInactiveLabel: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
} as const

export type TNavigationRailTabProps = ExtractPublicPropTypes<typeof props>

export type TNavigationRailTabSlots = {
    default?: VNode
    'active-icon'?: VNode
    'inactive-icon'?: VNode
}
