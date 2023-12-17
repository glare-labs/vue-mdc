import { Button } from '@/components/button/index'
import { Divider } from '@/components/divider'
import { Elevation } from '@/components/elevation'
import { Fab, FabExtended } from '@/components/fab'
import { Icon } from '@/components/icon'
import { Ripple } from '@/components/ripple'
import { ThemeProvider } from '@/components/theme-provider/index'
import { Typography } from '@/components/typography'
import { IconButton } from '@/components/icon-button'
import { RegisterAllComponents, RegisterComponents } from '@/utils/register-components'

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

    RegisterAllComponents,
    RegisterComponents,
}