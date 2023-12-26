import { makeComponentExternTokens, makeComponentTokens } from '../../../utils/tokens'

const tokens = [
    'color',
    'background-color',
    'width',
    'height',
    'shape',
    'padding-left',
    'padding-right',
    'font-size',
] as const

export const buttonTokens = makeComponentTokens<typeof tokens>(
    'button',
    tokens
)
export const buttonTokensExtern = makeComponentExternTokens<typeof buttonTokens>(buttonTokens)
