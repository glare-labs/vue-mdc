
export type IconSizeType = 'small' | 'medium' | 'large'
export type IconVariantType = 'outlined' | 'rounded' | 'sharp'

export interface IIcon {

    /**
     * @default 'medium'
     */
    size?: IconSizeType

    /**
     * @default 'outlined'
     */
    variant?: IconVariantType

}
