import { makeComponentInnerTokens, makeVar } from '../../utils/tokens'
import { iconTokens } from './Icon.tokens'

const innerTokens = makeComponentInnerTokens(iconTokens)

export const styles = [`.surface {
    ${innerTokens.color}: var(--md-sys-color-on-surface);

    line-height: ${makeVar(iconTokens['line-height'], innerTokens['line-height'])};
    font-size: ${makeVar(iconTokens['font-size'], innerTokens['font-size'])};
    font-family: ${makeVar(iconTokens['font-family'], innerTokens['font-family'])};
    color: ${makeVar(iconTokens['color'], innerTokens['color'])};

    pointer-events: none;
    user-select: none;
    z-index: 0;
}

.small {
    ${innerTokens['font-size']}: 22px;
    ${innerTokens['line-height']}: 22px;
}
.medium {
    ${innerTokens['font-size']}: 24px;
    ${innerTokens['line-height']}: 24px;
}
.large {
    ${innerTokens['font-size']}: 44px;
    ${innerTokens['line-height']}: 44px;
}

.outlined {
    ${innerTokens['font-family']}: 'Material Symbols Outlined';
}
.rounded {
    ${innerTokens['font-family']}: 'Material Symbols Rounded';
}
.sharp {
    ${innerTokens['font-family']}: 'Material Symbols Sharp';
}`]
