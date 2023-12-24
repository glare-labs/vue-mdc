import { makeComponentExternTokens, makeComponentTokens } from '@/utils/tokens'

const tokens = [
    'container-color',
    'container-width',
    'container-height',
] as const

export const navigationDrawerTokens = makeComponentTokens<typeof tokens>(
    'navigation-drawer',
    tokens
)
export const navigationDrawerTokensExtern = makeComponentExternTokens<typeof navigationDrawerTokens>(navigationDrawerTokens)
