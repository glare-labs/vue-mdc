import { makeComponentExternTokens, makeComponentTokens } from '@/utils/tokens'

const tokens = [
    'container-color',
    'unselect-container-color',
    'selected-container-color',
    'color',
    'toggle-unselect-color',
    'toggle-selected-color',
    'width',
    'height',
    'shape',
] as const

export const iconButtonTokens = makeComponentTokens<typeof tokens>(
    'icon-button',
    tokens
)
export const iconButtonTokensExtern = makeComponentExternTokens<typeof iconButtonTokens>(iconButtonTokens)