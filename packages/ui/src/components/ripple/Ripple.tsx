import { PropType, Ref, defineComponent, onMounted, ref } from 'vue'
import css from './Ripple.module.css'
import { RippleAttachableController } from './RippleAttachableController'


class RippleComponent {
    private static readonly name = `GlareUi-Ripple`
    private static readonly props = {
        disabled: {
            default: false,
            type: Boolean as PropType<boolean>,
        },
    }
    private static readonly setup = () => {
        const root = ref<null | HTMLElement>(null)
        let rippleAttachableController: Ref<null | RippleAttachableController> = ref(null)

        onMounted(() => {
            if(root.value === null || typeof root.value === 'undefined') {
                console.warn(`Ripple component init faild`)
                return
            }
            rippleAttachableController.value = new RippleAttachableController(root.value)
        })


        return () => (
            <span
                aria-hidden="true"
                class={[css.surface]}
                ref={root}
            ></span>
        )
    }

    public static readonly component = defineComponent({
        name: this.name,
        props: this.props,
        setup: this.setup
    })
}

export const Ripple = RippleComponent.component
