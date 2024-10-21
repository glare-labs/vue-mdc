import 'material-symbols/outlined.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import './modules/component-navigation/index'
import { componentRoutes } from './modules/components/router.module'
import { router } from './routes'

const app = createApp(App)
app.runWithContext(() => {
    console.log(`Vue-MDC dev-app is running. Vue version: ${app.version}`)
    console.log(
        `Component paths:`,
        JSON.stringify(componentRoutes.map(e => `${e.path}`), null, 4)
    )

})
app.use(router)
app.mount('#app')
