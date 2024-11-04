import { defineComponent, type PropType, type SlotsType } from 'vue'
import { componentNamePrefix } from '../../internals/component-name-prefix/component-name-prefix'
import { EMotionEasing } from '../../utils'
import { EFieldAppearance, type TFieldAppearance } from './field-appearance'
import css from './styles/field.module.scss'

class FieldComponent {
    private readonly name = `${componentNamePrefix}-field`
    private readonly props = {
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        error: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        focused: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        label: {
            type: String as PropType<string>,
            default: '',
        },
        noAsterisk: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        populated: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        required: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        resizable: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        supportingText: {
            type: String as PropType<string>,
            default: '',
        },
        errorText: {
            type: String as PropType<string>,
            default: '',
        },
        count: {
            type: Number as PropType<number>,
            default: -1,
        },
        max: {
            type: Number as PropType<number>,
            default: -1,
        },
        hasStart: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        hasEnd: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
        appearance: {
            type: String as PropType<TFieldAppearance>,
            default: EFieldAppearance.Filled,
        }
    }
    private readonly slots = {} as SlotsType<{
        container?: void
        start?: void
        end?: void
        default?: void

    }>
    private readonly emits = []

    public readonly component = defineComponent({
        name: this.name,
        props: this.props,
        slots: this.slots,
        emits: this.emits,
        updated() {
            this.animateLabelIfNeeded(
                this.focused,
                this.populated,
            )
        },
        data: () => ({
            labelAnimation: null as null | Animation,
            isAnimating: false,
            refreshErrorAlert: false,
            disableTransitions: false,
        }),
        methods: {
            getFloatingLabelElement() {
                return (this.$el as HTMLElement).querySelector(`.${css.floating}`) as HTMLElement
            },
            getRestingLabelElement() {
                return (this.$el as HTMLElement).querySelector(`.${css.resting}`) as HTMLElement
            },
            getContainerElement() {
                return (this.$el as HTMLElement).querySelector(`.${css.container}`) as HTMLElement
            },
            supportingTextOrErrorText() {
                return this.error && this.errorText ? this.errorText : this.supportingText
            },
            counterText() {
                const countNumber = this.count ?? -1
                const maxNumber = this.max ?? -1

                if (countNumber < 0 || maxNumber <= 0) {
                    return ''
                }

                return `${countNumber} / ${maxNumber}`
            },
            renderSupportingText() {
                const text = this.supportingTextOrErrorText()
                if (!text && !this.counterText()) {
                    return (<></>)
                }

                const start = (
                    <span>{text}</span>
                )
                const end = this.counterText() ? <span class={css.counter}>{this.counterText()}</span> : <></>

                const shouldErrorAnnounce = this.error && this.errorText && !this.refreshErrorAlert
                const role = shouldErrorAnnounce ? 'alert' : ''

                return (
                    <div class={css['supporting-text']} role={role}>
                        {start}
                        {end}
                    </div>
                )
            },
            renderLabel(isFloating: boolean) {
                const classes = [
                    isFloating ? (this.focused || this.populated || this.isAnimating) : (!this.focused && !this.populated && !this.isAnimating) && css.hidden,
                    isFloating && css.floating,
                    !isFloating && css.resting,
                    css.label,
                ]
                const labelText = `${this.label}${this.required && !this.noAsterisk ? '*' : ''}`
                return (
                    <span class={classes}>
                        {labelText}
                    </span>
                )
            },
            renderOutline(floatingLabel: unknown) {
                return (
                    <div class={css.outline}>
                        <div class={css['outline-start']}></div>
                        <div class={css['outline-notch']}>
                            <div class={css['outline-panel-inactive']}></div>
                            <div class={css['outline-panel-active']}></div>
                            <div class={css['outline-label']}>{floatingLabel}</div>
                        </div>
                        <div class={css['outline-end']}></div>
                    </div>
                )
            },
            renderBackground() {
                return <div class={css.background}></div>
            },
            renderStateLayer() {
                return <div class={css['state-layer']}></div>
            },
            renderIndicator() {
                return <div class={css['active-indicator']}></div>
            },
            animateLabelIfNeeded(wasFocused: boolean, wasPopulated: boolean) {
                if (!this.label) {
                    return
                }

                wasFocused ??= this.focused
                wasPopulated ??= this.populated

                const wasFloating = wasFocused || wasPopulated
                const shouldBeFloating = this.focused || this.populated

                if (wasFloating === shouldBeFloating) {
                    return
                }

                this.isAnimating = true
                this.labelAnimation?.cancel()

                this.labelAnimation = this.getFloatingLabelElement()?.animate(
                    this.getLabelKeyframes(),
                    {
                        duration: 150,
                        easing: EMotionEasing.Standard,
                    }
                )
                this.labelAnimation?.addEventListener('finish', () => {
                    this.isAnimating = false
                })
            },
            getLabelKeyframes() {
                if (!this.getFloatingLabelElement() || !this.getRestingLabelElement()) {
                    return []
                }

                const {
                    x: floatingX,
                    y: floatingY,
                    height: floatingHeight,
                } = this.getFloatingLabelElement().getBoundingClientRect()
                const {
                    x: restingX,
                    y: restingY,
                    height: restingHeight,
                } = this.getRestingLabelElement().getBoundingClientRect()
                const floatingScrollWidth = this.getFloatingLabelElement().scrollWidth
                const restingScrollWidth = this.getRestingLabelElement().scrollWidth
                // Scale by width ratio instead of font size since letter-spacing will scale
                // incorrectly. Using the width we can better approximate the adjusted
                // scale and compensate for tracking and overflow.
                // (use scrollWidth instead of width to account for clipped labels)
                const scale = restingScrollWidth / floatingScrollWidth
                const xDelta = restingX - floatingX
                // The line-height of the resting and floating label are different. When
                // we move the floating label down to the resting label's position, it won't
                // exactly match because of this. We need to adjust by half of what the
                // final scaled floating label's height will be.
                const yDelta =
                    restingY -
                    floatingY +
                    Math.round((restingHeight - floatingHeight * scale) / 2)

                // Create the two transforms: floating to resting (using the calculations
                // above), and resting to floating (re-setting the transform to initial
                // values).
                const restTransform = `translateX(${xDelta}px) translateY(${yDelta}px) scale(${scale})`
                const floatTransform = `translateX(0) translateY(0) scale(1)`

                // Constrain the floating labels width to a scaled percentage of the
                // resting label's width. This will prevent long clipped labels from
                // overflowing the container.
                const restingClientWidth = this.getRestingLabelElement().clientWidth
                const isRestingClipped = restingScrollWidth > restingClientWidth
                const width = isRestingClipped ? `${restingClientWidth / scale}px` : ''
                if (this.focused || this.populated) {
                    return [
                        { transform: restTransform, width },
                        { transform: floatTransform, width },
                    ]
                }

                return [
                    { transform: floatTransform, width },
                    { transform: restTransform, width },
                ]
            },
        },
        render() {
            const floatingLabel = this.renderLabel(true)
            const restingLabel = this.renderLabel(false)

            const isOutlined = this.appearance === EFieldAppearance.Outlined

            const classes = [
                this.disabled && css['disabled'],
                this.disableTransitions && css['disable-transitions'],
                (this.error && !this.disabled) && css['error'],
                this.focused && css['focused'],
                this.hasStart && css['with-start'],
                this.hasEnd && css['with-end'],
                this.populated && css['populated'],
                this.resizable && css['resizable'],
                this.required && css['required'],
                !this.label && css['no-label'],
                this.appearance === EFieldAppearance.Filled && css['filled-field'],
                this.appearance === EFieldAppearance.Outlined && css['outlined-field'],
                css.field
            ]

            return (
                <div class={classes}>
                    <div class={css['container-overflow']}>

                        {this.$slots.container && (<span class={css['container-slot']}>{this.$slots.container()}</span>)}

                        {!isOutlined && this.renderBackground()}
                        {!isOutlined && this.renderStateLayer()}
                        {!isOutlined && this.renderIndicator()}

                        {isOutlined && this.renderOutline(floatingLabel)}

                        <div class={css.container}>
                            <div class={css.start}>
                                {this.$slots.start && this.$slots.start()}
                            </div>
                            <div class={css.middle}>
                                <div class={css['label-wrapper']}>
                                    {restingLabel}
                                    {!isOutlined && floatingLabel}
                                </div>
                                <div class={css.content}>
                                    {this.$slots.default && this.$slots.default()}
                                </div>
                            </div>
                            <div class={css.end}>
                                {this.$slots.end && this.$slots.end()}
                            </div>
                        </div>
                    </div>

                    {this.renderSupportingText()}
                </div>
            )
        }
    })
}

export const Field = new FieldComponent().component
