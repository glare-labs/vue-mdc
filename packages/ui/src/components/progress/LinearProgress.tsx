import { defineComponent, type PropType } from 'vue'
import css from './LinearProgress.module.css'

export const LinearProgress = defineComponent({
    name: 'GlareUi-LinearProgress',
    props: {
        buffer: {
            type: Number,
            default: 1,
        },
        max: {
            type: Number,
            default: 1,
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
        value: {
            type: Number as PropType<number>,
            default: 0,
            validator(value: number, { max }: { max: number }) {
                return (value >= 0) && (value <= max)
            },
        },
    },
    computed: {
        progressStyles() {
            return {
                transform: `scaleX(${(this.indeterminate ? 1 : this.value / this.max) * 100}%)`
            }
        },
        dotStyles() {
            return {
                transform: `scaleX(${(this.indeterminate ? 1 : this.buffer / this.max) * 100}%)`
            }
        },
        shouldHideDots() {
            return (this.indeterminate) || (this.buffer >= this.max) || (this.value >= this.max)
        },
    },
    render() {
        return (
            <div
                class={[css.surface, css.vars, this.indeterminate && css.indeterminate]}
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax={this.max}
                aria-valuenow={this.indeterminate ? 0 : this.value}
            >
                <div
                    style={{ display: this.shouldHideDots ? 'block' : 'none' }}
                    class={css.dots}
                ></div>
                <div class={css.background} style={this.dotStyles}></div>
                <div class={[css.bar, css['primary-bar']]} style={this.progressStyles}>
                    <div class={css['bar-inner']}></div>
                </div>
                <div class={[css.bar, css['secondary-bar']]}>
                    <div class={css['bar-inner']}></div>
                </div>
            </div>
        )
    }
})
