import { StyleSheet } from 'aphrodite'

export const elevationStyles = StyleSheet.create({
    root: {
        borderRadius: 'inherit',
        inset: 0,
        position: 'absolute',
        transitionDuration: 'inherit',
        transitionProperty: 'inherit',
        transitionTimingFunction: 'inherit',
    },
    after: {
        borderRadius: 'inherit',
        inset: 0,
        position: 'absolute',
        transitionDuration: 'inherit',
        transitionTimingFunction: 'inherit',
        transitionProperty: 'box-shadow, opacity',
        opacity: 0.15
    },
    before: {
        borderRadius: 'inherit',
        inset: 0,
        position: 'absolute',
        transitionDuration: 'inherit',
        transitionTimingFunction: 'inherit',
        transitionProperty: 'box-shadow, opacity',
        opacity: 0.3,
    },
})