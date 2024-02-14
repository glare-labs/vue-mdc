import Elevation from '../components/elevation/Elevation.vue'
import Button from '../components/button/Button.vue'
import Ripple from '../components/ripple/Ripple.vue'
import ThemeProvider from '../components/theme-provider/ThemeProvider.vue'
import Typography from '../components/typography/Typography.vue'
import Icon from '../components/icon/Icon.vue'
import Divider from '../components/divider/Divider.vue'
import IconButton from '../components/icon-button/IconButton.vue'
import Fab from '../components/fab/Fab.vue'
import Checkbox from '../components/checkbox/Checkbox.vue'
import NavigationBar from '../components/navigation-bar/NavigationBar.vue'
import NavigationTab from '../components/navigation-tab/NavigationTab.vue'
import Card from '../components/card/Card.vue'
import ContainerStyleProvider from '../components/container/ContainerStyleProvider.vue'

import Window from '../layouts/window/Window.vue'

import {
    RegisterAllComponents,
    RegisterComponents,
    RegisterAllLayouts,
    RegisterLayouts,
} from '../utils/register-components'
import { tokens } from '../utils/tokens'

export {
    /**
     * Those are stable
     */
    Elevation,
    Button,
    Ripple,
    ThemeProvider,
    Typography,
    Icon,
    Divider,
    IconButton,
    Fab,

    /**
     * Unstable
     */
    Checkbox,
    NavigationBar,
    NavigationTab,
    Card,
    ContainerStyleProvider,

    /**
     * Layouts
     */
    Window,

    /**
     * Plugins
     */
    RegisterAllComponents,
    RegisterComponents,
    RegisterAllLayouts,
    RegisterLayouts,

    /**
     * Design system
     */
    tokens,
}
