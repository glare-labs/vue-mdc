import { defineComponent, onMounted, ref, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import css from './styles/bottom-app-bar.module.scss'

export const BottomAppBar = defineComponent({
    name: `${componentNamePrefix}-bottom-app-bar`,
    emits: [],
    slots: {} as SlotsType<{
        ['leading-icons']?: void
        default?: void
    }>,
    setup(props, { slots }) {
        const root = ref<HTMLElement | null>(null)
        const dialog = ref<HTMLDialogElement | null>(null)

        onMounted(() => {
            dialog.value?.show()
        })

        return () => {

            return (
                <span class={css['bottom-app-bar']} ref={root}>
                    <dialog class={css.dialog} ref={dialog}>
                        <div class={css.content}>
                            <span class={css['leading-icons']}>
                                {slots['leading-icons'] && slots['leading-icons']()}
                            </span>

                            <span class={css.fab}>
                                {slots.default && slots.default()}
                            </span>
                        </div>

                        <span aria-hidden class={css.background}></span>
                    </dialog>
                </span>
            )
        }
    },
})
