import { defineComponent } from 'vue'
import { Ripple } from '../../../../../vue-mdc/src/components/ripple/ripple'
import css from '../styles/chip.module.css'

export interface IComponentChipActiviteCustomEvent {
    label: string
}
export interface IComponentChipChangeCustomEvent {
    label: string
    selected: boolean
}

export const SComponentChipController = Symbol('component-chip')
interface IComponentChip {
    setSelected: (value: boolean) => void
}
export interface IComponentChipHost extends HTMLElement {
    [SComponentChipController]: IComponentChip
}

export const ComponentChip = defineComponent({
    name: 'ComponentChip',
    props: {
        label: {
            type: String,
            required: true,
        },
        defaultSelected: Boolean,
    },
    emits: [
        'chip-activite',
        'chip-change',
    ],
    methods: {
        handleClick(e: Event) {
            e.preventDefault()
            e.stopPropagation()

            this.setSelected(!this.selected)
        },
        setSelected(value: boolean) {
            if (this.selected === value) {
                return
            }

            const changeEvent = new CustomEvent<IComponentChipChangeCustomEvent>('chip-change', {
                bubbles: true,
                cancelable: true,
                composed: true,
                detail: {
                    label: this.label,
                    selected: this.selected
                }
            })
            this.$emit('chip-change', changeEvent)
            const preventChange = !(this.$el as HTMLElement).dispatchEvent(changeEvent)
            if (preventChange) {
                return
            }

            if (value) {
                const event = new CustomEvent<IComponentChipActiviteCustomEvent>('chip-activite', {
                    bubbles: true,
                    cancelable: true,
                    composed: true,
                    detail: {
                        label: this.label
                    }
                })
                this.$emit('chip-activite', event)
                const preventSelected = !(this.$el as HTMLElement).dispatchEvent(event)
                if (preventSelected) {
                    return
                }
            }

            this.selected = value
        }
    },
    data: (context) => ({
        selected: context.defaultSelected
    }),
    mounted() {
        (this.$el as HTMLElement).addEventListener('click', this.handleClick)
        if (this.selected) {
            (this.$el as HTMLElement).setAttribute('selected', `${this.selected}`)
        }

        (this.$el as IComponentChipHost)[SComponentChipController] = {
            setSelected: (value: boolean) => {
                this.selected = value
            }
        }
    },
    updated() {
        (this.$el as HTMLElement).setAttribute('selected', `${this.selected}`)
    },
    beforeUnmount() {
        (this.$el as HTMLElement).removeEventListener('click', this.handleClick)
    },
    render() {
        const classes = [
            css.chip,
            this.selected && css.selected
        ]
        return (
            <div class={classes}>
                <span>{this.label}</span>
                <Ripple></Ripple>
            </div>
        )
    }
})
