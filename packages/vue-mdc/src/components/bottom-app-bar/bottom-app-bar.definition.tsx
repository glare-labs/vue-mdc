/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import type { ExtractPublicPropTypes, VNode } from 'vue'

export const props = {}

export type TBottomAppBarProps = ExtractPublicPropTypes<typeof props>

export type TBottomAppBarSlots = {
    'leading-icons'?: VNode
    default?: VNode
}
