import { computed, defineComponent, reactive, ref, watch } from 'vue'
import { emits, props } from './Checkbox.type'
import { CheckboxStyles } from './Checkbox.css'
import { Ripple } from '../../../components/ripple'

declare module 'vue' {
    export interface GlobalComponents {
        'Am-Checkbox': typeof renderCheckbox,
    }
}

/**
 * @alias Am-Checkbox
 */
export const renderCheckbox = defineComponent({
    name: 'AmCheckbox',
    props,
    emits,
    setup(props, { emit }) {
        const state = reactive({
            checked: props.modelValue,
            indeterminate: false,
            value: props.modelValue ? 'on' : 'off',
            prevChecked: false,
            prevDisabled: false,
            prevIndeterminate: false,
        })
        watch(() => props.modelValue, () => {
            state.checked = props.modelValue
            state.value = state.checked ? 'on' : 'off'
            triggerRipple()
        })

        const classes = computed(() => {
            const prevNone = !state.prevChecked && !state.prevIndeterminate
            const prevChecked = state.prevChecked && !state.prevIndeterminate
            const prevIndeterminate = state.prevIndeterminate
            const isChecked = state.checked && !state.indeterminate
            const isIndeterminate = state.indeterminate

            const stateClasses = []

            stateClasses.push(CheckboxStyles.state.init)
            if (isChecked || isIndeterminate) {
                stateClasses.push(CheckboxStyles.state.selected)
            }
            if (isChecked) {
                stateClasses.push(CheckboxStyles.state.checked)
            }
            if (prevChecked && (!isChecked && !isIndeterminate)) {
                stateClasses.push(CheckboxStyles.state.checked)
            }
            if (isIndeterminate) {
                stateClasses.push(CheckboxStyles.state.prevCheckedButNowUnselected)
            }
            if (prevIndeterminate && (!isChecked && !isIndeterminate)) {
                stateClasses.push(CheckboxStyles.state.prevIndeterminateButNowUnselected)
            }
            if (prevNone) {
                stateClasses.push(CheckboxStyles.state.prevUnselected)
            }
            if (prevNone && isChecked) {
                stateClasses.push(CheckboxStyles.state.prevUnselectedButNowChecked)
            }
            if (props.disabled) {
                stateClasses.push(CheckboxStyles.state.disabled)
                if (isChecked || isIndeterminate) {
                    stateClasses.push(CheckboxStyles.state.disabledAndSelected)
                } else if (!isChecked && !isIndeterminate) {
                    stateClasses.push(CheckboxStyles.state.disabledAndUnselected)
                }
            }

            return {
                container: [
                    CheckboxStyles.container,
                    ...stateClasses
                ],
                input: [CheckboxStyles.input],
                outline: [CheckboxStyles.outline],
                background: [CheckboxStyles.background],
                icon: [CheckboxStyles.icon],
                markShort: [CheckboxStyles.mark, CheckboxStyles.iconMarkShort],
                markLong: [CheckboxStyles.mark, CheckboxStyles.iconMarkLong],
                rippleTarget: [CheckboxStyles.rippleTarget],
            }
        })

        const rippleRef = ref()

        const inputEventHandle = (e: Event) => {
            const target = (e.target as HTMLInputElement)
            state.checked = target.checked
            state.indeterminate = target.indeterminate
            state.value = state.checked ? 'on' : 'off'
            triggerRipple()
            emit('update:modelValue', state.checked)
        }
        const changeEventHandle = () => { }
        const triggerRipple = () => {
            if (rippleRef.value) {
                rippleRef.value.trigger()
            }
        }

        return () => (
            <div class={classes.value.container}>
                <input
                    type='checkbox'
                    class={classes.value.input}
                    aria-disabled={props.disabled}
                    disabled={props.disabled}
                    aria-checked={state.checked}
                    required={props.required}
                    aria-required={props.required}
                    indeterminate={state.indeterminate}
                    checked={state.checked}
                    value={props.modelValue}
                    onInput={inputEventHandle}
                    onChange={changeEventHandle}
                >
                </input>

                <div class={classes.value.rippleTarget}>
                    <Ripple ref={rippleRef} disabled={props.disabled}></Ripple>
                </div>

                <div class={classes.value.outline}></div>
                <div class={classes.value.background}></div>

                <svg class={classes.value.icon} viewBox="0 0 18 18" aria-hidden="true">
                    <rect class={classes.value.markShort} />
                    <rect class={classes.value.markLong} />
                </svg>
            </div>
        )
    },
})
