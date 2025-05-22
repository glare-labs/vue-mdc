/**
 * @license
 * Copyright 2024 glare-labs & bre97-web
 * SPDX-License-Identifier: MIT
 */

import type { App } from 'vue'
import { BottomAppBar } from '../components/bottom-app-bar'
import { Button } from '../components/button'
import { Checkbox } from '../components/checkbox'
import { Dialog } from '../components/dialog'
import { Divider } from '../components/divider'
import { Elevation } from '../components/elevation'
import { Fab } from '../components/fab'
import { Field } from '../components/field'
import { FocusRing } from '../components/focus-ring'
import { Icon } from '../components/icon'
import { IconButton, ToggleIconButton } from '../components/icon-button'
import { NavigationBar } from '../components/navigation-bar'
import { NavigationDrawer, NavigationDrawerHeadline, NavigationDrawerIndicator } from '../components/navigation-drawer'
import { NavigationRail } from '../components/navigation-rail'
import { NavigationRailTab } from '../components/navigation-rail-tab'
import { NavigationTab } from '../components/navigation-tab'
import { CircularProgress, LinearProgress } from '../components/progress'
import { ThemeProvider } from '../components/provider'
import { Radio } from '../components/radio'
import { Ripple } from '../components/ripple'
import { SplitButton, SplitButtonGroup } from '../components/split-button'
import { Switch } from '../components/switch'
import { PlainTooltip, RichTooltip } from '../components/tooltip'
import { Typography } from '../components/typography'
import { componentNamePrefix } from '../internals/component-name-prefix/component-name-prefix'

export const registerComponents = (prefix = componentNamePrefix) => ({
    install: (instance: App<any>) => {
        instance.component(`${prefix}-bottom-app-bar`, BottomAppBar)
        instance.component(`${prefix}-button`, Button)
        instance.component(`${prefix}-checkbox`, Checkbox)
        instance.component(`${prefix}-dialog`, Dialog)
        instance.component(`${prefix}-divider`, Divider)
        instance.component(`${prefix}-elevation`, Elevation)
        instance.component(`${prefix}-fab`, Fab)
        instance.component(`${prefix}-field`, Field)
        instance.component(`${prefix}-focus-ring`, FocusRing)
        instance.component(`${prefix}-icon`, Icon)
        instance.component(`${prefix}-icon-button`, IconButton)
        instance.component(`${prefix}-toggle-icon-button`, ToggleIconButton)
        instance.component(`${prefix}-navigation-bar`, NavigationBar)
        instance.component(`${prefix}-navigation-drawer`, NavigationDrawer)
        instance.component(`${prefix}-navigation-drawer-headline`, NavigationDrawerHeadline)
        instance.component(`${prefix}-navigation-drawer-indicator`, NavigationDrawerIndicator)
        instance.component(`${prefix}-navigation-rail`, NavigationRail)
        instance.component(`${prefix}-navigation-rail-tab`, NavigationRailTab)
        instance.component(`${prefix}-navigation-tab`, NavigationTab)
        instance.component(`${prefix}-linear-progress`, LinearProgress)
        instance.component(`${prefix}-circular-progress`, CircularProgress)
        instance.component(`${prefix}-theme-provider`, ThemeProvider)
        instance.component(`${prefix}-radio`, Radio)
        instance.component(`${prefix}-ripple`, Ripple)
        instance.component(`${prefix}-split-button`, SplitButton)
        instance.component(`${prefix}-split-button-group`, SplitButtonGroup)
        instance.component(`${prefix}-switch`, Switch)
        instance.component(`${prefix}-rich-tooltip`, RichTooltip)
        instance.component(`${prefix}-plain-tooltip`, PlainTooltip)
        instance.component(`${prefix}-typography`, Typography)
    }
})
