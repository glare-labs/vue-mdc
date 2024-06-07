import { type PropType, type Ref, defineComponent, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import css from './Ripple.module.css'
import { RippleAttachableController } from './RippleAttachableController'
import { AttachableControllerSymbol, type AttachableControllerHost } from '../../utils/AttachableController'
import { GlareProviderContext, type TGlareProviderContext } from '../glare-provider/Context'


class RippleComponent {
    protected name = `GlareUi-Ripple`
    protected props = {
        disabled: {
            default: false,
            type: Boolean as PropType<boolean>,
        },
    }

    public component = defineComponent({
        name: this.name,
        props: this.props,
        setup: (props) => {
            const root = ref<null | HTMLElement>(null)
    
            /**
             * Reading glare-provider to enable ripple
             */
            const providerContext = inject<TGlareProviderContext>(GlareProviderContext)
            
            onMounted(() => {
                if(root.value === null || typeof root.value === 'undefined') {
                    console.warn(`Ripple component init faild`)
                    return
                }
    
                if(!(providerContext?.disableRipple || props.disabled)) {
                    new RippleAttachableController(root.value);   
                    (root.value as AttachableControllerHost)[AttachableControllerSymbol]?.hostConnected()
                }
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

export const Ripple = new RippleComponent().component
