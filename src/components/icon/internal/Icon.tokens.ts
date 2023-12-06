import { makeComponentExternTokens } from '@/utils/tokens'

export const iconTokens = {
    fontSize: '--mamv-icon-font-size',
    fontFamily: '--mamv-icon-font-family',
} as const 

export const iconTokensExtern = makeComponentExternTokens<typeof iconTokens>(iconTokens)