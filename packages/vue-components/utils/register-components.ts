import {
    Button,
    Divider,
    Elevation,
    Fab,
    FabExtended,
    Icon,
    IconButton,
    Ripple,
    ThemeProvider,
    Typography,
    Padding,
    Margin,
    Window,
    Flex,
    paddingDirective,
    marginDirective,
    windowDirective,
    flexDirective
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
    install: (instance: App) => {
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
            Window,
            Padding,
            Margin,
            Flex
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
    install(instance: App) {
        components
            .map(e => () => instance.component(e.name!, e))
            .forEach(e => e())
    },
})

export const RegisterAllLayouts = ({
    install: (instance: App) => {
        instance.directive('window', windowDirective)
        instance.directive('padding', paddingDirective)
        instance.directive('margin', marginDirective)
        instance.directive('flex', flexDirective)
    }
})
