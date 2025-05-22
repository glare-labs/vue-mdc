/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import { defineComponent, type PropType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { EElevationLevel, type TElevationLevel } from './elevation-level'
import css from './styles/elevation.module.scss'

class ElevationComponent {
    private readonly name = `${componentNamePrefix}-elevation`
    private readonly props = {
        /**
         * 阴影级数, 取值在0到5之间, 包括0和5
         *
         * 请确保**父元素的position为relative**, 并且父元素必须拥有大小
         *
         * + level
         *   - 0
         *   - 1
         *   - 2
         *   - 3
         *   - 4
         *   - 5
         *
         * 可以导入枚举对象EElevationLevel来传入大小
         * @example
         * ```html
         * <div class="relative w-[32px] h-[32px]">
         *   <glare.elevation :level="EElevationLevel.Level3"></glare.elevation>
         * </div>
         * ```
         *
         * @default 0
         */
        level: {
            type: Number as PropType<TElevationLevel>,
            default: EElevationLevel.Level0,
            validator(value: number) {
                return value >= EElevationLevel.Level0 && value <= EElevationLevel.Level5
            },
        },
    }

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        render() {
            return (
                <span data-component="elevation" class={[css.elevation, css[`level-${this.level}`]]}></span>
            )
        },
    })
}

export const Elevation = new ElevationComponent().component
