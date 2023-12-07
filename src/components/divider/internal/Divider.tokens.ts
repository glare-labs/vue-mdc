import { makeComponentExternTokens, makeComponentTokens } from '@/utils/tokens'

const tokens = [
    'color',
    'thickness',
    'width',
    'margin-left',
    'margin-right',
    'margin-bottom',
    'margin-top',
] as const

export const dividerTokens = makeComponentTokens<typeof tokens>(
    'divider',
    tokens
)
export const dividerTokensExtern = makeComponentExternTokens<typeof dividerTokens>(dividerTokens)
