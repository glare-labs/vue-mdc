import { makeComponentExternTokens, makeComponentTokens } from '../../../../utils/tokens'

const tokens = [
    'color',
    'background-color',
    'border-color',
    'border-width',
    'shape',
    'height',
    'width',
    'icon-size',
] as const

export const checkboxTokens = makeComponentTokens<typeof tokens>(
    'checkbox',
    tokens
)
export const checkboxTokensExtern = makeComponentExternTokens<typeof checkboxTokens>(checkboxTokens)
