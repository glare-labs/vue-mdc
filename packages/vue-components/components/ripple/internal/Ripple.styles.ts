import { makeVar, tokens } from '../../../utils/tokens'
import { rippleTokens, rippleTokensExtern } from './Ripple.tokens'

export const sharedRippleStyles = `
    :host,
    .surface {
        display: flex;
        margin: 0;
        z-index: 1;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        border-radius: inherit;
        position: absolute;
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
    }
    .surface::before {
        content: "";
        opacity: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        ${[rippleTokens['hover-opacity']]}: 0.08;
        ${[rippleTokens['hover-color']]}: ${tokens.color.surface.inverseSurface};
        transition: opacity 15ms linear, background-color 15ms linear;
    }
    .surface::after {
        content: "";
        opacity: 0;
        position: absolute;
        ${[rippleTokens['press-color']]}: ${tokens.color.surface.onSurface};
        ${[rippleTokens['press-opacity']]}: 0.12;
        background: radial-gradient(closest-side, ${makeVar(rippleTokensExtern['press-color'], rippleTokens['press-color'])} max(calc(100% - 70px), 65%), transparent 100%);
        transform-origin: center center;
        transition: opacity 375ms linear;
    }
    .hovered::before {
        background-color: ${makeVar(rippleTokensExtern['hover-color'], rippleTokens['hover-color'])};
        opacity: ${makeVar(rippleTokensExtern['hover-opacity'], rippleTokens['hover-opacity'])};
    }
    .pressed::after {
        opacity: ${makeVar(rippleTokensExtern['press-opacity'], rippleTokens['press-opacity'])};
        transition-duration: 105ms;
    }
    .disabled {
        display: none;
        pointer-events: none;
    }
`
