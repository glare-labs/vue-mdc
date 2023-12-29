import { makeComponentExternTokens, makeComponentTokens } from '../../../utils/tokens'

const tokens = [
    'level',
    'color',
] as const

export const elevationTokens = makeComponentTokens<typeof tokens>(
    'elevation',
    tokens
)
export const elevationTokensExtern = makeComponentExternTokens<typeof elevationTokens>(elevationTokens)
