import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { IconButton } from '../index'


describe('icon-button', () => {

    test('icon-button: renders', () => {
        expect(mount(IconButton)).toBeDefined()
    })

    test('icon-button: defaultSelected', async () => {
        const wrapper = mount(IconButton, {
            props: {
                defaultSelected: true
            }
        })
        expect(wrapper.getCurrentComponent().data.selected).toBeTruthy()
    })

    test('icon-button: click event (type: button)', async () => {
        const counter = {
            value: 0
        }
        const wrapper = mount((
            // @ts-ignore
            <IconButton onClick={() => counter.value++}></IconButton>
        ), {
            props: {
                disabled: false,
                type: 'button'
            }
        })
        wrapper.trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('click')).toBeDefined()
        expect(wrapper.emitted('click')).toBeTruthy()
        expect(counter.value).toBe(1)
    })

    test('icon-button: disabled', async () => {
        const wrapper = mount(IconButton, {
            props: {
                disabled: true,
            }
        })
        wrapper.trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('click')).toBeUndefined()
    })

})