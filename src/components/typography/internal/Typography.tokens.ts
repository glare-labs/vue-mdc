import { makeComponentExternTokens, makeComponentTokens } from '@/utils/tokens'

const tokens = [
    'color',
    'font-size',
] as const

export const typographyTokens = makeComponentTokens<typeof tokens>(
    'label',
    tokens
)
export const typographyTokensExtern = makeComponentExternTokens<typeof typographyTokens>(typographyTokens)
