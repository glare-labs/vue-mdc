import { type PropType, type Ref, defineComponent, onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'
import css from './Ripple.module.css'
import { RippleAttachableController } from './RippleAttachableController'
import { AttachableControllerSymbol, type AttachableControllerHost } from '../../utils/AttachableController'


class RippleComponent {
    private static readonly name = `GlareUi-Ripple`
    private static readonly props = {
        disabled: {
            default: false,
            type: Boolean as PropType<boolean>,
        },
    }

    public static readonly component = defineComponent({
        name: this.name,
        props: this.props,
        setup: (_) => {
            const root = ref<null | HTMLElement>(null)
    
            onMounted(() => {
                if(root.value === null || typeof root.value === 'undefined') {
                    console.warn(`Ripple component init faild`)
                    return
                }
    
                new RippleAttachableController(root.value);
    
                (root.value as AttachableControllerHost)[AttachableControllerSymbol]?.hostConnected()
            })
            onBeforeUnmount(() => {
                (root.value as AttachableControllerHost)[AttachableControllerSymbol]?.hostDisconnected()
            })
    
    
            return () => (
                <span
                    aria-hidden="true"
                    class={[css.surface]}
                    ref={root}
                ></span>
            )
        }
    })
}

export const Ripple = RippleComponent.component
