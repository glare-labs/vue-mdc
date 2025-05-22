/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

export enum ESplitButtonAppearance {
    Filled = 'filled',
    FilledTonal = 'filled-tonal',
    Outlined = 'outlined',
}

export type TSplitButtonAppearance = (typeof ESplitButtonAppearance)[keyof typeof ESplitButtonAppearance]
