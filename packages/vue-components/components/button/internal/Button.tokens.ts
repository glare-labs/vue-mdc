import { makeComponentExternTokens, makeComponentTokens } from '../../../utils/tokens'

const tokens = [
    'container-width',
    'container-height',
    'container-shape',
    'container-color',
    'container-padding-left',
    'container-padding-right',

    'label-font-size',
    'label-font-weight',
    'label-line-height',
    'label-letter-spacing',
    'label-color',
    'label-padding-left',
    'label-padding-right',
] as const

export const buttonTokens = makeComponentTokens<typeof tokens>(
    'button',
    tokens
)
export const buttonTokensExtern = makeComponentExternTokens<typeof buttonTokens>(buttonTokens)
