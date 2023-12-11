import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { ThemeProvider } from '@/components/theme-provider/index'

describe('theme-generate', () => {

    const wrapper = mount(ThemeProvider, {
        props: {
            dark: true,
            sourceColor: '#2A6B3C',
        },
    })

    test('theme: theme-updated event', () => {
        expect(wrapper.emitted()).toHaveProperty('theme-updated')
        const event = wrapper.emitted('theme-updated')
        expect(event).toHaveLength(1)
    })

    test('theme: dark', () => {
        expect(wrapper.getCurrentComponent().props.dark).toBeTruthy()
    })

    test('theme: sourceColor', () => {
        expect(wrapper.element.getAttribute('style')).toBeDefined()
    })

    test('theme: update theme property', async () => {
        let styles = wrapper.element.getAttribute('style')
        await wrapper.setProps({ dark: false })
        expect(wrapper.element.getAttribute('style') !== styles).toBeTruthy()

        styles = wrapper.element.getAttribute('style')
        await wrapper.setProps({ sourceColor: '#9a2f99' })
        expect(wrapper.element.getAttribute('style') !== styles).toBeTruthy()
    })

})