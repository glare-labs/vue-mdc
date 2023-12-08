import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
    test: {
        include: [
            '../../src/components/**/test/*.test.tsx'
        ],
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            reporter: ['html'],
            reportsDirectory: '../../test-report/'
        }
    },
}))