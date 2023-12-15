import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Button } from '../index'

describe('button', () => {

    test('button: renders', () => {
        expect(mount(Button)).toBeDefined()
    })

    test('button: appearance', async () => {
        const wrapper = mount(Button, {
            props: {
                appearance: 'filled-tonal'
            },
        })
        expect(wrapper.classes()).toBeDefined()
    })

    test('button: click event (type: button)', async () => {
        const wrapper = mount({
            data: () => ({
                value: 0,
            }),
            template: '<Button @click="value ++"></Button>',
            components: {
                Button,
            },
        })
        wrapper.trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.getCurrentComponent().data.value).toBe(1)
    })

    test('button: disabled', async () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true,
            }
        })
        wrapper.trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('click')).toBeUndefined()
    })
})