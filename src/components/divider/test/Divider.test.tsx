import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Divider } from '../index'

describe('divider', () => {

    test('renders', () => {
        mount(Divider)
    })

    test('divider: update property variant', async () => {
        const wrapper = mount(Divider, {
            props: {
                variant: 'no-inset',
            },
        })
        const className = wrapper.element.getAttribute('class')
        await wrapper.setProps({ variant: 'middle-inset' })

        expect(className !== wrapper.element.getAttribute('class')).toBeTruthy()
    })
    
})
