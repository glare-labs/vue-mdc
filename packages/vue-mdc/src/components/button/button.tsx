import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { dispatchActivationClick, isActivationClick } from '../../internals/events/form-label-activation'
import { generateUuid, isServer } from '../../utils'
import type { TButtonTarget } from '../../utils/button-target-type'
import { Elevation } from '../elevation/elevation'
import { FocusRing } from '../focus-ring'
import { Ripple } from '../ripple/ripple'
import { EButtonAppearance, type TButtonAppearance } from './button-appearance'
import { EButtonShape, type TButtonShape } from './button-shape'
import { EButtonType, type TButtonType } from './button-type'
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
            type: String as PropType<TButtonType>,
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
            type: String as PropType<TButtonTarget | ''>,
            default: '',
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
        mounted() {
            if (isServer()) {
                return
            }

            (this.$el as HTMLElement).addEventListener('click', this.handleClick)
        },
        methods: {
            getButtonElement() {
                return (this.$el as HTMLElement).querySelector(`.${css.button}`) as HTMLElement
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
                this.getButtonElement().focus()
                dispatchActivationClick(this.getButtonElement())
            }
        },
        render() {
            const id = `button-${generateUuid()}`

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
                    type={this.type}
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    role='div'
                    tabindex={-1}
                    id={id}
                >
                    {renderContent}
                </button>
            )
            const renderLink = (
                <a
                    class={[css.button]}
                    href={this.href}
                    target={this.target}
                    aria-hidden="true"
                    id={id}
                >
                    {renderContent}
                </a>
            )

            return (
                <div
                    data-component="button"
                    class={[css[this.appearance], iconState, this.disabled && css.disabled]}
                    aria-disabled={this.disabled}
                    role='button'
                >
                    <Ripple></Ripple>
                    <FocusRing htmlFor={id} shapeInherit={false}></FocusRing>

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
