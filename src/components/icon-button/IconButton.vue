<template>
    <ClassProvider
        :appearance="props.appearance"
        :disabled="props.disabled"
        :type="props.type"
        :toggle="props.toggle"
        :default-selected="props.defaultSelected"
        :model-value="props.modelValue"
        v-slot="{ surface, touch, background, outline, toggle, selected, unselected, disabled }"
    >
        <button
            data-am-icon-button
            v-bind="$attrs"
            :class="[
                surface,
                (props.toggle && state.selected.value) ? selected : unselected, props.toggle && toggle,
                props.disabled && disabled
            ]"
            @click="handleClick"
            :disabled="props.disabled"
            :type="props.type"
        >
            <Ripple></Ripple>

            <div :class="touch"></div>
            <div :class="background"></div>
            <div :class="outline"></div>
            <slot></slot>
        </button>
    </ClassProvider>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Ripple from '../../components/ripple/Ripple.vue'
import ClassProvider from './ClassProvider.vue'
import type { IIconButton } from './IconButton.type'

const props = withDefaults(
    defineProps<IIconButton>(),
    {
        appearance: 'standard',
        disabled: false,
        type: 'button',
        toggle: false,
        defaultSelected: false,
        modelValue: (e) => e.defaultSelected!
    }
)

const emits = defineEmits<{
    'change': [MouseEvent, boolean],
    'update:modelValue': [boolean],
}>()

const state = {
    selected: ref(props.defaultSelected)

}
const setSelected = (e: boolean) => {
    state.selected.value = e
}


watch(() => props.modelValue, () => {
    setSelected(props.modelValue)
}, { immediate: true, })

const handleClick = (e: MouseEvent) => {
    if (props.disabled) return
    setSelected(!state.selected.value)
    emits('update:modelValue', state.selected.value)
    emits('change', e, state.selected.value)
}



</script>

<style scoped>
</style>
