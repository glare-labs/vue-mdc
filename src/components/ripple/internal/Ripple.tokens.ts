import { makeComponentExternTokens, makeComponentTokens } from '@/utils/tokens'

const tokens = [
    'hover-color',
] as const

export const rippleTokens = makeComponentTokens<typeof tokens>(
    'ripple',
    tokens
)
export const rippleTokensExtern = makeComponentExternTokens<typeof rippleTokens>(rippleTokens)
