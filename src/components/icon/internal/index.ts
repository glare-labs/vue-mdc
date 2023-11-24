import { toRef } from 'vue'
import { renderIcon } from './Icon.render'

export const Icon = toRef(() => renderIcon())
