import { toRef } from 'vue'
import { renderButton } from './Button.render'

export const Button = toRef(() => renderButton())
