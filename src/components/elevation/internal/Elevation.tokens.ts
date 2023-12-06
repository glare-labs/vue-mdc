import { makeComponentExternTokens } from '@/utils/tokens'

export const elevationTokens = {
    level: '--mamv-elevation-level',
    shadowColor: '--mamv-elevation-shadow'
} as const

export const elevationTokensExtern = makeComponentExternTokens<typeof elevationTokens>(elevationTokens)
