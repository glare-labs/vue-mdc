import { SlotsType, defineComponent } from 'vue'
import { ISlotsShared, propsShared } from './base'
import css from './topAppbar.module.css'
import cssBase from './base.module.css'

const props = propsShared
const slots = {} as SlotsType<Pick<ISlotsShared, 'leadingIcon'> & {
    trailingIcons: void
}>

export const LargeTopAppbar = defineComponent({
    props,
    slots,
    render() {
        const renderLeadingIcon = (
            <span class={cssBase['leading-icon']}>
                {this.$slots.leadingIcon && this.$slots.leadingIcon()}
            </span>
        )
        const renderTrailingIcons = (
            <span class={cssBase['trailing-icons']}>
                {this.$slots.trailingIcons && this.$slots.trailingIcons()}
            </span>
        )
        const renderTitle = <span class={cssBase.headline}>{this.headline}</span>
        return (
            <div
                data-is-top-app-bar="true"
                data-is-forced-sticky={this.forcedSticky}
                class={[cssBase.container, this.forcedSticky && cssBase['on-scroll'], css.large]}
            >
                <div aria-hidden="true" class={cssBase.background}></div>
                <div aria-hidden="true" class={cssBase.outline}></div>

                <div class={cssBase['large-grid']}>
                    {renderLeadingIcon}
                    {renderTrailingIcons}
                    {renderTitle}
                </div>
            </div>
        )
    }
})
