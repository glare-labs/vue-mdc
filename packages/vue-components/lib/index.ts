import { Button } from '../components/button'
import { Divider } from '../components/divider'
import { Elevation } from '../components/elevation'
import { Fab, FabExtended } from '../components/fab'
import { Icon } from '../components/icon'
import { Ripple } from '../components/ripple'
import { ThemeProvider } from '../components/theme-provider'
import { Typography } from '../components/typography'
import { IconButton } from '../components/icon-button'
import { RegisterAllComponents, RegisterComponents, RegisterAllCustomElements } from '../utils/register-components'
import { Checkbox } from '../components/labs/checkbox'

export {
    /**
     * Those are stable
     */
    ThemeProvider,
    Divider,
    Elevation,
    Typography,

    /**
     * Those are ready to use
    */
    Ripple,
    Icon,
    Fab,
    FabExtended,
    Button,
    IconButton,

    /**
     * Unstable
     */
    Checkbox,

    RegisterAllComponents,
    RegisterComponents,
    RegisterAllCustomElements,
}
