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
    TogglableIconButton,
    SmallTopAppbar,
    MediumTopAppbar,
    LargeTopAppbar,
    CenterAlignedTopAppbar,
    NavigationDrawerItem,
    NavigationDrawer,
} from '../index'
import type { App, Component } from 'vue'

export class ComponentRegister {
    private static Prefix: string = 'glare'

    public static readonly registerAll = ({
        install: (instance: App<any>) => {

            /**
             * Core components
             */
            instance.component(`${this.Prefix}-typography`, Typography)
            instance.component(`${this.Prefix}-elevation`, Elevation)
            instance.component(`${this.Prefix}-ripple`, Ripple)
            instance.component(`${this.Prefix}-icon`, Icon)

            instance.component(`${this.Prefix}-glare-provider`, GlareProvider)
            instance.component(`${this.Prefix}-divider`, Divider)
            instance.component(`${this.Prefix}-button`, Button)
            instance.component(`${this.Prefix}-icon-button`, IconButton)
            instance.component(`${this.Prefix}-togglable-icon-button`, TogglableIconButton)
            instance.component(`${this.Prefix}-fab`, Fab)
            instance.component(`${this.Prefix}-navigation-bar`, NavigationBar)
            instance.component(`${this.Prefix}-bavigation-tab`, NavigationTab)
            instance.component(`${this.Prefix}-checkbox`, Checkbox)
            instance.component(`${this.Prefix}-radio`, Radio)
            instance.component(`${this.Prefix}-switch`, Switch)
            instance.component(`${this.Prefix}-chip`, Chip)
            instance.component(`${this.Prefix}-linear-progress`, LinearProgress)
            instance.component(`${this.Prefix}-circular-progress`, CircularProgress)
            instance.component(`${this.Prefix}-small-top-appbar`, SmallTopAppbar)
            instance.component(`${this.Prefix}-medium-top-appbar`, MediumTopAppbar)
            instance.component(`${this.Prefix}-large-top-appbar`, LargeTopAppbar)
            instance.component(`${this.Prefix}-center-aligned-top-appbar`, CenterAlignedTopAppbar)
            instance.component(`${this.Prefix}-navigation-drawer`, NavigationDrawer)
            instance.component(`${this.Prefix}-navigation-drawer-item`, NavigationDrawerItem)
        }
    }) as any

    public static readonly register = (...components: Component[]) => ({
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

