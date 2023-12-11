import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Elevation } from '../index'

describe('elevation', () => {

    test('elevation: renders', () => {
        expect(mount(Elevation)).toBeDefined()
    })

})