/// <reference types="vitest" />

import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig(e => mergeConfig(
    viteConfig(e),
    defineConfig({
        test: {
            include: [
                '../src/components/**/test/*.test.{ts,tsx}'
            ],
            environment: 'jsdom',
            coverage: {
                provider: 'v8',
                reporter: ['html'],
                reportsDirectory: '../test-report/',
                clean: true,
                exclude: [
                    '../scripts/**/*',
                    '../catalog/**/*',
                    '../dist/**/*',
                    '../src/lib/**/*',
                    '../src/utils/**/*',
                ],
                include: [
                    '../src/components/**/*'
                ]
            }
        },
    })
))