/**
 * 用于管理CenterAlignedTopAppbar组件启用与关闭[sticky状态]和[on-scroll状态]的scroll事件处理函数
 * @example
 * ```html
 * <div class="max-h-screen min-h-screen overflow-auto" @scroll="topAppbarScrolledEvent">
 *   <CenterAlignedTopAppbar title="Title" forcedSticky></CenterAlignedTopAppbar>
 * </div>
 * ```
 * 
 * **请确保外部的容器可以滚动, 并且容器拥有高度**
 */
export const topAppbarScrolledEvent = (e: Event) => {
    const target = e.target as HTMLElement
    const topAppbar = target.querySelector('[data-is-top-app-bar="true"]') as HTMLElement


    if (target.scrollTop - topAppbar.offsetTop === 0 && (topAppbar.offsetTop === 0)) {
        if (topAppbar.getAttribute('data-is-forced-sticky') === 'false' && topAppbar.classList.contains(css.sticky)) {
            topAppbar.classList.remove(css.sticky)
        }
        if (topAppbar.getAttribute('data-is-forced-on-scroll') === 'false' && topAppbar.classList.contains(css['on-scroll'])) {
            topAppbar.classList.remove(css['on-scroll'])
        }
        return
    }
    if ((target.scrollTop - topAppbar.offsetTop) < 1 && target.scrollTop - topAppbar.offsetTop > -1) return
    if ((target.scrollTop) > topAppbar.offsetTop) {
        if (topAppbar.getAttribute('data-is-forced-sticky') === 'false' && !topAppbar.classList.contains(css.sticky)) {
            topAppbar.classList.add(css.sticky)
        }
        if (topAppbar.getAttribute('data-is-forced-on-scroll') === 'false' && !topAppbar.classList.contains(css['on-scroll'])) {
            topAppbar.classList.add(css['on-scroll'])
        }
    } else {
        if (topAppbar.getAttribute('data-is-forced-sticky') === 'false' && topAppbar.classList.contains(css.sticky)) {
            topAppbar.classList.remove(css.sticky)
        }
        if (topAppbar.getAttribute('data-is-forced-on-scroll') === 'false' && topAppbar.classList.contains(css['on-scroll'])) {
            topAppbar.classList.remove(css['on-scroll'])
        }
    }

}
