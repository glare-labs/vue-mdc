import { Directive } from 'vue'
import css from './Elevation.module.css'

class ElevationDirective {

    public static readonly directive: Directive = {
        mounted(el: HTMLElement, binding) {
            const div = document.createElement('span')
            div.setAttribute('data-standalone', 'true')
            div.setAttribute('aria-hidden', 'true')
            div.classList.add(css.elevation)
            el.appendChild(div)
            if (typeof binding.value === 'undefined') {
                console.warn(`It is recommended to specify a parameter for v-elevation, and the recommended parameters range from 0 to 5. If you do not specify a parameter, the default value is 3.`)
                div.style.setProperty('--glare-ui-elevation-level', `1`)
            }
            else if (binding.value >= 0 && binding.value <= 5) {
                div.classList.add(css[`level-${binding.value}`])
            } else {
                console.warn(`It is recommended to set the value of the level setting of the component of Elevation to 0 to 5.`)
                div.style.setProperty('--glare-ui-elevation-level', binding.value || 1)
            }
        },
        updated(el: HTMLElement, binding) {
            let targetFound = el.querySelector(`.${css.elevation}[data-standalone="true"]`) as HTMLElement

            if (!targetFound) {
                targetFound = document.createElement('span')
                targetFound.setAttribute('aria-hidden', 'true')
            }

            targetFound.className = `${css.elevation}`
            targetFound.style.removeProperty('--glare-ui-elevation-level')

            if (typeof binding.value === 'undefined') {
                console.warn(`It is recommended to specify a parameter for v-elevation, and the recommended parameters range from 0 to 5. If you do not specify a parameter, the default value is 3`)
                targetFound.style.setProperty('--glare-ui-elevation-level', `1`)
            }
            else if (binding.value >= 0 && binding.value <= 5) {
                targetFound.classList.add(css[`level-${binding.value}`])
            } else {
                console.warn(`It is recommended to set the value of the level setting of the component of Elevation to 0 to 5.`)
                targetFound.style.setProperty('--glare-ui-elevation-level', binding.value || 1)
            }
        }
    }
}

/**
 * @example
 * ```html
 * <div v-elevation="3">
 *  Elevation Box
 * </div>
 * 
 * v-elevation = 0 | 1 | 2 | 3 | 4 | 5
 * ```
 */
export const vElevation = ElevationDirective.directive
