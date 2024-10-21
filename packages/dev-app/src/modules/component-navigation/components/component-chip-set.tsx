import { defineComponent, type SlotsType } from 'vue'
import css from '../styles/chip.module.css'
import { type IComponentChipActiviteCustomEvent, type IComponentChipHost, SComponentChipController } from './component-chip'

export interface IComponentChipSetChangeCustomEvent {
    label: string
}

export const ComponentChipSet = defineComponent({
    slots: {} as SlotsType<{
        default?: void
    }>,
    emits: [
        'change'
    ],
    mounted() {
        (this.$el as HTMLElement).addEventListener('chip-change', this.handleChipChange)
    },
    beforeUnmount() {
        (this.$el as HTMLElement).removeEventListener('chip-change', this.handleChipChange)
    },
    methods: {
        handleChipChange(e: Event) {
            const event = e as CustomEvent<IComponentChipActiviteCustomEvent>

            const changeEvent = new CustomEvent<IComponentChipSetChangeCustomEvent>('change', {
                bubbles: true,
                cancelable: true,
                composed: false,
                detail: {
                    label: event.detail.label
                }
            })
            this.$emit('change', changeEvent)
            const preventChange = !(this.$el as HTMLElement).dispatchEvent(changeEvent)

            if (preventChange) {
                event.preventDefault()
                return
            }

            // reset selected prop
            this.resetChipSelectedProp();
            (event.target as HTMLElement).classList.add(css.selected)

        },
        resetChipSelectedProp() {
            const chipSet = (this.$el as HTMLElement)
            const chips = Array.from(chipSet.querySelectorAll(`.${css.chip}`)) as Array<IComponentChipHost>
            for (const chip of chips) {
                chip[SComponentChipController].setSelected(false)
            }
        }
    },
    render() {
        return (
            <div class={css['chip-set']}>
                {this.$slots.default && this.$slots.default()}
            </div>
        )
    }
})
