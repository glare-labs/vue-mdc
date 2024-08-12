import { computed, defineComponent, onMounted, onUnmounted, onUpdated, ref, watch, type PropType, type RendererElement, type SlotsType, type VNodeRef } from 'vue'
import { Log } from '../../../utils/log/Log'
import css from './styles/scrim.module.scss'

class ScrimComponent {
    private name = `GlareUi-Scrim`
    private props = {
        absolute: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        to: {
            type: [Object, String] as PropType<string | RendererElement>,
            default: 'body',
        },
        contained: {
            type: Boolean as PropType<boolean>,
            default: true,
        },
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        defaultOpen: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        modelValue: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
    }
    private slots = {} as SlotsType<{

    }>
    private emits = {
        'update:modelValue': (value: boolean) => value,
        'scrim-opend': () => true,
        'scrim-closed': () => true,
    }

    private events = [
        'click',
        'mouseup'
    ]
    private handleEvent(event: Event) {
        switch(event.type) {
            default: break
        }
    }

    public component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        emits: this.emits,
        setup: (props, { emit }) => {
            const _isOpen = ref(props.defaultOpen)
            const isOpen = computed({
                get: () => _isOpen.value,
                set: (value: boolean) => {
                    _isOpen.value = value
                    emit('update:modelValue', value)
                }
            })
            watch(() => props.modelValue, (change: boolean) => {
                isOpen.value = change
            }, {
                immediate: true
            })

            const root = ref<HTMLElement | VNodeRef | null>(null)
            onMounted(() => {
                if(typeof root.value === 'undefined' || root.value === null) {
                    Log.warn(() => `Scrim can not find root element.`)
                    return 
                }

                this.events.map(event => (root.value as HTMLElement).addEventListener(event, this.handleEvent))
            })
            onUpdated(() => {
                /**
                 * Remove all events from scrim element.
                 */
                if(props.disabled) {
                    this.events.map(event => (root.value as HTMLElement).removeEventListener(event, this.handleEvent))
                }
            })
            onUnmounted(() => {
                if(typeof root.value === 'undefined' || root.value === null) {
                    Log.warn(() => `Scrim can not find root element.`)
                    return 
                }

                this.events.map(event => (root.value as HTMLElement).removeEventListener(event, this.handleEvent))
            })


            return {
                isOpen,
                root,
            }
        },
        render() {
            return (
                <span
                    data-component="scrim" 
                    aria-hidden='true' 
                    ref={element => this.root = element} 
                    class={[css.scrim, this.isOpen && css.active, this.absolute && css.absolute]}
                >
                </span>
            )
        }
    })
}

export const Scrim = new ScrimComponent().component
