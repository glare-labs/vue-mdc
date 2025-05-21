import { useReflectAttribute } from '@glare-labs/vue-reflect-attribute'
import { computed, defineComponent, Fragment, ref, type PropType, type SlotsType } from 'vue'
import type { TFormSubmitterType } from '../../internals'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { FocusRing } from '../focus-ring'
import { Ripple } from '../ripple'
import { ESplitButtonAppearance, type TSplitButtonAppearance } from './interface'
import css from './styles/split-button.module.scss'

export const SplitButton = defineComponent({
    name: `${componentNamePrefix}-split-button`,
    slots: {} as SlotsType<{
        default?: void
        'leading-icon'?: void
        'trailing-icon'?: void
    }>,
    emits: [],
    props: {
        appearance: {
            type: String as PropType<TSplitButtonAppearance>,
            default: ESplitButtonAppearance.Filled,
        },
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        type: {
            type: String as PropType<TFormSubmitterType>,
            default: 'submit',
        },
        href: {
            type: String as PropType<string>,
            default: null,
        },
    },
    setup(props, { slots }) {
        const root = ref<HTMLElement | null>(null)

        /**
         * Props
         */
        const _appearance = ref(props.appearance)
        const _disabled = ref(props.disabled)
        const _type = ref(props.type)
        const _href = ref(props.href)

        useReflectAttribute(root, {
            attributes: [
                { attribute: 'appearance', ref: _appearance, reflect: true, type: 'string', },
                { attribute: 'disabled', ref: _disabled, reflect: true, type: 'boolean', },
                { attribute: 'type', ref: _type, reflect: true, type: 'string', },
                { attribute: 'href', ref: _href, reflect: true, type: 'string', },
            ],
        })

        /**
         * Computed
         */
        const isLink = computed(() => _href.value !== null)
        const needOutline = computed(() => _appearance.value === ESplitButtonAppearance.Outlined)

        return () => {
            const iconState = slots['leading-icon'] ? css.left : slots['trailing-icon'] ? css.right : null

            const RenderContent = () => (
                <Fragment>
                    <span class={css.button}>
                        <span class={css.touch}></span>
                        {slots['leading-icon'] && slots['leading-icon']()}
                        <span class={[css.label]}>
                            {slots.default && slots.default()}
                        </span>
                        {slots['trailing-icon'] && slots['trailing-icon']()}
                    </span>

                    {needOutline.value && <div aria-hidden="true" class={[css.outline]}></div>}
                    <div aria-hidden="true" class={[css.background]}></div>

                    <Ripple></Ripple>
                    <FocusRing></FocusRing>
                </Fragment>
            )

            const wrapperClasses = [css[_appearance.value], iconState, _disabled.value && css.disabled]

            const RenderLink = () => (
                <a data-component="split-button" role='button' ref={root} class={wrapperClasses} tabindex={_disabled.value ? -1 : 0}>
                    <RenderContent></RenderContent>
                </a>
            )
            const RenderButton = () => (
                <button data-component="split-button" ref={root} class={wrapperClasses} tabindex={_disabled.value ? -1 : 0}>
                    <RenderContent></RenderContent>
                </button>
            )

            return isLink.value ? <RenderLink></RenderLink> : <RenderButton></RenderButton>
        }
    },
})
