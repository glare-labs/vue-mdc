import { SlotsType, defineComponent } from 'vue'
import { Elevation } from '../elevation/Elevation'
import { propsShared, ISlotsShared } from './base'
import css from './topAppbar.module.css'
import cssBase from './base.module.css'

const props = propsShared
const slots = {} as SlotsType<ISlotsShared>

export const CenterAlignedTopAppbar = defineComponent({
    name: 'GlareUi-CenterAlignedTopAppbar',
    props,
    slots,
    render() {
        const renderLeadingIcon = (
            <span class={cssBase['leading-icon']}>
                {this.$slots.leadingIcon && this.$slots.leadingIcon()}
            </span>
        )
        const renderTrailingIcon = (
            <span class={cssBase['trailing-icon']}>
                {this.$slots.trailingIcon && this.$slots.trailingIcon()}
            </span>
        )
        const renderTitle = (
            <span class={cssBase.headline}>
                {this.headline}
            </span>
        )

        return (
            <div
                data-is-top-app-bar="true"
                data-is-forced-sticky={this.forcedSticky}
                class={[cssBase.container, this.forcedSticky && cssBase['on-scroll'], css['center-aligned']]}
            >
                <div aria-hidden="true" class={cssBase.background}></div>
                <div aria-hidden="true" class={cssBase.outline}></div>

                <div class={cssBase['center-aligned-grid']}>
                    {renderLeadingIcon}
                    {renderTitle}
                    {renderTrailingIcon}
                </div>
                <Elevation></Elevation>
            </div>
        )
    }
})
