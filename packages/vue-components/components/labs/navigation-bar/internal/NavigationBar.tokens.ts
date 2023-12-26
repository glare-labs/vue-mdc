import { makeComponentExternTokens, makeComponentTokens } from '../../../../utils/tokens'

const tokens = [
    'container-color',
    'container-shape',
    'container-height',
    'container-min-width',

] as const

export const navigationBarTokens = makeComponentTokens<typeof tokens>(
    'navigation-bar',
    tokens
)
export const navigationBarTokensExtern = makeComponentExternTokens<typeof navigationBarTokens>(navigationBarTokens)
