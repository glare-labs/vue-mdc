import { vElevation, vRipple, vRippleHoverColor, vRippleHoverOpacity, vRipplePressedColor, vRipplePressedOpacity, vTypography } from '../index'
import type { App } from 'vue'

export class DirectiveRegister {
    public static readonly registerAll = ({
        install: (instance: App<any>) => {
            instance.directive('ripple', vRipple)
            instance.directive('ripple-hover-color', vRippleHoverColor)
            instance.directive('ripple-pressed-color', vRipplePressedColor)
            instance.directive('ripple-hover-opacity', vRippleHoverOpacity)
            instance.directive('ripple-pressed-opacity', vRipplePressedOpacity)
            instance.directive('elevation', vElevation)
            instance.directive('typography', vTypography)
        }
    }) as any
}

