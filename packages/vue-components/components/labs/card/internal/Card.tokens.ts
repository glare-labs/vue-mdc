import { makeComponentExternTokens, makeComponentTokens } from '../../../utils/tokens'

const tokens = [
    'container-color',
    'container-shape',
    'padding-left',
    'padding-right',
] as const

export const cardTokens = makeComponentTokens<typeof tokens>(
    '',
    tokens
)
export const cardTokensExtern = makeComponentExternTokens<typeof cardTokens>(cardTokens)
