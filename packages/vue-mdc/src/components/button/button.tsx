import { defineComponent, type PropType, type SlotsType } from 'vue'
import { setupFormSubmitter, type TFormSubmitterType } from '../../internals'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { dispatchActivationClick, isActivationClick } from '../../internals/events/form-label-activation'
import { generateUuid, isServer } from '../../utils'
import type { TButtonTarget } from '../../utils/button-target-type'
import { Elevation } from '../elevation/elevation'
import { FocusRing } from '../focus-ring'
import { Ripple } from '../ripple/ripple'
import { EButtonAppearance, type TButtonAppearance } from './button-appearance'
import { EButtonShape, type TButtonShape } from './button-shape'
import { EButtonType } from './button-type'
import css from './styles/button.module.scss'

class ButtonComponent {
    private readonly name = `${componentNamePrefix}-button`
    private readonly props = {
        appearance: {
            type: String as PropType<TButtonAppearance>,
            default: EButtonAppearance.Filled,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String as PropType<TFormSubmitterType>,
            default: EButtonType.Button,
        },
        shape: {
            type: String as PropType<TButtonShape>,
            default: EButtonShape.Circular,
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
        id: {
            type: String as PropType<string>,
            default: null,
        }
    }

    private slots = {} as SlotsType<{
        default: void
        'leading-icon': void
        'trailing-icon': void
    }>

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        data: () => ({
            elementId: null as null | string,
            innerId: `button-${generateUuid()}`,
        }),
        created() {
            if (this.id !== null) {
                this.elementId = this.id
            }
        },
        mounted() {
            if (isServer()) {
                return
            }

            this.$watch(
                'target',
                (cur, last) => {
                    if (cur === null) {
                        this.getRoot().removeAttribute('form')
                        this.getButtonElement()?.removeAttribute('form')
                        return
                    }
                    if (cur === last) {
                        return
                    }

                    this.getRoot().setAttribute('target', cur)
                    this.getLinkElement()?.setAttribute('target', cur)
                },
                {
                    immediate: true,
                }
            )
            this.$watch(
                'disabled',
                (cur, last) => {
                    if (cur === last) {
                        return
                    }

                    if (cur) {
                        this.getRoot().setAttribute('disabled', cur)
                        this.getRoot().setAttribute('aria-disabled', cur)
                        this.getButtonElement()?.setAttribute('disabled', cur)
                        this.getButtonElement()?.setAttribute('aria-disabled', cur)
                        this.getLinkElement()?.setAttribute('disabled', cur)
                        this.getLinkElement()?.setAttribute('aria-disabled', cur)
                    } else {
                        this.getRoot().removeAttribute('disabled')
                        this.getRoot().removeAttribute('aria-disabled')
                        this.getButtonElement()?.removeAttribute('disabled')
                        this.getButtonElement()?.removeAttribute('aria-disabled')
                        this.getLinkElement()?.removeAttribute('disabled')
                        this.getLinkElement()?.removeAttribute('aria-disabled')
                    }
                },
                {
                    immediate: true,
                }
            )
            this.$watch(
                'type',
                (cur, last) => {
                    if (cur === null) {
                        this.getRoot().removeAttribute('type')
                        this.getButtonElement()?.removeAttribute('type')
                        return
                    }
                    if (cur === last) {
                        return
                    }
                    this.getRoot().setAttribute('type', cur)
                    this.getButtonElement()?.setAttribute('type', cur)
                },
                {
                    immediate: true,
                }
            )
            this.$watch(
                'form',
                (cur, last) => {
                    if (cur === null) {
                        this.getRoot().removeAttribute('form')
                        this.getButtonElement()?.removeAttribute('form')
                        return
                    }
                    if (cur === last) {
                        return
                    }
                    this.getRoot().setAttribute('form', cur)
                    this.getButtonElement()?.setAttribute('form', cur)
                },
                {
                    immediate: true,
                }
            )
            this.$watch(
                'name',
                (cur, last) => {
                    if (cur === null) {
                        this.getRoot().removeAttribute('name')
                        this.getButtonElement()?.removeAttribute('name')
                        return
                    }
                    if (cur === last || cur === null) {
                        return
                    }
                    this.getRoot().setAttribute('name', cur)
                    this.getButtonElement()?.setAttribute('name', cur)
                },
                {
                    immediate: true,
                }
            )
            this.$watch(
                'value',
                (cur, last) => {
                    if (cur === null) {
                        this.getRoot().removeAttribute('value')
                        this.getButtonElement()?.removeAttribute('value')
                        return
                    }
                    if (cur === last) {
                        return
                    }
                    this.getRoot().setAttribute('value', cur)
                    this.getButtonElement()?.setAttribute('value', cur)
                },
                {
                    immediate: true,
                }
            )
            this.$watch(
                'id',
                (cur, last) => {
                    if (cur === null) {
                        this.getRoot().removeAttribute('id')
                        return
                    }
                    if (cur === last) {
                        return
                    }
                    this.getRoot().setAttribute('id', cur)
                },
                {
                    immediate: true,
                }
            )

            const buttonElement = this.getButtonElement()
            if (buttonElement) {
                setupFormSubmitter(buttonElement)
            }
            this.getRoot().addEventListener('click', this.handleClick)
        },
        methods: {
            getButtonElement(): HTMLButtonElement | null {
                return (this.$el as HTMLElement).querySelector(`button.${css.button}`)!
            },
            getLinkElement(): HTMLLinkElement | null {
                return (this.$el as HTMLElement).querySelector(`a.${css.button}`)!
            },
            getRoot(): HTMLElement {
                return this.$el
            },
            handleClick(e: MouseEvent) {
                if (this.href && this.disabled) {
                    e.stopImmediatePropagation()
                    e.preventDefault()
                    return
                }

                if (!isActivationClick(e) || !this.getButtonElement()) {
                    return
                }
                this.getButtonElement()?.focus()
                dispatchActivationClick(this.getButtonElement()!)
            },

        },
        render() {
            const elevationButtonArray: Array<TButtonAppearance> = [EButtonAppearance.Elevated, EButtonAppearance.Filled, EButtonAppearance.FilledTonal]
            const needElevation = elevationButtonArray.includes(this.appearance)
            const needOutline = this.appearance === EButtonAppearance.Outlined
            const iconState = this.$slots['leading-icon'] ? css.left : this.$slots['trailing-icon'] ? css.right : null
            const isLink = this.href !== null

            const renderContent = (
                <>
                    <span class={css.touch}></span>
                    {this.$slots['leading-icon'] && this.$slots['leading-icon']()}
                    <span class={[css.label]}>
                        {this.$slots.default && this.$slots.default()}
                    </span>
                    {this.$slots['trailing-icon'] && this.$slots['trailing-icon']()}
                </>
            )

            const renderButton = (
                <button
                    class={[css.button]}
                    id={this.innerId}
                >
                    {renderContent}
                </button>
            )
            const renderLink = (
                <a
                    class={[css.button]}
                    href={this.href}
                    id={this.innerId}
                >
                    {renderContent}
                </a>
            )

            return (
                <div
                    data-component="button"
                    class={[css[this.appearance], iconState, this.disabled && css.disabled]}
                    role='button'
                >
                    <Ripple></Ripple>
                    <FocusRing htmlFor={this.innerId} shapeInherit={false}></FocusRing>

                    {needElevation && <Elevation></Elevation>}
                    {needOutline && <div aria-hidden="true" class={[css.outline]}></div>}

                    <div aria-hidden="true" class={[css.background]}></div>

                    {isLink ? renderLink : renderButton}
                </div >
            )
        }
    })

}

export const Button = new ButtonComponent().component
