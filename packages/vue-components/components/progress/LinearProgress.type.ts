import type { IModelValueProp } from '../../types/model-value.type'
import type { IProgressProps } from './Progress.type'

export interface ILinearProgressProps extends IProgressProps, IModelValueProp<number> {

    /**
     * Between 0 and [max]
     * @default 1
     */
    buffer: number
}

