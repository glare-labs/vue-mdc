
export class Strings {
    public static isHexColor(hexColor: string) {
        return /^(#?)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hexColor)
    }

    public static toKebabCase(str: string) {
        return str.split('').map((letter, idx) => {
            return letter.toUpperCase() === letter
                ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
                : letter
        }).join('')
    }

}
