import { makeComponentInnerTokens, makeVarWithDefault } from '../../utils/tokens'
import { rippleTokens } from './Ripple.tokens'

const innerTokens = makeComponentInnerTokens(rippleTokens)

export const styles = [`
.surface {

    ${innerTokens['hovered-color']}: var(--md-sys-color-on-surface);
    ${innerTokens['pressed-color']}: var(--md-sys-color-on-surface);

    display: flex;
    margin: auto;
    z-index: 1;
    position: absolute;
    inset: 0;
    height: inherit;
    width: inherit;
    border-radius: ${makeVarWithDefault([rippleTokens['layer-shape'], innerTokens['layer-shape']], 'inherit')};
    overflow: hidden;
    --webkit-tap-highlight-color: transparent;
}
.surface::before {
    content: "";
    position: absolute;
    inset: 0;
    height: inherit;
    width: inherit;
    transition: opacity 15ms linear, background-color 15ms linear;

    opacity: ${makeVarWithDefault([rippleTokens['hovered-opacity'], innerTokens['hovered-opacity']], 0)};
    background-color: ${makeVarWithDefault([rippleTokens['hovered-color'], innerTokens['hovered-color']], '1d1b20')};
}
.surface::after {
    content: "";
    position: absolute;
    transition: opacity  linear;
    transition-duration: var(--mamv-ripple-pressed-transition-duration, var(--mamv-ripple-pressed-transition-duration-inner, 375ms));
    transform-origin: center center;

    opacity: ${makeVarWithDefault([rippleTokens['pressed-opacity'], innerTokens['pressed-opacity']], 0)};
    background: radial-gradient(
        closest-side,
        ${makeVarWithDefault([rippleTokens['pressed-color'], innerTokens['pressed-color']], '1d1b20')},
        max(calc(100% - 70px), 65%), 
        transparent 100%
    );
}

.hovered {
    ${innerTokens['hovered-opacity']}: 0.08;
}
.pressed {
    ${innerTokens['pressed-opacity']}: 0.12;
    --mamv-ripple-pressed-transition-duration-inner: 105ms;
}

.disabled {
    ${innerTokens['pressed-opacity']}: 0;
    ${innerTokens['hovered-opacity']}: 0;
}`]
