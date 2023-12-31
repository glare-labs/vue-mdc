import { Button } from '../components/button'
import { Divider } from '../components/divider'
import { Elevation } from '../components/elevation'
import { Fab, FabExtended } from '../components/fab'
import { Icon } from '../components/icon'
import { Ripple } from '../components/ripple'
import { ThemeProvider } from '../components/theme-provider'
import { Typography } from '../components/typography'
import { IconButton } from '../components/icon-button'
import { RegisterAllComponents, RegisterComponents } from '../utils/register-components'
import { tokens } from '../utils/tokens'

export {
    /**
     * Those are stable
     */
    ThemeProvider,
    Button,
    Ripple,
    Elevation,
    Typography,

    /**
     * Those are ready to use
     */
    Divider,
    Icon,
    Fab,
    FabExtended,
    IconButton,

    /**
     * Plugins
     */
    RegisterAllComponents,
    RegisterComponents,

    /**
     * Design system
     */
    tokens
}
