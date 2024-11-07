import { defineComponent, type PropType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { isServer } from '../../utils/is-server'
import { RippleAttachableController } from './ripple-attachable-controller'
import css from './styles/ripple.module.scss'

class RippleComponent {
    private readonly name = `${componentNamePrefix}-ripple`

    private readonly props = {
        htmlFor: {
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

            this.rippleAttachableController = new RippleAttachableController(this.$el)

            if (this.htmlFor !== null) {
                (this.$el as HTMLElement).setAttribute('for', this.htmlFor)
            }

            this.rippleAttachableController.hostConnected()
        },
        updated() {
            if (this.htmlFor !== null) {
                (this.$el as HTMLElement).setAttribute('for', this.htmlFor)
            }
        },
        beforeUnmount() {
            this.rippleAttachableController?.hostDisconnected()
        },
        data: () => ({
            rippleAttachableController: null as null | RippleAttachableController,
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
