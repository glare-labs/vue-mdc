import { makeComponentExternTokens, makeComponentTokens } from '@/utils/tokens'

const tokens = [
    'font-size',
    'font-family',
    'color',
] as const

export const iconTokens = makeComponentTokens<typeof tokens>(
    'icon',
    tokens
)
export const iconTokensExtern = makeComponentExternTokens<typeof iconTokens>(iconTokens)