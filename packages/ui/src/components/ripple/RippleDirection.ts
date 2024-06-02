import { Directive } from 'vue'
import css from './Ripple.module.css'
import { RippleAttachableController } from './RippleAttachableController'

class RippleDirective {

    public static readonly direction: Directive = {
        mounted(e: HTMLElement) {
            const div = document.createElement('div')
            div.setAttribute('aria-hidden', 'true')
            div.classList.add(css.surface)
            e.appendChild(div)

            const attachableController = new RippleAttachableController(div)
            attachableController.hostConnected()
        },
    }

}

export const vRipple = RippleDirective.direction
