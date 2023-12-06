import { defineComponent } from 'vue'
import { props, slots } from './component.type'

export const renderComponent = defineComponent({
    props,
    slots,
    render() {
        return (
            <div>

            </div>
        )
    },
})
