import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Typography } from '../index'

describe('typography', () => {

    test('typography: renders', () => {
        mount(Typography)
    })

    test('typography: slots\' content', () => {
        const wrapper = mount(Typography, {
            slots: {
                default: 'CONTENT'
            }
        })
        expect(wrapper.text()).toBe('CONTENT')
    })

    test('typography: update property', async () => {
        const wrapper = mount(Typography, {
            props: {
                variant: 'display-large',
            },
        })
        const classes = wrapper.element.className
        await wrapper.setProps({ variant: 'body-large' })
        expect(classes !== wrapper.element.className).toBeTruthy()
    })

})
