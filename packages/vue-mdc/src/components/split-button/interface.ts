/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

export const SplitButtonAppearance = {
    Filled: 'filled',
    FilledTonal: 'filled-tonal',
    Outlined: 'outlined',
} as const

export type TSplitButtonAppearance = typeof SplitButtonAppearance[keyof typeof SplitButtonAppearance]
