import { makeComponentExternTokens, makeComponentTokens } from '@/utils/tokens'

const tokens = [

] as const

export const Tokens = makeComponentTokens<typeof tokens>(
    '',
    tokens
)
export const TokensExtern = makeComponentExternTokens<typeof Tokens>(Tokens)
