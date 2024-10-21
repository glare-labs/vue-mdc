import { defineComponent, type PropType } from 'vue'
import { ComponentChip } from './component-chip'
import { ComponentChipSet, type IComponentChipSetChangeCustomEvent } from './component-chip-set'

export type TComponentRouter = {
    url: string
    label: string
}
export type TComponentRouterArray = Array<TComponentRouter>

export interface IComponentNavigationNavigationRequestCustomEvent {
    url: string
}

export const ComponentNavigation = defineComponent({
    props: {
        componentRouterArray: {
            type: Object as PropType<TComponentRouterArray>,
            default: []
        }
    },
    emits: [
        'navigate-request'
    ],
    data: () => ({
        currentComponentRouter: null as null | TComponentRouter
    }),
    mounted() {
        (this.$el as HTMLElement).addEventListener('change', this.handleChipSetChange)
    },
    beforeUnmount() {
        (this.$el as HTMLElement).removeEventListener('change', this.handleChipSetChange)
    },
    methods: {
        handleChipSetChange(e: Event) {
            const event = e as CustomEvent<IComponentChipSetChangeCustomEvent>
            event.stopPropagation()

            const label = event.detail.label
            const url = this.componentRouterArray.find(e => e.label === label)?.url

            if (typeof url === 'undefined') {
                throw new Error(`Could not found component ${label}'s url`)
            }

            if (label === this.currentComponentRouter?.label) {
                event.preventDefault()
                return
            }

            const navigationRequestEvent = new CustomEvent<IComponentNavigationNavigationRequestCustomEvent>('navigation-request', {
                bubbles: false,
                cancelable: false,
                composed: false,
                detail: {
                    url: url
                }
            })

            this.$emit('navigate-request', navigationRequestEvent);
            (this.$el as HTMLElement).dispatchEvent(navigationRequestEvent)

            this.currentComponentRouter = {
                label: label,
                url: url
            }
        }
    },
    render() {
        const renderChips = this.componentRouterArray.length !== 0 && (
            <>
                {
                    this.componentRouterArray.map(chip => (
                        <ComponentChip label={chip.label}></ComponentChip>
                    ))
                }
            </>
        )

        return (
            <ComponentChipSet>
                {renderChips}
            </ComponentChipSet>
        )
    }
})
