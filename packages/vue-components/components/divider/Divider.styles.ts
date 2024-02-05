import { makeComponentInnerTokens, makeVar, makeVarWithDefault } from '../../utils/tokens'
import { dividerTokens } from './Divider.tokens'

const innerTokens = makeComponentInnerTokens(dividerTokens)

export const styles = [`
.surface {
    box-sizing: border-box;
    position: relative;

    ${innerTokens.thickness}: ${makeVarWithDefault([dividerTokens.thickness], '1px')};
    ${innerTokens.color}: ${makeVarWithDefault([dividerTokens.color, '--md-sys-color-outline-variant'], '#0c09bd')};

    background-color: ${makeVar(innerTokens.color)};
}

.horizontal {
    display: block;

    width: ${makeVar(innerTokens.width)};
    height: ${makeVar(innerTokens.thickness)};

    margin-left: ${makeVar(innerTokens['margin-left'])};
    margin-right: ${makeVar(innerTokens['margin-right'])};
    margin-top: ${makeVar(innerTokens['margin-top'])};
    margin-bottom:  ${makeVar(innerTokens['margin-bottom'])};
}
.vertical {
    display: inline-flex;

    width: var(--mamv-divider-thickness-inner);
    height: var(--mamv-divider-height-inner);

    margin-left: ${makeVar(innerTokens['margin-left'])};
    margin-right: ${makeVar(innerTokens['margin-right'])};
    margin-top: ${makeVar(innerTokens['margin-top'])};
    margin-bottom: ${makeVar(innerTokens['margin-bottom'])};
}

.no-inset {
    ${innerTokens.width}: ${makeVarWithDefault([dividerTokens.width], '100%')};
    ${innerTokens.height}: ${makeVarWithDefault([dividerTokens.height], '100%')};

    ${innerTokens['margin-left']}: ${makeVarWithDefault([dividerTokens['margin-left']], '0px')};
    ${innerTokens['margin-right']}: ${makeVarWithDefault([dividerTokens['margin-right']], '0px')};
    ${innerTokens['margin-top']}: ${makeVarWithDefault([dividerTokens['margin-top']], '8px')};
    ${innerTokens['margin-bottom']}: ${makeVarWithDefault([dividerTokens['margin-bottom']], '8px')};
}
.inset-left {
    ${innerTokens.height}: calc(100% - var(--mamv-divider-margin-top-inner));

    ${innerTokens['margin-left']}: ${makeVarWithDefault([dividerTokens['margin-left']], '16px')};
    ${innerTokens['margin-right']}: ${makeVarWithDefault([dividerTokens['margin-right']], '0px')};
    ${innerTokens['margin-top']}: ${makeVarWithDefault([dividerTokens['margin-top']], '8px')};
    ${innerTokens['margin-bottom']}: ${makeVarWithDefault([dividerTokens['margin-bottom']], '8px')};
}
.inset-right {
    ${innerTokens.height}: calc(100% - var(--mamv-divider-margin-bottom-inner, 16px));

    ${innerTokens['margin-left']}: ${makeVarWithDefault([dividerTokens['margin-left']], '0px')};
    ${innerTokens['margin-right']}: ${makeVarWithDefault([dividerTokens['margin-right']], '16px')};
    ${innerTokens['margin-top']}: ${makeVarWithDefault([dividerTokens['margin-top']], '8px')};
    ${innerTokens['margin-bottom']}: ${makeVarWithDefault([dividerTokens['margin-bottom']], '8px')};
}
.middle-inset {
    ${innerTokens.height}: calc(100% - var(--mamv-divider-margin-top-inner) - var(--mamv-divider-margin-bottom-inner));

    ${innerTokens['margin-left']}: ${makeVarWithDefault([dividerTokens['margin-left']], '8px')};
    ${innerTokens['margin-right']}: ${makeVarWithDefault([dividerTokens['margin-right']], '8px')};
    ${innerTokens['margin-top']}: ${makeVarWithDefault([dividerTokens['margin-top']], '8px')};
    ${innerTokens['margin-bottom']}: ${makeVarWithDefault([dividerTokens['margin-bottom']], '8px')};
}
`]
