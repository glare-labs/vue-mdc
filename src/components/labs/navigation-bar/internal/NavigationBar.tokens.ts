import { makeComponentExternTokens, makeComponentTokens } from '@/utils/tokens'

const tokens = [
    'color',

    'container-color',
    'container-shape',
    'container-height',
    'container-min-width',

    'indicator-color',
    'indicator-height',
    'indicator-width',
    'indicator-shape',

] as const

export const navigationBarTokens = makeComponentTokens<typeof tokens>(
    'navigation-bar',
    tokens
)
export const navigationBarTokensExtern = makeComponentExternTokens<typeof navigationBarTokens>(navigationBarTokens)
