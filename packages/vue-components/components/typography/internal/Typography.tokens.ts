import { makeComponentExternTokens, makeComponentTokens } from '../../../utils/tokens'

const tokens = [
    'color',
    'font-size',
    'line-height',
    'font-weight',
    'letter-spacing',
] as const

export const typographyTokens = makeComponentTokens<typeof tokens>(
    'typography',
    tokens
)
export const typographyTokensExtern = makeComponentExternTokens<typeof typographyTokens>(typographyTokens)
