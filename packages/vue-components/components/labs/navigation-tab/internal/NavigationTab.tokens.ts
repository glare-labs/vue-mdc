import { makeComponentExternTokens, makeComponentTokens } from '../../../../utils/tokens'

const tokens = [
    'color',
    'container-color',
    'container-height',
    'container-width',
    'container-shape',
] as const

export const navigationTabTokens = makeComponentTokens<typeof tokens>(
    'navigation-tab',
    tokens
)
export const navigationTabTokensExtern = makeComponentExternTokens<typeof navigationTabTokens>(navigationTabTokens)
