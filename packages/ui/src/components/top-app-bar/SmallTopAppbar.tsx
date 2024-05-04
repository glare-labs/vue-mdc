
import { SlotsType, defineComponent } from 'vue'
import { ISlotsShared, propsShared } from './base'
import css from './topAppbar.module.css'
import cssBase from './base.module.css'
import { Elevation } from '../elevation/Elevation'

const props = propsShared
const slots = {} as SlotsType<Pick<ISlotsShared, 'leadingIcon'> & {
    trailingIcons: void
}>

export const SmallTopAppbar = defineComponent({
    name: 'GlareUi-SmallTopAppbar',
    props,
    slots,
    render() {
        const renderLeadingIcon = this.$slots.leadingIcon && <span class={cssBase['leading-icon']}>{this.$slots.leadingIcon()}</span>
        const renderTrailingIcons = this.$slots.trailingIcons && <span class={cssBase['trailing-icons']}>{this.$slots.trailingIcons()}</span>
        const renderTitle = <span class={cssBase.headline}>{this.headline}</span>
        return (
            <div
                data-is-top-app-bar="true"
                data-is-forced-sticky={this.forcedSticky}
                class={[cssBase.container, this.forcedSticky && cssBase['on-scroll'], css.small]}
            >
                <Elevation></Elevation>

                <div aria-hidden="true" class={cssBase.background}></div>
                <div aria-hidden="true" class={cssBase.outline}></div>

                <div class={cssBase['small-grid']}>
                    {renderLeadingIcon}
                    {renderTitle}
                    {renderTrailingIcons}
                </div>
            </div>
        )
    }
})
