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
            Fab,
            FabExtended,
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

/**
 * Register all custom elements.
 * 
 * @example
 * const app = createApp(App)
 * app.use(RegisterAllCustomElements)
 * app.mount('#root')
 */
export const RegisterAllCustomElements = {
    install() {
        customElements.define('am-ripple', Ripple)
        customElements.define('am-elevation', Elevation)
        customElements.define('am-typography', Typography)
        customElements.define('am-button', Button)
        customElements.define('am-icon', Icon)
        customElements.define('am-divider', Divider)

    }
} as Required<Plugin>
