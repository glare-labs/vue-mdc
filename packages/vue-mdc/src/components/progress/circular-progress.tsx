import { defineComponent } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import css from './styles/progress.module.scss'

class CircularProgressComponent {
    private readonly name = `${componentNamePrefix}-circular-progress`
    private readonly props = {
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
    }

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
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
                                    pathLength="100"
                                    stroke-dashoffset={(1 - this.value / this.max) * 100}
                                ></circle >
                            </svg >
                    }

                </div >
            )
        }
    })

}

export const CircularProgress = new CircularProgressComponent().component
