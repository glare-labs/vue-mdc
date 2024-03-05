import type { IModelValueProp } from '../../types/model-value.type'
import type { IProgressProps } from './Progress.type'

export interface ICircularProgressProps extends IProgressProps, IModelValueProp<number> {
}

