import { css } from 'aphrodite'
import { defineComponent } from 'vue'
import { elevationStyles } from './Elevation.styles'
import { tokens } from '@/utils/tokens'

export const renderElevation = defineComponent({
    name: 'MAMVElevation',
    render() {
        return (
            <span
                aria-hidden="true"
                class={css(elevationStyles.root)}
            >
                <span
                    class={elevationStyles.before}
                    style={{
                        boxShadow: `0px calc(1px*(clamp(0, var(--elevation-level), 1) + clamp(0, var(--elevation-level) - 3, 1) + 2*clamp(0, var(--elevation-level) - 4, 1))) calc(1px*(2*clamp(0, var(--elevation-level), 1) + clamp(0, var(--elevation-level) - 2, 1) + clamp(0, var(--elevation-level) - 4, 1))) 0px ${tokens.shadow}`,
                    }}
                ></span>
                <span
                    class={css(elevationStyles.after)}
                    style={{
                        boxShadow: `0px calc(1px*(clamp(0, var(--elevation-level), 1) + clamp(0, var(--elevation-level) - 1, 1) + 2*clamp(0, var(--elevation-level) - 2, 3))) calc(1px*(3*clamp(0, var(--elevation-level), 2) + 2*clamp(0, var(--elevation-level) - 2, 3))) calc(1px*(clamp(0, var(--elevation-level), 4) + 2*clamp(0, var(--elevation-level) - 4, 1))) ${tokens.shadow}`,
                    }}
                ></span>
            </span>
        )
    },
})