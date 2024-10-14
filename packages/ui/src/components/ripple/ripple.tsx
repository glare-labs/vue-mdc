import { defineComponent, type PropType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { AttachableController } from '../../internals/controller/attachable-controller'
import { isServer } from '../../utils/is-server'
import { RippleReactiveState } from './ripple-reactive-state'
import css from './styles/ripple.module.scss'

class RippleComponent {
    private readonly name = `${componentNamePrefix}-ripple`

    private readonly props = {
        disabled: {
            default: false,
            type: Boolean as PropType<boolean>
        },
        for: {
            default: null,
            type: String as PropType<string>
        }
    }
    private readonly emits = []

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        emits: this.emits,
        mounted() {
            if (isServer()) {
                return
            }

            this.rippleReactiveState = new RippleReactiveState(this.$el)
            this.attachableController = new AttachableController(this.$el, this.rippleReactiveState!.onControlChange)

            if (this.for !== null) {
                (this.$el as HTMLElement).setAttribute('for', this.for)
            }

            this.attachableController.hostConnected()
        },
        updated() {
            if (this.for !== null) {
                (this.$el as HTMLElement).setAttribute('for', this.for)
            }
        },
        beforeUnmount() {
            this.attachableController?.hostDisconnected()
        },
        data: () => ({
            attachableController: null as null | AttachableController,
            rippleReactiveState: null as null | RippleReactiveState,
        }),
        render() {
            return (
                <span
                    data-component="ripple"
                    aria-hidden="true"
                    class={[css.ripple]}
                ></span>
            )
        }
    })
}

export const Ripple = new RippleComponent().component
