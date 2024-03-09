<template>
    <StyleProvider v-slot="{ surface, outline, type, button, background, label, icon, touchTarget, elevated, disabled }">
        <div
            v-bind="$attrs"
            :class="[surface, type[props.type], props.elevated && elevated, props.disabled && disabled]"
        >
            <Ripple></Ripple>
            <Elevation></Elevation>
            <div :class="outline"></div>
            <div :class="background"></div>
            <button :class="button">
                <span
                    v-if="$slots.icon"
                    :class="icon"
                >
                    <slot name="icon"></slot>
                </span>
                <span :class="label">
                    <slot></slot>
                </span>
                <span :class="touchTarget"></span>
            </button>
        </div>
    </StyleProvider>
</template>

<script setup lang="ts">
import { type IChipProps } from './Chip.type'
import StyleProvider from './StyleProvider.vue'
import Ripple from '../ripple/Ripple.vue'
import Elevation from '../elevation/Elevation.vue'

const props = withDefaults(defineProps<Partial<IChipProps>>(), {
    type: 'assist',
    disabled: false,
    elevated: false
})
</script>

<style scoped>
</style>
