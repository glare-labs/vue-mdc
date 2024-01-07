import { Button, buttonTokens } from '../components/button'
import { Divider, dividerTokens } from '../components/divider'
import { Elevation, elevationTokens } from '../components/elevation'
import { Fab, FabExtended, fabExtendedTokens, fabTokens } from '../components/fab'
import { Icon, iconTokens } from '../components/icon'
import { Ripple, rippleTokens } from '../components/ripple'
import { ThemeProvider } from '../components/theme-provider'
import { Typography, typographyTokens } from '../components/typography'
import { IconButton, iconButtonTokens } from '../components/icon-button'
import { RegisterAllComponents, RegisterAllLayouts, RegisterComponents } from '../utils/register-components'
import { tokens } from '../utils/tokens'
import { Checkbox, checkboxTokens } from '../components/checkbox'
import { Window } from '../layouts/window/Window.render'
import { windowDirective } from '../layouts/window/Window.directive'
import { Flex } from '../layouts/flex/Flex.render'
import { flexDirective } from '../layouts/flex/Flex.directive'
import { Padding } from '../layouts/padding/Padding.render'
import { paddingDirective } from '../layouts/padding/Padding.directive'
import { Margin } from '../layouts/margin/Margin.render'
import { marginDirective } from '../layouts/margin/Margin.directive'

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
     * Unstable
     */
    Checkbox,

    /**
     * Layouts
     */
    Window,
    Padding,
    Margin,
    Flex,

    /**
     * Directives
     */
    windowDirective,
    paddingDirective,
    marginDirective,
    flexDirective,

    /**
     * Plugins
     */
    RegisterAllComponents,
    RegisterComponents,
    RegisterAllLayouts,

    /**
     * Design system
     */
    tokens,
    buttonTokens,
    elevationTokens,
    dividerTokens,
    fabTokens,
    fabExtendedTokens,
    iconTokens,
    iconButtonTokens,
    rippleTokens,
    typographyTokens,
    checkboxTokens,
}
