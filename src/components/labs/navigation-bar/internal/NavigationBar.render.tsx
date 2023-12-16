import { defineComponent } from 'vue'
import { props, slots } from './NavigationBar.type'
import { css } from 'aphrodite/no-important'
import { sharedNavigationBarStyles } from './NavigationBar.styles'
import { Icon } from '@/lib'

export const renderNavigationBar = defineComponent({
    props,
    slots,
    computed: {
        classes() {
            return ({
                container: css(
                    sharedNavigationBarStyles.container,
                    sharedNavigationBarStyles.label,
                ),
                tab: css(
                    sharedNavigationBarStyles.tab,
                    sharedNavigationBarStyles.stateLayer,
                    sharedNavigationBarStyles.icon,
                    sharedNavigationBarStyles.label,

                ),
                indicator: css(
                    sharedNavigationBarStyles.indicator,
                ),
                activeIndicator: css(
                    sharedNavigationBarStyles.indicator,
                    sharedNavigationBarStyles.activeIndicator,
                ),
            })
        },
    },
    render() {
        return (
            <span class={this.classes.container}>
                {
                    this.tabs && this.tabs.map((e, i) => (
                        <div class={this.classes.tab} onClick={() => this.setActiveIndex(i)}>
                            <span class={this.isActiveIndex(i) ? this.classes.activeIndicator : this.classes.indicator}>
                                <Icon>send</Icon>
                            </span>
                            {e}
                        </div>
                    ))
                }
            </span>
        )
    },
    data: () => ({
        activeIndex: 0,
    }),
    methods: {
        setActiveIndex(index: number) {
            this.activeIndex = index
        },
        isActiveIndex(index: number) {
            return index === this.activeIndex
        },

    },
    created() {
        this.activeIndex = this.defaultActiveIndex
    },
    mounted() {
        console.log('received', this.tabs)

    },
})
