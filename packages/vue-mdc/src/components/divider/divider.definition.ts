/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import type { ExtractPublicPropTypes, PropType } from 'vue'

export const DividerVariant = {
    InsetStart: 'inset-start',
    MiddleInset: 'middle-inset',
    InsetEnd: 'inset-end',
    NoInset: 'no-inset',
} as const

export type TDividerVariant = typeof DividerVariant[keyof typeof DividerVariant]

export const props = {
    variant: {
        default: DividerVariant.MiddleInset,
        type: String as PropType<TDividerVariant>,
    },
}

export type TDividerProps = ExtractPublicPropTypes<typeof props>

export type TDividerSlots = {}
