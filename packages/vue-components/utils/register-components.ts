import { Button, Divider, Elevation, Fab, FabExtended, Icon, IconButton, Ripple, ThemeProvider, Typography } from '../lib'
import type { Component } from 'vue'


/**
 * Register all MAMV Componsnts
 * 
 * @example
 * const app = createApp(App)
 * app.use(RegisterAllComponents)
 * app.mount('#root')
 */
export const RegisterAllComponents = ({
    // @ts-ignore
    install: (instance) => {
        RegisterComponents(
            ThemeProvider,
            Button,
            IconButton,
            Icon,
            Fab,
            FabExtended,
            Typography,
            Ripple,
            Elevation,
            Divider,
        ).install(instance)
    }
})

/**
 * Register components that you need
 * 
 * @example
 * const app = createApp(App)
 * app.use(RegisterComponents(ThemeProvider, Button, Icon))
 * app.mount('#root')
 */
export const RegisterComponents = (...components: Component[]) => ({
    // @ts-ignore
    install(instance) {
        components
            .map(e => () => instance.component(e.name!, e))
            .forEach(e => e())
    },
})
