import { makeVar, tokens } from '../../../utils/tokens'
import { buttonTokens, buttonTokensExtern } from './Button.tokens'
import { elevationTokensExtern } from '../../../components/elevation/internal/Elevation.tokens'
import { iconTokensExtern } from '../../../components/icon'
import { rippleTokensExtern } from '../../../components/ripple'

export const sharedButtonStyles = `
    :host,
    .surface {
        all: unset;
        box-sizing: border-box;
        display: inline-block; 
        position: relative;

        border-width: 0;
        border-style: solid;

        padding-left: ${makeVar(buttonTokensExtern['container-padding-left'], buttonTokens['container-padding-left'])};
        padding-right: ${makeVar(buttonTokensExtern['container-padding-right'], buttonTokens['container-padding-right'])};
        border-radius: ${makeVar(buttonTokensExtern['container-shape'], buttonTokens['container-shape'])};
        background-color: ${makeVar(buttonTokensExtern['container-color'], buttonTokens['container-color'])};
        color: ${makeVar(buttonTokensExtern['label-color'], buttonTokens['label-color'])};

        transition-duration: ${tokens.motion.duration.medium1};
        transition-property: background, border, color, box-shadow;
        transition-timing-function: ${tokens.motion.easing.standard};
        @media screen and (prefers-reduced-motion: reduce): {
            transition-duration: 0.01ms;
        };
        z-index: 0;
        user-select: none;
    }
    
    .content {
        all: unset;
        height: ${makeVar(buttonTokensExtern['container-height'], buttonTokens['container-height'])};
        position: relative;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        justify-content: center;
        text-decoration-line: none;
        vertical-align: middle;
        margin: 0;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .circular {
        ${[buttonTokens['container-shape']]}: ${tokens.shape.corner.full};
    }
    .rounded {
        ${[buttonTokens['container-shape']]}: ${tokens.shape.corner.medium};
    }
    .square {
        ${[buttonTokens['container-shape']]}: ${tokens.shape.corner.none};
    }

    .small {
        ${[buttonTokens['container-height']]}: 36px;
        ${[iconTokensExtern['font-size']]}: 16px;
        ${[iconTokensExtern['line-height']]}: 16px;
        ${[buttonTokens['label-font-size']]}: ${tokens.typescale.labelMedium.fontSize};
        ${[buttonTokens['label-font-weight']]}: ${tokens.typescale.labelMedium.fontWeight};
        ${[buttonTokens['label-letter-spacing']]}: ${tokens.typescale.labelMedium.letterSpacing};
        ${[buttonTokens['label-line-height']]}: ${tokens.typescale.labelMedium.lineHeight};
    }
    .medium {
        ${[buttonTokens['container-height']]}: 40px;
        ${[iconTokensExtern['font-size']]}: 18px;
        ${[iconTokensExtern['line-height']]}: 18px;
        ${[buttonTokens['label-font-size']]}: ${tokens.typescale.labelLarge.fontSize};
        ${[buttonTokens['label-font-weight']]}: ${tokens.typescale.labelLarge.fontWeight};
        ${[buttonTokens['label-letter-spacing']]}: ${tokens.typescale.labelLarge.letterSpacing};
        ${[buttonTokens['label-line-height']]}: ${tokens.typescale.labelLarge.lineHeight};

    }
    .large {
        ${[buttonTokens['container-height']]}: 44px;
        ${[iconTokensExtern['font-size']]}: 20px;
        ${[iconTokensExtern['line-height']]}: 20px;
        ${[buttonTokens['label-font-size']]}: ${tokens.typescale.titleMedium.fontSize};
        ${[buttonTokens['label-font-weight']]}: ${tokens.typescale.titleMedium.fontWeight};
        ${[buttonTokens['label-letter-spacing']]}: ${tokens.typescale.titleMedium.letterSpacing};
        ${[buttonTokens['label-line-height']]}: ${tokens.typescale.titleMedium.lineHeight};
    }

    .label {
        display: inline;
        font-weight: ${makeVar(buttonTokensExtern['label-font-weight'], buttonTokens['label-font-weight'])};
        letter-spacing: ${makeVar(buttonTokensExtern['label-letter-spacing'], buttonTokens['label-letter-spacing'])};
        line-height: ${makeVar(buttonTokensExtern['label-line-height'], buttonTokens['label-line-height'])};
        font-size: ${makeVar(buttonTokensExtern['label-font-size'], buttonTokens['label-font-size'])};
        padding-left: ${makeVar(buttonTokensExtern['label-padding-left'], buttonTokens['label-padding-left'])};
        padding-right: ${makeVar(buttonTokensExtern['label-padding-right'], buttonTokens['label-padding-right'])};
    }

    .disabled {
        cursor: default;
        background-color: color-mix(in srgb, ${tokens.color.surface.surface} 12%, transparent 88%);
        color: color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%);
        ${iconTokensExtern.color}: color-mix(in srgb, ${tokens.color.surface.onSurface} 38%, transparent 62%) !important;
    },
    .disabled,
    .disabled:hover,
    .disabled:active {
        ${[elevationTokensExtern.level]}: 0;
    }

    .elevated,
    .filled,
    .filled-tonal,
    .outlined {
        ${[buttonTokens['container-padding-left']]}: 16px;
        ${[buttonTokens['container-padding-right']]}: 16px;
        ${[buttonTokens['label-padding-left']]}: 8px;
        ${[buttonTokens['label-padding-right']]}: 8px;
    }
    .text {
        ${[buttonTokens['container-padding-left']]}: 12px;
        ${[buttonTokens['container-padding-right']]}: 12px;
        ${[buttonTokens['label-padding-left']]}: 8px;
        ${[buttonTokens['label-padding-right']]}: 8px;
    }

    .elevated {
        ${[buttonTokens['container-color']]}: ${tokens.color.surface.surfaceContainerLow};
        ${[buttonTokens['label-color']]}: ${tokens.color.primary.primary};
        ${[iconTokensExtern.color]}: ${tokens.color.primary.primary};
    }
    .elevated,
    .elevated:active {
        ${[elevationTokensExtern.level]}: ${tokens.elevation.level1};
        ${[rippleTokensExtern['press-color']]}: ${tokens.color.primary.primary};
        ${[rippleTokensExtern['press-opacity']]}: 0.1;
    }
    .elevation:hover {
        ${[elevationTokensExtern.level]}: ${tokens.elevation.level2};
        ${[rippleTokensExtern['hover-color']]}: ${tokens.color.primary.primary};
        ${[rippleTokensExtern['hover-opacity']]}: 0.08;
    }

    .filled {
        ${[buttonTokens['container-color']]}: ${tokens.color.primary.primary};
        ${[buttonTokens['label-color']]}: ${tokens.color.primary.onPrimary};
        ${[iconTokensExtern.color]}: ${tokens.color.primary.onPrimary};
    }
    .filled,
    .filled:active {
        ${[elevationTokensExtern.level]}: ${tokens.elevation.level0};
        ${[rippleTokensExtern['press-color']]}: ${tokens.color.primary.primary};
        ${[rippleTokensExtern['press-opacity']]}: 0.1;
    }
    .filled:hover {
        ${[elevationTokensExtern.level]}: ${tokens.elevation.level1};
        ${[rippleTokensExtern['hover-color']]}: ${tokens.color.primary.primary};
        ${[rippleTokensExtern['hover-opacity']]}: 0.08;
    }

    .filled-tonal {
        ${[buttonTokens['container-color']]}: ${tokens.color.secondary.secondaryContainer};
        ${[buttonTokens['label-color']]}: ${tokens.color.secondary.onSecondaryContainer};
        ${[iconTokensExtern.color]}:${tokens.color.secondary.onSecondaryContainer};
    },
    .filled-tonal,
    .filled-tonal:active {
        ${[elevationTokensExtern.level]}: ${tokens.elevation.level0};
        ${[rippleTokensExtern['press-color']]}: ${tokens.color.secondary.onSecondaryContainer};
        ${[rippleTokensExtern['press-opacity']]}: 0.1;
    }
    .filled-tonal:hover {
        ${[elevationTokensExtern.level]}: ${tokens.elevation.level1};
        ${[rippleTokensExtern['hover-color']]}: ${tokens.color.secondary.onSecondaryContainer};
        ${[rippleTokensExtern['hover-opacity']]}: 0.08;
    }

    .outlined {
        ${[buttonTokens['container-color']]}: transparent;
        outline: 1px solid ${tokens.color.outline.outline};
        ${[buttonTokens['label-color']]}: ${tokens.color.primary.primary};
        ${[iconTokensExtern.color]}: ${tokens.color.primary.primary};
    },
    .outlined,
    .outlined:active,
    .outlined:hover {
        ${[elevationTokensExtern.level]}: ${tokens.elevation.level0};
    }
    .outlined:active {
        ${[rippleTokensExtern['press-color']]}: ${tokens.color.primary.primary};
        ${[rippleTokensExtern['press-opacity']]}: 0.1;
    }
    .outlined:hover {
        ${[rippleTokensExtern['hover-color']]}: ${tokens.color.primary.primary};
        ${[rippleTokensExtern['hover-opacity']]}: 0.08;
    }
    
    .text {
        ${[buttonTokens['container-color']]}: transparent;
        ${[buttonTokens['label-color']]}: ${tokens.color.primary.primary};
        ${[iconTokensExtern.color]}: ${tokens.color.primary.primary};
    }
    .text,
    .text:active,
    .text:hover {
        ${[elevationTokensExtern.level]}: ${tokens.elevation.level0};
    }
    .text:active {
        ${[rippleTokensExtern['press-color']]}: ${tokens.color.primary.primary};
        ${[rippleTokensExtern['press-opacity']]}: 0.1;
    }
    .text:hover {
        ${[rippleTokensExtern['hover-color']]}: ${tokens.color.primary.primary};
        ${[rippleTokensExtern['hover-opacity']]}: 0.08;
    }
`
