import { css } from 'aphrodite/no-important'
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
            </span>
        )
    },
})