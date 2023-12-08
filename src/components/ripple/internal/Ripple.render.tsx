import { defineComponent } from 'vue'
import { props } from './Ripple.type'
import { css } from 'aphrodite/no-important'
import { sharedRippleStyles } from './Ripple.styles'

export const renderRipple = defineComponent({
    name: 'MAMVRipple',
    props,
    computed: {
        classes() {
            return {
                container: css(
                    sharedRippleStyles.root,
                ),
                ripple: css(
                    sharedRippleStyles.ripple,
                )
            }
        },
    },
    render() {
        return (
            <span class={this.classes.container}>

            </span>
        )
    },
    methods: {
        attach(event: MouseEvent) {
            if(this.disabled) return
            
            const target = event.target as HTMLElement
            
            const {
                width,
                height,
                x,
                y
            } = target.getBoundingClientRect()
            const size = Math.max(width, height)
            const position = {
                x: (event.clientX - x - width / 2),
                y: (event.clientY - y - width / 2),
            }
            
            const circle = document.createElement('span')
            circle.style.left = position.x + 'px'
            circle.style.top = position.y + 'px'
            circle.style.height = size + 'px'
            circle.style.width = size + 'px'
            circle.classList.add(this.classes.ripple)
            
            circle.animate(
                [
                    {
                        transform: 'scale(0)',
                        opacity: 0.25,
                    },
                    {
                        transform: 'scale(1)',
                        opacity: 0.25
                    },
                ],
                {
                    duration: 3000,
                    iterations: 1,
                }
            )

            this.$el.appendChild(circle)
            
            const resumeRippleEvent = () => {
                circle.animate(
                    [
                        {
                            transform: 'scale(2)',
                            opacity: 0,
                        },
                    ],
                    {
                        duration: 250,
                        iterations: 1,
                    }
                )
                setTimeout(() => {
                    circle.remove()
                }, 250)
                window.removeEventListener('mouseup', resumeRippleEvent)
            }
            setTimeout(() => {
                if(circle != undefined) {
                    resumeRippleEvent()
                }
            }, 3000)
            window.addEventListener('mouseup', resumeRippleEvent)
        },

    },
    mounted() {
        (this.$parent?.$el as HTMLElement).addEventListener('mousedown', this.attach)
    },
    beforeUnmount() {
        (this.$parent?.$el as HTMLElement).removeEventListener('mousedown', this.attach)
    },
})
