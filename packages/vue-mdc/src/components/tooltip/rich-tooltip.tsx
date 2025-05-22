/**
 * @license
 * Copyright 2025 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { computed, defineComponent, onMounted, ref, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { Corner, useSurfacePosition, type ISurfacePositionControllerProperties } from '../../internals/controller/use-surface-position'
import { createAnimationSignal } from '../../internals/motion/animation'
import { isServer } from '../../utils'
import { Elevation } from '../elevation'
import { animateClose, animateOpen } from './animation'
import css from './styles/rich-tooltip.module.scss'
import { ETooltipPosition, STooltipController, useTooltip, type ITooltipControllerHost, type TTooltipPosition } from './tooltip-controller'

export const RichTooltip = defineComponent({
    name: `${componentNamePrefix}-rich-tooltip`,
    emits: [],
    slots: {} as SlotsType<{
        /**
         * Hyperlink <a></a> elements or other links should be used.
         * According to design specifications,
         * do not use Button and IconButton components in action slot.
         */
        action?: void
        subhead?: void
        ['supporting-text']?: void
    }>,
    props: {
        position: {
            type: String as PropType<TTooltipPosition>,
            default: ETooltipPosition.Below,
        },
        visibility: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        showDelay: {
            type: Number as PropType<number>,
            default: 500,
        },
        hideDelay: {
            type: Number as PropType<number>,
            default: 200,
        },
        anchor: {
            type: String as PropType<string>,
            default: null,
        },
        disableElevation: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
    },
    setup(props, { slots }) {
        const root = ref<ITooltipControllerHost | null>(null)
        const animationSignal = createAnimationSignal()

        /**
         * Computed
         */
        const visibility = computed({
            set: (value: boolean) => {
                if (_visibility.value === value) {
                    return
                }
                _visibility.value = value
                if (value) {
                } else {
                }
            },
            get: () => _visibility.value
        })
        const anchorElement = computed<HTMLElement | null>(() => {
            if (!root.value) {
                return null
            }
            const document = window.document
            if (!document) {
                return null
            }
            return document.querySelector(`#${_anchor.value}`)
        })
        const surfacePositionProps = computed<ISurfacePositionControllerProperties>(() => ({
            anchorCorner: Corner.EndStart,
            surfaceCorner: Corner.StartStart,
            anchorEl: anchorElement.value,
            surfaceEl: root.value,
            isOpen: visibility.value,
            positioning: 'document',
            xOffset: 0,
            yOffset: 0,
            disableBlockFlip: true,
            disableInlineFlip: true,
            onBeforeOpen: async () => setVisibilityAttribute(true),
            onOpen: showTooltip,
            onBeforeClose: hideTooltip,
            onClose: async () => setVisibilityAttribute(false),
        }))

        /**
         * Props
         */
        const _position = ref(props.position)
        const _visibility = ref(props.visibility)
        const _disabled = ref(props.disabled)
        const _showDelay = ref(props.showDelay)
        const _hideDelay = ref(props.hideDelay)
        const _anchor = ref(props.anchor)
        const _disableElevation = ref(props.disableElevation)

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'position', ref: _position, reflect: true, type: 'string', },
                { attribute: 'visible', ref: _visibility, reflect: true, type: 'boolean', },
                { attribute: 'disabled', ref: _disabled, reflect: true, type: 'boolean', },
                { attribute: 'showDelay', ref: _showDelay, reflect: true, type: 'number', },
                { attribute: 'hideDelay', ref: _hideDelay, reflect: true, type: 'number', },
                { attribute: 'anchor', ref: _anchor, reflect: true, type: 'string', },
                { attribute: 'disable-elevation', ref: _disableElevation, reflect: true, type: 'boolean', },
            ],
            tick: 'before'
        })

        /**
         * Methods
         */
        const showTooltip = (delay?: number) => {
            if (!root.value || _disabled.value) {
                return
            }
            return animateOpen(root.value, animationSignal)
        }

        const hideTooltip = (delay?: number) => {
            if (!root.value) {
                return
            }
            return animateClose(root.value, animationSignal)
        }

        const setVisibilityAttribute = (visibility: boolean) => {
            if (visibility) {
                root.value?.setAttribute('visible', '')
            } else {
                root.value?.removeAttribute('visible')
            }
        }

        useTooltip(root, anchorElement, {
            disabled: _disabled,
            hideDelay: _hideDelay,
            position: _position,
            showDelay: _showDelay,
            touchGestures: ref('auto'),
            visibility: visibility
        })



        const { surfaceStyles } = useSurfacePosition(surfacePositionProps)

        onMounted(() => {
            if (isServer()) {
                return
            }
            if (!root.value) {
                return
            }

            root.value[STooltipController] = {
                open: showTooltip,
                close: hideTooltip,
                position: _position,
                visibility: visibility,
                touchGestures: ref('auto'),
            }
        })

        return () => {

            const renderAction = (
                <div class={css.actions}>
                    {slots.action && slots.action()}
                </div>
            )

            return (
                <div ref={root} popover="manual" aria-haspopup class={css['rich-tooltip']} style={surfaceStyles.value}>
                    {slots.subhead && <span class={css.subhead}>{slots.subhead()}</span>}
                    {slots['supporting-text'] && <span class={css['supporting-text']}>{slots['supporting-text']()}</span>}

                    {renderAction}

                    {!_disableElevation.value && <Elevation></Elevation>}
                </div>
            )
        }
    },
    inheritAttrs: false,
})
