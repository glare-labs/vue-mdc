import { type Directive } from 'vue'
import { SAttachableController, type AttachableControllerHost } from '../../utils/attachable-controller'
import { RippleAttachableController } from './ripple-attachable-controller'
import css from './styles/ripple.module.scss'

class RippleDirective {

    private static readonly createRippleElement = () => {
        const rippleElement = document.createElement('div')
        rippleElement.setAttribute('aria-hidden', 'true')
        rippleElement.setAttribute('data-standalone', 'true')
        rippleElement.classList.add(css.ripple)
        return rippleElement
    }
    private static readonly queryRippleElement = (el: HTMLElement) => {
        return el.querySelector<AttachableControllerHost>(`div.${css.ripple}[data-standalone="true"]`)
    }
    private static readonly isRippleColorProperty = (color: string) => {
        return typeof color === 'string'
    }
    private static readonly isRippleOpacityProperty = (opacity: number) => {
        return typeof opacity === 'number' && (opacity >= 0 && opacity <= 1)
    }

    public static readonly rippleDirective: Directive<HTMLElement, void> = {
        beforeMount: (el) => {
            const rippleElement = this.createRippleElement()
            el.appendChild(rippleElement)
            new RippleAttachableController(rippleElement)
        },
        mounted: (el) => {
            const queriedRippleElement = this.queryRippleElement(el)
            if (queriedRippleElement === null || typeof queriedRippleElement === 'undefined') {
                console.warn(`The DOM object with the target selector 'div.\${css.ripple}[data-standalone="true"]\} was not found. This is an internal bug, please report it.`)
                return
            }
            queriedRippleElement[SAttachableController]?.hostConnected()
        },
        updated: (el) => {
            const queriedRippleElement = this.queryRippleElement(el)
            if (queriedRippleElement === null || typeof queriedRippleElement === 'undefined') {
                console.warn(`The DOM object with the target selector 'div.\${css.ripple}[data-standalone="true"]\} was not found. This is an internal bug, please report it.`)
                return
            }
        },
        beforeUnmount: (el) => {
            const queriedRippleElement = this.queryRippleElement(el)
            if (queriedRippleElement === null || typeof queriedRippleElement === 'undefined') {
                console.warn(`The DOM object with the target selector \`div.${css.ripple}[data-standalone="true"]\` was not found. This is an internal bug, please report it.`)
            } else {
                queriedRippleElement[SAttachableController]?.hostDisconnected()
            }
        }
    }

    private static readonly colorProgress: (state: 'hover' | 'pressed') => Directive<HTMLElement, string> = (state) => ({
        mounted: (el, binding) => {
            const queriedRippleElement = this.queryRippleElement(el)
            if (queriedRippleElement === null || typeof queriedRippleElement === 'undefined') {
                console.warn(`The DOM object with the target selector 'div.\${css.ripple}[data-standalone="true"]\} was not found. This is an internal bug, please report it.`)
                return
            }

            const isColorProperty = this.isRippleColorProperty(binding.value)
            if (isColorProperty) {
                queriedRippleElement.style.setProperty(`--md-ripple-${state}-color`, `${binding.value}`)
            } else {
                console.warn(`The parameters of v-ripple-hover-color and v-ripple-pressed-color only accept strings and must be valid CSS color values.`)
            }
        },
        updated: (el, binding) => {
            const queriedRippleElement = this.queryRippleElement(el)
            if (queriedRippleElement === null || typeof queriedRippleElement === 'undefined') {
                console.warn(`The DOM object with the target selector 'div.\${css.ripple}[data-standalone="true"]\} was not found. This is an internal bug, please report it.`)
                return
            }

            const isColorProperty = this.isRippleColorProperty(binding.value)
            if (isColorProperty) {
                queriedRippleElement.style.setProperty(`--md-ripple-${state}-color`, `${binding.value}`)
            } else {
                console.warn(`The parameters of v-ripple-hover-color and v-ripple-pressed-color only accept strings and must be valid CSS color values.`)
            }
        }
    })
    public static readonly hoverColorDirective: Directive<HTMLElement, string> = this.colorProgress('hover')
    public static readonly pressedColorDirective: Directive<HTMLElement, string> = this.colorProgress('pressed')

    private static readonly opacityProgress: (state: 'hover' | 'pressed') => Directive<HTMLElement, number> = (state) => ({
        mounted: (el, binding) => {
            const queriedRippleElement = this.queryRippleElement(el)
            if (queriedRippleElement === null || typeof queriedRippleElement === 'undefined') {
                console.warn(`The DOM object with the target selector 'div.\${css.ripple}[data-standalone="true"]\} was not found. This is an internal bug, please report it.`)
                return
            }

            const isOpacityProperty = this.isRippleOpacityProperty(binding.value)
            if (isOpacityProperty) {
                queriedRippleElement.style.setProperty(`--md-ripple-${state}-opacity`, `${binding.value}`)
            } else {
                console.warn(`The parameters of v-ripple-hover-opacity and v-ripple-pressed-opacity only accept numbers, ranging from 0 to 1.`)
            }
        },
        updated: (el, binding) => {
            const queriedRippleElement = this.queryRippleElement(el)
            if (queriedRippleElement === null || typeof queriedRippleElement === 'undefined') {
                console.warn(`The DOM object with the target selector 'div.\${css.ripple}[data-standalone="true"]\} was not found. This is an internal bug, please report it.`)
                return
            }

            const isOpacityProperty = this.isRippleOpacityProperty(binding.value)
            if (isOpacityProperty) {
                queriedRippleElement.style.setProperty(`--md-ripple-${state}-opacity`, `${binding.value}`)
            } else {
                console.warn(`The parameters of v-ripple-hover-opacity and v-ripple-pressed-opacity only accept numbers, ranging from 0 to 1.`)
            }
        }
    })

    public static readonly hoverOpacityDirective: Directive<HTMLElement, number> = this.opacityProgress('hover')
    public static readonly pressedOpacityDirective: Directive<HTMLElement, number> = this.opacityProgress('pressed')

}

/**
 * Create a ripple DOM to it
 * @example
 * ```html
 * <div v-ripple class="w-32 h-32 border relative">
 * </div>
 * ```
 */
export const vRipple = RippleDirective.rippleDirective
export const vRippleHoverColor = RippleDirective.hoverColorDirective
export const vRipplePressedColor = RippleDirective.pressedColorDirective
export const vRippleHoverOpacity = RippleDirective.hoverOpacityDirective
export const vRipplePressedOpacity = RippleDirective.pressedOpacityDirective
