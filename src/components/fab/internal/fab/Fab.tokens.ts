import { makeComponentExternTokens } from '@/utils/tokens'

export const fabTokens = {
    background: '--mamv-fab-background',
    color: '--mamv-fab-on-background',
    height: '--mamv-fab-height',
    width: '--mamv-fab-width',
    shape: '--mamv-fab-shape',
} as const

export const fabTokensExtern = makeComponentExternTokens<typeof fabTokens>(fabTokens)
