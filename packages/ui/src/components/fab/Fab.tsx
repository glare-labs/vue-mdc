import { defineComponent, type PropType, type SlotsType } from 'vue'
import css from './styles/fab.module.scss'
import { Ripple } from '../ripple/Ripple'
import { Elevation } from '../elevation/Elevation'
import { EFabSize, type TFabSize } from './FabSize'
import { EFabVariant, type TFabVariant } from './FabVariant'

class FabComponent {
    private props = {
        size: {
            type: String as PropType<TFabSize>,
            default: EFabSize.Medium,
        },
        label: {
            type: String,
            default: '',
        },
        variant: {
            type: String as PropType<TFabVariant>,
            default: EFabVariant.Secondary,
        },
        lowered: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
    }
    private slots = {} as SlotsType<{
        default?: void
    }>

    public component = defineComponent({
        props: this.props,
        slots: this.slots,
        setup(props, { slots }) {
            const renderIcon = (
                <span class={css.icon}>
                    {slots.default && slots.default()}
                </span>
            )
            const renderLabel = (
                <span class={css.label}>
                    {props.label}
                </span>
            )
    
            const isMedmiumSize = props.size === EFabSize.Medium
            const isExtended = props.label.length !== 0
            if(isExtended && !isMedmiumSize) {
                console.warn(`The label and icon can only be set at the same time when the size is medium. If the size attribute of your fab component is not medium, please remove the label attribute.`)
            }
    
            return () => (
                <button
                    class={[css.fab, (isExtended && isMedmiumSize) && css.extended, css[props.size], css[props.variant], props.lowered && css.lowered]}
                >
                    <Ripple></Ripple>
                    <Elevation></Elevation>
    
                    <span class={css['touch-target']}></span>
    
                    {renderIcon}
                    { isMedmiumSize && renderLabel}
                </button>
            )
        },
    })
    
}

export const Fab = new FabComponent().component
