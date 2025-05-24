/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import { defineComponent } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { DividerVariant, props } from './divider.definition'
import css from './styles/divider.module.scss'

export const Divider = defineComponent({
    name: `${componentNamePrefix}-divider`,
    props: props,
    render() {
        const isNoInsert = this.variant === DividerVariant.NoInset
        const isMiddle = this.variant === DividerVariant.MiddleInset

        const variant = isNoInsert ? [] : isMiddle ? css.inset : css[this.variant]
        return (
            <span
                data-component="divider"
                aria-hidden="true"
                class={[css.divider, variant]}
            ></span>
        )
    },
    inheritAttrs: true,
})
