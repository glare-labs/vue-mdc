import { makeComponentExternTokens, makeComponentTokens } from '../../../../utils/tokens'

const tokens = [
    'background',
    'color',
    'height',
    'width',
    'minWidth',
    'shape',
] as const

export const fabExtendedTokens = makeComponentTokens<typeof tokens>(
    'fab-extended',
    tokens
)
export const fabExtendedTokensExtern = makeComponentExternTokens<typeof fabExtendedTokens>(fabExtendedTokens)

