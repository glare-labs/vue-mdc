
export type ElevationLevelType = 0 | 1 | 2 | 3 | 4 | 5

export interface IElevation {

    /**
     * level控制Elevation组件渲染的阴影浓度(影响被Elevation组件控制的元素的
     *   视觉层级), level越大层级越高.
     * 可通过tokens对象获取可供使用的level参数
     * @default 0
     */
    level?: ElevationLevelType

}
