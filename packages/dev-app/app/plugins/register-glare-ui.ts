// import { ComponentRegister, DirectiveRegister } from '../../../ui/src/index'

export default defineNuxtPlugin(nuxtApp => {
    /**
     * Unable to load plugin via nuxtApp.vueApp.use
     */
    // nuxtApp.vueApp.use(ComponentRegister.registerAll).use(DirectiveRegister.registerAll)
    // console.info(`GlareUi installed in vue app.`)

    console.info(`Please use glare-ui components by import ... from ...`)
})
