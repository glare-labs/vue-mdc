import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Ripple } from '../index'

describe('ripple', () => {

    test('ripple: renders', () => {
        mount(Ripple)
    })

    test('ripple: attach', () => {
        const wrapper = mount(Ripple)
        expect(wrapper.emitted()).toEqual({})
        wrapper.trigger('click')
        expect(wrapper.emitted()['click']).toBeDefined()
    })

    test('ripple: disabled', () => {
        const wrapper = mount(Ripple, {
            props: {
                disabled: true
            }
        })
        wrapper.trigger('click')
        expect(wrapper.emitted()['click']).toBeDefined()
    })

})