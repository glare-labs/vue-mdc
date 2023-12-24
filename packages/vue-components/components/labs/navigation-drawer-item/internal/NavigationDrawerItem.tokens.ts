import { makeComponentExternTokens, makeComponentTokens } from '@/utils/tokens'

const tokens = [
    'color',
    'icon-color',
    'label-text-color',
    'indicator-container-color',

    'container-color',
    'container-width',
    'container-height',
] as const

export const navigationDrawerItemTokens = makeComponentTokens<typeof tokens>(
    'navigation-drawer-item',
    tokens
)
export const navigationDrawerItemTokensExtern = makeComponentExternTokens<typeof navigationDrawerItemTokens>(navigationDrawerItemTokens)
