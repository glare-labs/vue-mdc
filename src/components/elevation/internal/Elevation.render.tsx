import { css } from 'aphrodite'
import { defineComponent } from 'vue'
import { elevationStyles } from './Elevation.styles'

export const renderElevation = defineComponent({
    name: 'MAMVElevation',
    render() {
        return (
            <span
                aria-hidden="true"
                class={css(elevationStyles.root)}
            >
                <span
                    aria-hidden="true"
                    class={css(elevationStyles.before)}
                ></span>
                <span
                    aria-hidden="true"
                    class={css(elevationStyles.after)}
                ></span>
            </span>
        )
    },
})