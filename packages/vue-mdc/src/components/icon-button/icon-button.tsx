/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { defineComponent, ref, type PropType, type SlotsType } from 'vue'
import type { TFormSubmitterType } from '../../internals'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import type { TButtonTarget } from '../../utils/button-target-type'
import { FocusRing } from '../focus-ring'
import { Ripple } from '../ripple/ripple'
import { EIconButtonAppearance, type TIconButtonAppearance } from './icon-button-appearance'
import { EIconButtonType } from './icon-button-type'
import css from './styles/icon-button.module.scss'

export const IconButton = defineComponent({
    name: `${componentNamePrefix}-icon-button`,
    slots: {} as SlotsType<{
        default: void
    }>,
    props: {
        appearance: {
            type: String as PropType<TIconButtonAppearance>,
            default: EIconButtonAppearance.Standard,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String as PropType<TFormSubmitterType>,
            default: EIconButtonType.Button,
        },
        href: {
            type: String as PropType<string>,
            default: null,
        },
        target: {
            type: String as PropType<TButtonTarget>,
            default: null,
        },
        form: {
            type: String as PropType<string>,
            default: null,
        },
        name: {
            type: String as PropType<string>,
            default: null,
        },
        value: {
            type: String as PropType<string>,
            default: null,
        },
    },
    setup(props, { slots }) {
        const root = ref<HTMLElement | null>(null)

        /**
         * Props
         */
        const _appearance = ref(props.appearance)
        const _disabled = ref(props.disabled)
        const _type = ref(props.type)
        const _href = ref(props.href)
        const _target = ref(props.target)
        const _form = ref(props.form)
        const _name = ref(props.name)
        const _value = ref(props.value)

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'appearance', ref: _appearance, reflect: true, type: 'string', },
                { attribute: 'disabled', ref: _disabled, reflect: true, type: 'boolean', },
                { attribute: 'type', ref: _type, reflect: true, type: 'string', },
                { attribute: 'href', ref: _href, reflect: true, type: 'string', },
                { attribute: 'target', ref: _target, reflect: true, type: 'string', },
                { attribute: 'form', ref: _form, reflect: true, type: 'string', },
                { attribute: 'name', ref: _name, reflect: true, type: 'string', },
                { attribute: 'value', ref: _value, reflect: true, type: 'string', },
            ]
        })

        return () => {
            const isLink = _href.value !== null

            const renderIcon = (
                <span class={css.icon}>
                    {slots.default && slots.default()}
                </span>
            )
            const renderContent = (
                <>
                    <Ripple></Ripple>
                    <FocusRing shapeInherit={false}></FocusRing>
                    <div aria-hidden="true" class={css.touch}></div>
                    <div aria-hidden="true" class={css.background}></div>
                    <div aria-hidden="true" class={css.outline}></div>
                    {renderIcon}
                </>
            )
            const renderLink = (
                <a
                    class={[css[_appearance.value], _disabled.value && css.disabled]}
                    data-component="icon-button"
                    href={_href.value}
                    ref={root}
                >
                    {renderContent}
                </a>
            )
            const renderButton = (
                <button
                    class={[css[_appearance.value], _disabled.value && css.disabled]}
                    data-component="icon-button"
                    ref={root}
                >
                    {renderContent}
                </button>
            )


            return isLink ? renderLink : renderButton
        }
    },
    inheritAttrs: true,
})
