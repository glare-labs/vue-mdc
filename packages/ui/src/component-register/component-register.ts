import type { App } from 'vue'
import { Button } from '../components/button'
import { Checkbox } from '../components/checkbox'
import { Divider } from '../components/divider'
import { Elevation } from '../components/elevation'
import { Fab } from '../components/fab'
import { Icon } from '../components/icon'
import { IconButton, ToggleIconButton } from '../components/icon-button'
import { NavigationBar } from '../components/navigation-bar'
import { NavigationRail } from '../components/navigation-rail'
import { NavigationRailTab } from '../components/navigation-rail-tab'
import { NavigationTab } from '../components/navigation-tab'
import { CircularProgress, LinearProgress } from '../components/progress'
import { Provider } from '../components/provider'
import { Radio } from '../components/radio'
import { Ripple } from '../components/ripple'
import { Switch } from '../components/switch'
import { Typography } from '../components/typography'
import { componentNamePrefix } from '../internal/component-name-prefix/component-name-prefix'

export const registerComponents = (prefix = componentNamePrefix) => ({
    install: (instance: App<any>) => {
        instance.component(`${prefix}-button`, Button)
        instance.component(`${prefix}-checkbox`, Checkbox)
        instance.component(`${prefix}-divider`, Divider)
        instance.component(`${prefix}-elevation`, Elevation)
        instance.component(`${prefix}-fab`, Fab)
        instance.component(`${prefix}-icon`, Icon)
        instance.component(`${prefix}-icon-button`, IconButton)
        instance.component(`${prefix}-toggle-icon-button`, ToggleIconButton)
        instance.component(`${prefix}-navigation-bar`, NavigationBar)
        instance.component(`${prefix}-navigation-tab`, NavigationTab)
        instance.component(`${prefix}-navigation-rail`, NavigationRail)
        instance.component(`${prefix}-navigation-rail-tab`, NavigationRailTab)
        instance.component(`${prefix}-linear-progress`, LinearProgress)
        instance.component(`${prefix}-circular-progress`, CircularProgress)
        instance.component(`${prefix}-provider`, Provider)
        instance.component(`${prefix}-radio`, Radio)
        instance.component(`${prefix}-ripple`, Ripple)
        instance.component(`${prefix}-switch`, Switch)
        instance.component(`${prefix}-typography`, Typography)
    }
})
