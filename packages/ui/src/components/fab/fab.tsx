import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { Elevation } from '../elevation/elevation'
import { Ripple } from '../ripple/ripple'
import { EFabSize, type TFabSize } from './fab-size'
import { EFabVariant, type TFabVariant } from './fab-variant'
import css from './styles/fab.module.scss'

class FabComponent {
    private readonly name = `${componentNamePrefix}-fab`

    private readonly props = {
        size: {
            default: EFabSize.Medium,
            type: String as PropType<TFabSize>,
        },
        label: {
            default: '',
            type: String as PropType<string>,
        },
        variant: {
            default: EFabVariant.Secondary,
            type: String as PropType<TFabVariant>,
        },
        lowered: {
            default: false,
            type: Boolean as PropType<boolean>,
        },
    }
    private readonly slots = {} as SlotsType<{
        default?: void
    }>

    public readonly component = defineComponent({
        props: this.props,
        slots: this.slots,
        render() {
            const renderIcon = (
                <span class={css.icon}>
                    {this.$slots.default && this.$slots.default()}
                </span>
            )
            const renderLabel = (
                <span class={css.label}>
                    {this.label}
                </span>
            )
            const isMediumSize = this.size === EFabSize.Medium
            const isExtended = this.label.length !== 0
            if (isExtended && !isMediumSize) {
                console.warn(`The label and icon can only be set at the same time when the size is medium. If the size attribute of your fab component is not medium, please remove the label attribute.`)
            }
            return (
                <button
                    class={[css.fab, (isExtended && isMediumSize) && css.extended, css[this.size], css[this.variant], this.lowered && css.lowered]}
                >
                    <Ripple></Ripple>
                    <Elevation></Elevation>

                    <span class={css['touch-target']}></span>

                    {renderIcon}
                    {isMediumSize && renderLabel}
                </button>
            )
        }
    })

}

export const Fab = new FabComponent().component
