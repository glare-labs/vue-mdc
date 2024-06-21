import { defineComponent } from 'vue'
import css from './styles/progress.module.scss'

export const CircularProgress = defineComponent({
    name: 'GlareUi-CircularProgress',
    props: {
        max: {
            type: Number,
            default: 1,
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
        value: {
            type: Number,
            default: 0.25,
        },
    },
    render() {
        return (
            <div
                data-component="circular-progress"
                class={[css['circular-progress'], this.indeterminate && css.indeterminate]}
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax={this.max}
                aria-valuenow={this.indeterminate ? 0 : this.value}
            >

                {
                    this.indeterminate ?
                        <div class={css.spinner}>
                            <div class={css.left}>
                                <div class={css.circle}></div>
                            </div>
                            <div class={css.right}>
                                <div class={css.circle}></div>
                            </div>
                        </div> :

                        <svg viewBox="0 0 4800 4800">
                            <circle
                                class={css.track}
                                pathLength="100"
                            ></circle>
                            <circle
                                class={css['active-track']}
                                path-length="100"
                                stroke-dashoffset={(1 - this.value / this.max) * 100}
                            ></circle >
                        </svg >
                }

            </div >
        )
    }
})
