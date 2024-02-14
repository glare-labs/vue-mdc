import {
    Elevation,
    Button,
    Ripple,
    ThemeProvider,
    Typography,
    Icon,
    Divider,
    IconButton,
    Fab,
    Checkbox,
    NavigationBar,
    NavigationTab,
    Card,
    ContainerStyleProvider,
    Window,
} from '../lib'
import type { App, Component } from 'vue'

/**
 * Register all MAMV Componsnts
 * 
 * @example
 * const app = createApp(App)
 * app.use(RegisterAllComponents)
 * app.mount('#root')
 */
export const RegisterAllComponents = ({
    install: (instance: App<any>) => {
        // Components
        instance.component('Am-Elevation', Elevation)
        instance.component('Am-Button', Button)
        instance.component('Am-Ripple', Ripple)
        instance.component('Am-Theme-Provider', ThemeProvider)
        instance.component('Am-Typography', Typography)
        instance.component('Am-Icon', Icon)
        instance.component('Am-Divider', Divider)
        instance.component('Am-Icon-Button', IconButton)
        instance.component('Am-Fab', Fab)
        instance.component('Am-Checkbox', Checkbox)
        instance.component('Am-Navigation-Bar', NavigationBar)
        instance.component('Am-Navigation-Tab', NavigationTab)
        instance.component('Am-Card', Card)
        instance.component('Am-Container-Style-Provider', ContainerStyleProvider)
    }
}) as any

/**
 * Register components that you need
 * 
 * @example
 * const app = createApp(App)
 * app.use(RegisterComponents(ThemeProvider, Button, Icon))
 * app.mount('#root')
 */
export const RegisterComponents = (...components: Component[]) => ({
    install(instance: App) {
        components
            .map(e => () => instance.component(e.name!, e))
            .forEach(e => e())
    },
} as any)

/**
 * Register all MAMV Layouts
 * 
 * @example
 * const app = createApp(App)
 * app.use(RegisterAllLayouts)
 * app.mount('#root')
 */
export const RegisterAllLayouts = ({
    install: (instance: App) => {
        instance.component('Am-Window-Layout', Window)
    }
}) as any

/**
 * Register layouts that you need
 * 
 * @example
 * const app = createApp(App)
 * app.use(RegisterComponents(Window))
 * app.mount('#root')
 */
export const RegisterLayouts = (...components: Component[]) => ({
    install(instance: App) {
        components
            .map(e => () => instance.component(e.name!, e))
            .forEach(e => e())
    },
} as any)

