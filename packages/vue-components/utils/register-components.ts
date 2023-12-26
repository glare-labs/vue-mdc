import { Button, Divider, Elevation, Fab, FabExtended, Icon, IconButton, Ripple, ThemeProvider, Typography } from '../lib'
import { Component, Plugin } from 'vue'

/**
 * Remove 'MAMV' from component's name
 */
function getComponentName(component: Component) {
    if (component.name === undefined) throw Error('Unnamed component had been got name fail.')
    return component.name.slice(4)
}

/**
 * Register all MAMV Componsnts
 * 
 * the name prefix 'MAMV' has removed
 * 
 * e.g.
 *     MAMVButton -> Button
 * 
 * @example
 * const app = createApp(App)
 * app.use(RegisterAllComponents)
 * app.mount('#root')
 */
export const RegisterAllComponents = {
    install: (instance) => {
        RegisterComponents(
            ThemeProvider,
            Divider,
            Elevation,
            Typography,
            Ripple,
            Icon,
            Fab,
            FabExtended,
            Button,
            IconButton,
        ).install(instance)
    }
} as Required<Plugin>

/**
 * Register components that you need
 * 
 * @example
 * const app = createApp(App)
 * app.use(RegisterComponents(ThemeProvider, Button, Icon))
 * app.mount('#root')
 */
export const RegisterComponents = (...components: Component[]) => ({
    install(instance) {
        components
            .map(e => () => instance.component(getComponentName(e), e))
            .forEach(e => e())
    },
}) as Required<Plugin>
