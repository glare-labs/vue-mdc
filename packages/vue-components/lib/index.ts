import { Button, buttonTokensExtern } from '../components/button'
import { Divider, dividerTokensExtern } from '../components/divider'
import { Elevation, elevationTokensExtern } from '../components/elevation'
import { Fab, FabExtended, fabExtendedTokensExtern, fabTokensExtern } from '../components/fab'
import { Icon, iconTokensExtern } from '../components/icon'
import { Ripple, rippleTokensExtern } from '../components/ripple'
import { ThemeProvider } from '../components/theme-provider'
import { Typography, typographyTokensExtern } from '../components/typography'
import { IconButton, iconButtonTokensExtern } from '../components/icon-button'
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
    Icon,
    Divider,

    /**
     * Those are ready to use
     */
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
    tokens,
    buttonTokensExtern,
    elevationTokensExtern,
    dividerTokensExtern,
    fabTokensExtern,
    fabExtendedTokensExtern,
    iconTokensExtern,
    iconButtonTokensExtern,
    rippleTokensExtern,
    typographyTokensExtern,
}
