import { makeComponentInnerTokens, makeVar, makeVarWithDefault } from '../../utils/tokens'
import { elevationTokens } from './Elevation.tokens'

const innerTokens = makeComponentInnerTokens(elevationTokens)

export const styles = [`
.surface {
    border-radius: inherit;
    inset: 0;
    position: absolute;
    transition-duration: inherit;
    transition-property: inherit;
    transition-timing-function: inherit;

    ${innerTokens.level}: ${makeVarWithDefault([elevationTokens.level], 0)};
    ${innerTokens['shadow-color']}: ${makeVarWithDefault([elevationTokens['shadow-color'], '--md-sys-color-shadow'], '#000000')};
}

.surface::after {
    content: "";
    border-radius: inherit;
    inset: 0;
    position: absolute;
    transition-duration: inherit;
    transition-timing-function: inherit;
    transition-property: box-shadow, opacity;
    opacity: 0.15;

    --l1-y:               clamp(0, ${makeVar(innerTokens.level)}    , 1);
    --l2-y:               clamp(0, ${makeVar(innerTokens.level)} - 1, 1);
    --l3to5-y: calc(2   * clamp(0, ${makeVar(innerTokens.level)} - 2, 3));
    --y:       calc(1px * (var(--l1-y) + var(--l2-y) + var(--l3to5-y)));

    --l1to2-blur: calc(3   * clamp(0, ${makeVar(innerTokens.level)}    , 2));
    --l3to5-blur: calc(2   * clamp(0, ${makeVar(innerTokens.level)} - 2, 3));
    --blur:       calc(1px * (var(--l1to2-blur) + var(--l3to5-blur)));

    --l1to4-spread:         clamp(0, ${makeVar(innerTokens.level)}    , 4);
    --l5-spread: calc(2   * clamp(0, ${makeVar(innerTokens.level)} - 4, 1));
    --spread:    calc(1px * (var(--l1to4-spread) + var(--l5-spread)));

    box-shadow: 0px var(--y) var(--blur) var(--spread) ${makeVar(innerTokens['shadow-color'])};
}

.surface::before {
    content: "";
    inset: 0;
    border-radius: inherit;
    position: absolute;
    transition-duration: inherit;
    transition-timing-function: inherit;
    transition-property: box-shadow, opacity;
    opacity: 0.3;

    --l1-y:            clamp(0, ${makeVar(innerTokens.level)}    , 1);
    --l4-y:            clamp(0, ${makeVar(innerTokens.level)} - 3, 1);
    --l5-y: calc(2   * clamp(0, ${makeVar(innerTokens.level)} - 4, 1));
    --y:    calc(1px * (var(--l1-y) + var(--l4-y) + var(--l5-y)));

    --l1-blur: calc(2 * clamp(0, ${makeVar(innerTokens.level)}    , 1));
    --l3-blur:          clamp(0, ${makeVar(innerTokens.level)} - 2, 1);
    --l5-blur:          clamp(0, ${makeVar(innerTokens.level)} - 4, 1);
    --blur:    calc(1px * (var(--l1-blur) + var(--l3-blur) + var(--l5-blur)));

    box-shadow: 0px var(--y) var(--blur) 0px ${makeVar(innerTokens['shadow-color'])};
}
`]
