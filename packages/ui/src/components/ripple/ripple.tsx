import { defineComponent, onBeforeUnmount, onMounted, onUpdated, ref, type PropType } from 'vue'
import { isServer } from '../../utils/is-server'
import { RippleAttachableController } from './ripple-attachable-controller'
import css from './styles/ripple.module.scss'

class RippleComponent {
    private readonly name = `GlareUi-Ripple`
    private readonly props = {
        disabled: {
            default: false,
            type: Boolean as PropType<boolean>
        }
    }

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        setup: (props) => {
            const root = ref<null | HTMLElement>(null)
            const controller = ref<null | RippleAttachableController>(null)
            onMounted(() => {
                if(isServer()) {
                    return
                }

                if(root.value === null || typeof root.value === 'undefined') {
                    console.warn(`Ripple component init faild`)
                    return
                }

                if(controller.value === null) {
                    controller.value = new RippleAttachableController(root.value)
                }

                if(controller.value !== null) {
                    controller.value.hostConnected()
                    controller.value.disabled = props.disabled
                }
            })
            onUpdated(() => {
                if(controller.value !== null) {
                    controller.value.disabled = props.disabled
                }
            })
            onBeforeUnmount(() => {
                controller.value?.hostDisconnected()
            })


            return () => (
                <span
                    data-component="ripple"
                    aria-hidden="true"
                    class={[css.ripple]}
                    ref={root}
                ></span>
            )
        }
    })
}

export const Ripple = new RippleComponent().component
