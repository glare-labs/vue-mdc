
export type FabSizeType = 'small' | 'medium' | 'large'
export type FabVariantType = 'primary' | 'secondary' | 'tertiary'

export interface IFab {

    /**
     * @default 'medium'
     */
    size?: FabSizeType

    label?: string

    variant?: FabVariantType
}
