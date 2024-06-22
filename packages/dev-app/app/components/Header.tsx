import type { PropType, SlotsType } from 'vue'
import { ETypographyVariant, Typography } from '../../../ui/src'

class HeaderComponent {
    private props = {
        headline: {
            type: String as PropType<string>,
            default: `Untitled`
        }
    }
    private slots = {} as SlotsType<{
        start: void
        end: void
    }>
    public component = defineComponent({
        name: `DevApp-Header`,
        props: this.props,
        slots: this.slots,
        render() {
            const renderStart = this.$slots.start && (
                <span class="w-[44px] flex-shrink-0 flex-grow-0 ml-[24px]">
                    {this.$slots.start()}
                </span>

            )
            const renderEnd = this.$slots.end && (
                <span class="flex-grow-0 flex-shrink-0 mr-[24px] flex gap-0.5">
                    {this.$slots.end()}
                </span>

            )
            const renderHeadline = (
                <Typography variant={ETypographyVariant.TitleMedium} class={["flex-grow", "flex-shrink", !this.$slots.start && "ml-[24px]"]}>{this.headline}</Typography>
            )
            return (
                <header class="h-[64px] flex items-center gap-3">
                    {renderStart}
                    {renderHeadline}
                    {renderEnd}
                </header>
            )
        }
    })
}

export default new HeaderComponent().component
