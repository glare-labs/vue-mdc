import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { defineComponent, ref, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { FocusRing } from '../focus-ring'
import { Ripple } from '../ripple/ripple'
import css from './styles/navigation-tab.module.scss'


export const NavigationTab = defineComponent({
    name: `${componentNamePrefix}-navigation-tab`,
    slots: {} as SlotsType<{
        default: void
        'active-icon': void
        'inactive-icon': void
    }>,
    emits: [
        'tab-click'
    ],
    props: {
        label: {
            type: String as PropType<string>,
            default: 'Unnamed Tab',
        },
        hideInactiveLabel: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
    },
    setup(props, { slots, emit }) {
        const root = ref<HTMLElement | null>(null)

        const _hideInactiveLabel = ref(props.hideInactiveLabel)
        const _label = ref(props.label)

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'hide-inactive-label', ref: _hideInactiveLabel, reflect: true, type: 'boolean' },
                { attribute: 'label', ref: _label, reflect: true, type: 'string' },
            ],
        })

        return () => (
            <button
                data-component="navigation-tab"
                navigation-tab
                class={[css['navigation-tab']]}
                role='tab'
                ref={root}
            >
                <Ripple></Ripple>
                <FocusRing inward shapeInherit={false}></FocusRing>

                <span aria-hidden="true" class={css["icon-content"]}>
                    <span class={css["active-indicator"]}></span>
                    <span class={css["icon"]}>
                        {slots['inactive-icon'] ? slots['inactive-icon']() : slots.default && slots.default()}
                    </span>
                    <span class={[css["icon"], css["icon--active"]]}>
                        {slots['active-icon'] ? slots['active-icon']() : slots.default && slots.default()}
                    </span>
                    {/* ${this.renderBadge()} */}
                </span>

                {(typeof _label.value.length !== 'undefined' || _label !== null) && (
                    <span class={css['label']}>
                        {_label.value}
                    </span>
                )}

            </button>
        )
    },
})
