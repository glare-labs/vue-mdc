import { makeComponentExternTokens, makeComponentTokens } from '../../../utils/tokens'

const tokens = [
    'hover-color',
    'hover-opacity',
    'press-color',
    'press-opacity',
] as const

export const rippleTokens = makeComponentTokens<typeof tokens>(
    'ripple',
    tokens
)
export const rippleTokensExtern = makeComponentExternTokens<typeof rippleTokens>(rippleTokens)
