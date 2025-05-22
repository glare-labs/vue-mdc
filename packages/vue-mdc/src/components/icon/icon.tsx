/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { EIconVariant, type TIconVariant } from './icon-variant'
import css from './styles/icon.module.scss'

class IconComponent {
    private readonly name = `${componentNamePrefix}-icon`
    private readonly props = {
        /**
         * 图标变体
         *
         * _此选项仅在项目安装了依赖项`material-symbols`时有效_
         *
         * + variant
         *   - sharp
         *   - rounded
         *   - outlined
         *
         * sharp更锐利, rounded更平滑, outlined较为一般化
         *
         * 可以导入枚举对象EIconSize来传入大小
         * ```html
         * <Icon :variant="EIconVariant.Sharp">send</Icon>
         * ```
         *
         * @default rounded
         */
        variant: {
            default: EIconVariant.Rounded,
            type: String as PropType<TIconVariant>,
        },
    }
    private readonly slots = {} as SlotsType<{
        default?: void
    }>


    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        render() {
            return (
                <span data-component="icon" class={[css.icon, css[this.variant]]}>
                    {this.$slots.default && this.$slots.default()}
                </span>
            )
        }
    })

}

export const Icon = new IconComponent().component
