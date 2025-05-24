/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import type { ExtractPublicPropTypes, PropType, VNode } from 'vue'
import { TypographyVariant, type TTypographyVariant } from './typography-variant'

export const props = {
    variant: {
        default: TypographyVariant.BodyMedium,
        type: String as PropType<TTypographyVariant>,
    },
} as const

export type TTypograhyProps = ExtractPublicPropTypes<typeof props>

export type TTypograhySlots = {
    default?: Array<VNode>
}
