import { makeComponentExternTokens, makeComponentTokens } from '../../../../utils/tokens'

const tokens = [
    'background',
    'color',
    'height',
    'width',
    'shape',
] as const

export const fabTokens = makeComponentTokens<typeof tokens>(
    'fab',
    tokens
)
export const fabTokensExtern = makeComponentExternTokens<typeof fabTokens>(fabTokens)
