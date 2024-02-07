
export type DividerVariantType = 'inset-left' | 'middle-inset' | 'inset-right' | 'no-inset'
export type DividerDirectionType = 'horizontal' | 'vertical'

export interface IDivider {

    /**
     * @default 'middle-inset'
     */
    variant?: DividerVariantType

    /**
     * @default 'horizontal'
     */
    direction?: DividerDirectionType
}
