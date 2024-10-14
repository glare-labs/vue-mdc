import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import type { TButtonTarget } from '../../utils/button-target-type'
import { Ripple } from '../ripple/ripple'
import { EIconButtonAppearance, type TIconButtonAppearance } from './icon-button-appearance'
import { EIconButtonType, type TIconButtonType } from './icon-button-type'
import css from './styles/icon-button.module.scss'

class IconButtonComponent {
    private readonly name = `${componentNamePrefix}-icon-button`

    private props = {
        appearance: {
            type: String as PropType<TIconButtonAppearance>,
            default: EIconButtonAppearance.Standard,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String as PropType<TIconButtonType>,
            default: EIconButtonType.Button,
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
    }>

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        render() {
            const isLink = this.href !== null

            const renderIcon = (
                <span class={css.icon}>
                    {this.$slots.default && this.$slots.default()}
                </span>
            )
            const renderContent = (
                <>
                    <Ripple></Ripple>
                    <div aria-hidden="true" class={css.touch}></div>
                    <div aria-hidden="true" class={css.background}></div>
                    <div aria-hidden="true" class={css.outline}></div>
                    {renderIcon}
                </>
            )
            const renderLink = (
                <a
                    class={[css[this.appearance], this.disabled && css.disabled]}
                    href={this.href}
                    target={this.target}
                    data-component="icon-button"
                    aria-disabled={this.disabled}
                    type={this.type}
                >
                    {renderContent}
                </a>
            )
            const renderButton = (
                <button
                    class={[css[this.appearance], this.disabled && css.disabled]}
                    data-component="icon-button"
                    disabled={this.disabled}
                    aria-disabled={this.disabled}
                    type={this.type}
                >
                    {renderContent}
                </button>
            )


            return isLink ? renderLink : renderButton
        }
    })
}

export const IconButton = new IconButtonComponent().component
