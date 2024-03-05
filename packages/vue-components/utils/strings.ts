/**
 * 
 * @example
 *   MAMVButton -> m-a-m-v-button
 */
export function toKebabCase(str: string) {
    return str.split('').map((letter, idx) => {
        return letter.toUpperCase() === letter
            ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
            : letter
    }).join('')
}
