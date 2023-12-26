// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: true,
    vite: {
        build: {
            emptyOutDir: true,
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/index.css'],
    modules: [
        '@nuxt/content',
    ],
    app: {
        head: {
            title: 'Material Anti-Mage',
            meta: [
                {
                    name: 'google-site-verification',
                    content: 'T50wO3rRtRH5vWB4Ka9GrbA-R3TBI3IeH2u_ArAtv8c',
                },
                {
                    name: 'description',
                    content: 'Material Anti-Mage is a Vue component library, full Typescript support, based on Vue3.'
                }
            ],

        }
    },
})
