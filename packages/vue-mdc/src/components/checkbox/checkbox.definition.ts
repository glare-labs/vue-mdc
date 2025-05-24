/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import type { ExtractPublicPropTypes } from 'vue'

export const props = {
    disabled: {
        type: Boolean,
        default: false,
    },
    defaultChecked: {
        type: Boolean,
        default: null,
    },
    modelValue: {
        type: Boolean,
        default: null,
    },
    indeterminate: {
        type: Boolean,
        default: null,
    },
}

export type TCheckboxProps = ExtractPublicPropTypes<typeof props>
export type TCheckboxSlots = {}
