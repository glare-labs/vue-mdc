/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import { defineComponent, type PropType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { EDividerVariant, type TDividerVariant } from './divider-variant'
import css from './styles/divider.module.scss'

class DividerComponent {
    private readonly name = `${componentNamePrefix}-divider`

    private readonly props = {
        variant: {
            default: EDividerVariant.MiddleInset,
            type: String as PropType<TDividerVariant>,
        },
    }

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        render() {
            const isNoInsert = this.variant === EDividerVariant.NoInset
            const isMiddle = this.variant === EDividerVariant.MiddleInset

            const variant = isNoInsert ? [] : isMiddle ? css.inset : css[this.variant]
            return (
                <span
                    data-component="divider"
                    aria-hidden="true"
                    class={[css.divider, variant]}
                ></span>
            )
        }
    })
}

export const Divider = new DividerComponent().component
