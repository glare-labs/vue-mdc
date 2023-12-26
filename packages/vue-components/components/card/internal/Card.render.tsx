import { defineComponent } from 'vue'
import { props, slots } from './Card.type'
import { css } from 'aphrodite/no-important'
import { sharedCardStyles } from './Card.styles'
import { Elevation } from '../../elevation'
import { Ripple } from '../../ripple'

export const renderCard = defineComponent({
    props,
    slots,
    computed: {
        classes() {
            return ({
                container: css(
                    sharedCardStyles.container,
                    sharedCardStyles.rounded,
                    // @ts-ignore
                    sharedCardStyles[this.appearance],
                ),
            })
        },
    },
    render() {
        return (
            <div class={this.classes.container}>
                <Elevation></Elevation>
                <Ripple></Ripple>

                {this.$slots.default && this.$slots.default()}
            </div>
        )
    },
    components: {
        Elevation,
        Ripple,
    }
})
