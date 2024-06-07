import type { PropType, SlotsType } from 'vue'
import { EIconButtonAppearance, EIconButtonType, type TIconButtonAppearance, type TIconButtonType } from './IconButtonType'

export abstract class BaseIconButton {
    protected abstract name: string
    protected _props = {
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
    }
    protected getProps() {
        return this._props
    }

    protected slots = {} as SlotsType<{
        default: void
    }>

    protected emits = {}
}
