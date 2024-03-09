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
    Radio,
    Switch,
    LinearProgress,
    CircularProgress,
    Chip,
} from '../'
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
        instance.component('Am-ThemeProvider', ThemeProvider)
        instance.component('Am-Typography', Typography)
        instance.component('Am-Icon', Icon)
        instance.component('Am-Divider', Divider)
        instance.component('Am-IconButton', IconButton)
        instance.component('Am-Fab', Fab)
        instance.component('Am-Checkbox', Checkbox)
        instance.component('Am-NavigationBar', NavigationBar)
        instance.component('Am-NavigationTab', NavigationTab)
        instance.component('Am-Card', Card)
        instance.component('Am-ContainerStyleProvider', ContainerStyleProvider)
        instance.component('Am-Radio', Radio)
        instance.component('Am-Switch', Switch)
        instance.component('Am-LinearProgress', LinearProgress)
        instance.component('Am-CircularProgress', CircularProgress)
        instance.component('Am-Chip', Chip)
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
