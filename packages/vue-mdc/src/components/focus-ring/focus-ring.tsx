import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { isServer } from '../../utils'
import { FocusRingController } from './focus-ring-controller'
import css from './styles/focus-ring.module.scss'

export class FocusRingCompnent {

    private readonly name = `${componentNamePrefix}-focus-ring`
    private readonly props = {
        inward: {
            default: false,
            type: Boolean as PropType<boolean>,
        },
        shapeInherit: {
            default: true,
            type: Boolean as PropType<boolean>,
        },
        htmlFor: {
            default: null,
            type: String as PropType<string | null>,
        }
    }
    private readonly slots = {} as SlotsType<{}>
    private readonly emits = [
    ]

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        emits: this.emits,
        data: () => ({
            focusRingController: null as null | FocusRingController,
        }),
        mounted() {
            if (isServer()) {
                return
            }

            this.updateProps()

            this.focusRingController = new FocusRingController(this.$el)
            this.focusRingController.htmlFor = this.htmlFor
            this.focusRingController?.hostConnected()
        },
        updated() {
            this.updateProps()
            if (this.focusRingController) {
                this.focusRingController.htmlFor = this.htmlFor
            }
        },
        beforeUnmount() {
            this.focusRingController?.hostDisconnected()
        },
        methods: {
            updateProps() {
                (this.$el as HTMLElement).setAttribute('inward', `${this.inward}`);
                (this.$el as HTMLElement).setAttribute('shape-inherit', `${this.shapeInherit}`)

                if (this.htmlFor !== null) {
                    (this.$el as HTMLElement).setAttribute('for', `${this.htmlFor}`)
                }
            }
        },
        render() {
            return (
                <div class={css['focus-ring']} aria-hidden="true" data-component="focus-ring"></div>
            )
        }
    })
}

export const FocusRing = new FocusRingCompnent().component
