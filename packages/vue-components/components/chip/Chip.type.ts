
export type TChipTypes = 'assist' | 'filter' | 'input' | 'suggestion'

export interface IChipProps {
    type: TChipTypes

    disabled: boolean

    elevated: boolean
}
