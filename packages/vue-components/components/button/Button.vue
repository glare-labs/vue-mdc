<template>
    <ClassProvider
        :appearance="props.appearance"
        :type="props.type"
        :shape="props.shape"
        :disabled="props.disabled"
        v-slot="{ surface, background, outline, button, disabled }"
    >
        <div
            v-bind="$attrs"
            :class="[surface, props.disabled && disabled]"
            :aria-disabled="props.disabled"
        >
            <Ripple></Ripple>
            <Elevation></Elevation>

            <div :class="background"></div>
            <div :class="outline"></div>

            <button
                :class="button"
                :type="props.type"
                :disabled="props.disabled"
                :aria-disabled="props.disabled"
            >
                <slot name="icon"></slot>
                <span class="label">
                    <slot></slot>
                </span>
            </button>
        </div>
    </ClassProvider>
</template>

<script setup lang="ts">
import ClassProvider from './ClassProvider.vue'
import Elevation from '../../components/elevation/Elevation.vue'
import Ripple from '../../components/ripple/Ripple.vue'
import type { IButton } from './Button.type'

const props = withDefaults(
    defineProps<IButton>(),
    {
        appearance: 'filled',
        disabled: false,
        type: 'button',
        shape: 'circular',
    }
)
</script>
