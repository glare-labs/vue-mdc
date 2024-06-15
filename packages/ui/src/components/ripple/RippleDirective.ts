import { type Directive } from 'vue'
import css from './styles/ripple.module.scss'
import { RippleAttachableController } from './RippleAttachableController'
import { AttachableControllerSymbol, type AttachableControllerHost } from '../../utils/AttachableController'

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
        if (typeof color === 'string') {
            return true
        }
        else {
            return false
        }
    }
    private static readonly isRippleOpacityProperty = (opacity: number) => {
        if (typeof opacity !== 'number' && (opacity >= 0 && opacity <= 1)) {
            return true
        }
        return false
    }

    public static readonly rippleDirective: Directive<HTMLElement, void> = {
        beforeMount: (el) => {
            const rippleElement = this.createRippleElement()
            el.appendChild(rippleElement)
            new RippleAttachableController(rippleElement)
        },
        mounted: (el) => {
            var positionProperty = el.computedStyleMap().get('position')
            if (typeof positionProperty === 'undefined' || positionProperty.toString() !== 'relative') {
                console.warn(`The element to which v-ripple is added must be relative. If the position is not relative, the ripple effect will be invalid. Please add \`position: relative\` to the v-ripple element;`)
            }

            const queriedRippleElement = this.queryRippleElement(el)
            if (queriedRippleElement === null || typeof queriedRippleElement === 'undefined') {
                console.warn(`The DOM object with the target selector 'div.\${css.ripple}[data-standalone="true"]\} was not found. This is an internal bug, please report it.`)
                return
            }
            queriedRippleElement[AttachableControllerSymbol]?.hostConnected()
        },
        updated: (el) => {
            var positionProperty = el.computedStyleMap().get('position')
            if (typeof positionProperty === 'undefined' || positionProperty.toString() !== 'relative') {
                console.warn(`The element to which v-ripple is added must be relative. If the position is not relative, the ripple effect will be invalid. Please add \`position: relative\` to the v-ripple element;`)
            }

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
                queriedRippleElement[AttachableControllerSymbol]?.hostDisconnected()
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
                queriedRippleElement.style.setProperty(`--gu-ripple-${state}-color`, `${binding.value}`)
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
                queriedRippleElement.style.setProperty(`--gu-ripple-${state}-color`, `${binding.value}`)
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
                queriedRippleElement.style.setProperty(`--glare-ui-ripple-${state}-opacity`, `${binding.value}`)
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
                queriedRippleElement.style.setProperty(`--glare-ui-ripple-${state}-opacity`, `${binding.value}`)
            } else {
                console.warn(`The parameters of v-ripple-hover-opacity and v-ripple-pressed-opacity only accept numbers, ranging from 0 to 1.`)
            }
        }
    })

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
