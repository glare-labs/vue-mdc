import {
    Elevation,
    Button,
    Ripple,
    Typography,
    Icon,
    Divider,
    IconButton,
    Fab,
    Checkbox,
    NavigationBar,
    NavigationTab,
    Radio,
    Switch,
    LinearProgress,
    CircularProgress,
    Chip,
    GlareProvider,
} from '../index'
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
        const prefix = 'glare'
        // Components
        instance.component(`${prefix}-Typography`, Typography)
        instance.component(`${prefix}-Elevation`, Elevation)
        instance.component(`${prefix}-button`, Button)
        instance.component(`${prefix}-Ripple`, Ripple)
        instance.component(`${prefix}-Icon`, Icon)
        instance.component(`${prefix}-Divider`, Divider)
        instance.component(`${prefix}-IconButton`, IconButton)
        instance.component(`${prefix}-Fab`, Fab)
        instance.component(`${prefix}-Checkbox`, Checkbox)
        instance.component(`${prefix}-NavigationBar`, NavigationBar)
        instance.component(`${prefix}-NavigationTab`, NavigationTab)
        instance.component(`${prefix}-Radio`, Radio)
        instance.component(`${prefix}-Switch`, Switch)
        instance.component(`${prefix}-LinearProgress`, LinearProgress)
        instance.component(`${prefix}-CircularProgress`, CircularProgress)
        instance.component(`${prefix}-Chip`, Chip)
        instance.component(`${prefix}-glare-provider`, GlareProvider)
    }
}) as any




export class ComponentRegister {
    private static Prefix: string = 'glare'

    public static readonly registerAllComponents = ({
        install: (instance: App<any>) => {
            instance.component(`${this.Prefix}-Typography`, Typography)
            instance.component(`${this.Prefix}-Elevation`, Elevation)
            instance.component(`${this.Prefix}-button`, Button)
            instance.component(`${this.Prefix}-Ripple`, Ripple)
            instance.component(`${this.Prefix}-Icon`, Icon)
            instance.component(`${this.Prefix}-Divider`, Divider)
            instance.component(`${this.Prefix}-IconButton`, IconButton)
            instance.component(`${this.Prefix}-Fab`, Fab)
            instance.component(`${this.Prefix}-Checkbox`, Checkbox)
            instance.component(`${this.Prefix}-NavigationBar`, NavigationBar)
            instance.component(`${this.Prefix}-NavigationTab`, NavigationTab)
            instance.component(`${this.Prefix}-Radio`, Radio)
            instance.component(`${this.Prefix}-Switch`, Switch)
            instance.component(`${this.Prefix}-LinearProgress`, LinearProgress)
            instance.component(`${this.Prefix}-CircularProgress`, CircularProgress)
            instance.component(`${this.Prefix}-Chip`, Chip)
            instance.component(`${this.Prefix}-glare-provider`, GlareProvider)
        }
    }) as any

    public static readonly registerComponent = (...components: Component[]) => ({
        install(instance: App) {
            components.map(e => {
                instance.component(e.name!.replace('GlareUi', this.Prefix), e)
            })
        },
    }) as any

    public static setPrefix(prefix: string) {
        this.Prefix = prefix
        return this
    }

}

