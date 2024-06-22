// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  /**
   * Enable Nuxt 4
   */
  future: {
    compatibilityVersion: 4,
  },
  ssr: true,
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '~/assets/css/material-sys-color.css',
    '~/assets/css/tailwind.css',
    'material-symbols',
    '@fontsource/roboto',
  ],

  /**
   * Tailwindcss
   */
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  plugins: [
    {
      src: `~/plugins/register-glare-ui.ts`,
      mode: 'all',
    },
  ],
  vite: {

    /**
     * Shield custom element warnings, prefix of glare-ui component name
     */
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.startsWith('glare')
        }
      }
    },
    vueJsx: {
      isCustomElement: (tag: string) => tag.startsWith('glare')
    },
    /**
     * Vite cannot request source code in dev-app in dev-app
     * 
     * @link https://stackoverflow.com/a/74902701
     */
    server: {
      fs: {
        strict: false
      }
    }
  },
})
