
export const sharedStyles = {

    /**
     * for all elements
     */
    base: {
        boxSizing: 'border-box',
        borderWidth: 0,
        borderStyle: 'solid',

    },

    hr: {
        height: 0,
        color: 'inherit',
        borderTopWidth: '1px',
    },

    h: {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: 'inherit',
        textDecoration: 'inherit',
        margin: 0,
        padding: 0,
    },

    buttonInputOptgroupSelectTextarea: {
        fontFamily: 'inherit',
        'font-feature-settings': 'inherit',
        'font-variation-settings': 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: 'inherit',
        textDecoration: 'inherit',
        margin: 0,
        padding: 0,
        textTransform: 'none',
    },

    button: {
        '-webkit-appearance': 'button',
        cursor: 'pointer',
    },

    disabled: {
        cursor: 'default',
    },

    list: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },

} as const
