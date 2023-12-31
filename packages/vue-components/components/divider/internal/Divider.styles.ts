import { dividerTokens, dividerTokensExtern } from './Divider.tokens'
import { makeVar, makeVarWithDefault, tokens } from '../../../utils/tokens'
import { StyleSheet } from 'aphrodite/no-important'

export const sharedDividerStyles = StyleSheet.create({
    surface: {
        'box-sizing': 'border-box',
        position: 'relative',

        [dividerTokens.thickness]: '1px',
        [dividerTokens.color]: makeVarWithDefault([dividerTokensExtern.color], tokens.color.outline.outlineVariant),

        'background-color': makeVar(dividerTokensExtern.color, dividerTokens.color),
    },

    horizontal: {
        display: 'block',

        width: makeVar(dividerTokensExtern.width, dividerTokens.width),
        height: makeVar(dividerTokensExtern.thickness, dividerTokens.thickness),

        'margin-left': makeVar(dividerTokensExtern['margin-left'], dividerTokens['margin-left']),
        'margin-right': makeVar(dividerTokensExtern['margin-right'], dividerTokens['margin-right']),
        'margin-top': makeVarWithDefault([dividerTokensExtern['margin-top']], '8px'),
        'margin-bottom': makeVarWithDefault([dividerTokensExtern['margin-bottom']], '8px'),
    },
    vertical: {
        display: 'inline-flex',

        width: makeVar(dividerTokensExtern.thickness, dividerTokens.thickness),
        height: makeVar(dividerTokensExtern.height, dividerTokens.height),

        'margin-left': makeVarWithDefault([dividerTokensExtern['margin-left']], '8px'),
        'margin-right': makeVarWithDefault([dividerTokensExtern['margin-right']], '8px'),
        'margin-top': makeVar(dividerTokensExtern['margin-top'], dividerTokens['margin-top']),
        'margin-bottom': makeVar(dividerTokensExtern['margin-bottom'], dividerTokens['margin-bottom']),
    },

    'no-inset': {
        [dividerTokens.width]: '100%',
        [dividerTokens.height]: '100%',

        [dividerTokens['margin-left']]: '0px',
        [dividerTokens['margin-right']]: '0px',
        [dividerTokens['margin-top']]: '0px',
        [dividerTokens['margin-bottom']]: '0px',
    },
    'inset-left': {
        [dividerTokens.height]: `calc(100% - ${makeVar(dividerTokens['margin-top'])})`,

        [dividerTokens['margin-left']]: '16px',
        [dividerTokens['margin-right']]: '0px',
        [dividerTokens['margin-top']]: '16px',
        [dividerTokens['margin-bottom']]: '0px',
    },
    'inset-right': {
        [dividerTokens.height]: `calc(100% - ${makeVar(dividerTokens['margin-bottom'])})`,

        [dividerTokens['margin-left']]: '0px',
        [dividerTokens['margin-right']]: '16px',
        [dividerTokens['margin-top']]: '0px',
        [dividerTokens['margin-bottom']]: '16px',
    },
    'middle-inset': {
        [dividerTokens.height]: `calc(100% - ${makeVar(dividerTokens['margin-top'])} - ${makeVar(dividerTokens['margin-bottom'])})`,

        [dividerTokens['margin-left']]: '16px',
        [dividerTokens['margin-right']]: '16px',
        [dividerTokens['margin-top']]: '16px',
        [dividerTokens['margin-bottom']]: '16px',
    },

})
