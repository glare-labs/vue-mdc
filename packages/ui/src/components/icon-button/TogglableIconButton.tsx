import { PropType, computed, defineComponent, onBeforeMount, ref, watch, type SlotsType } from 'vue'
import css from './iconButton.module.css'
import cssBase from './base.module.css'
import { Ripple } from '../ripple/Ripple'
import { propsShared } from './base'

const props = {
    ...propsShared,
    defaultSelected: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    modelValue: {
        type: Boolean as PropType<boolean>,
        default: false,
    }
}
const emits = {
    'update:modelValue': (modelValue: boolean) => modelValue,
}
const slots = {} as SlotsType<{
    default: void
}>

export const TogglableIconButton = defineComponent({
    name: 'GlareUi-TogglableIconButton',
    props,
    emits,
    slots,
    setup(props, { emit }) {
        /**
         * @private
         */
        const _selected = ref(props.modelValue)

        /**
         * @public
         */
        const selected = computed({
            get: () => _selected.value,
            set: (value: boolean) => {
                _selected.value = value
                emit('update:modelValue', value)
            }
        })

        onBeforeMount(() => {
            selected.value = props.defaultSelected
        })

        watch(() => props.modelValue, (value: boolean) => {
            selected.value = value
        })

        /**
         * @public
         */
        const handleClicked = () => {
            selected.value = !selected.value
        }

        return {
            selected,
            handleClicked
        }
    },
    render() {
        const renderIcon = (
            <span class={cssBase.icon}>
                {this.$slots.default && this.$slots.default()}
            </span>
        )

        return (
            <button
                class={[
                    cssBase.container,
                    css[this.appearance],
                    this.disabled && cssBase.disabled,
                    this.selected ? cssBase.selected : cssBase.unselected
                ]}
                aria-disabled={this.disabled}
                disabled={this.disabled}
                type={this.type}
                onClick={this.handleClicked}
                role='checkbox'
            >
                <Ripple></Ripple>

                <div aria-hidden="true" class={cssBase.touch}></div>
                <div aria-hidden="true" class={cssBase.background}></div>
                <div aria-hidden="true" class={cssBase.outline}></div>

                {renderIcon}
            </button>
        )
    }
})
