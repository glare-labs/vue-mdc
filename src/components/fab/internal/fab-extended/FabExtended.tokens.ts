import { makeComponentExternTokens } from '@/utils/tokens'

export const fabExtendedTokens = {
    background: '--mamv-fab-extended-background',
    color: '--mamv-fab-extended-on-background',
    height: '--mamv-fab-extended-height',
    minWidth: '--mamv-fab-extended-min-width',
    width: '--mamv-fab-extended-width',
    shape: '--mamv-fab-extended-shape',
} as const

export const fabExtendedTokensExtern = makeComponentExternTokens<typeof fabExtendedTokens>(fabExtendedTokens)

