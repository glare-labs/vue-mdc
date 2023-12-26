<template>
    <div class="relative">
        <ClientOnly>
            <IconButton
                appearance="standard"
                @click="() => isExpanded = !isExpanded"
            >
                <Icon>draw</Icon>
            </IconButton>
        </ClientOnly>
        <div
            v-if="isExpanded"
            class="scrim"
            @click="() => isExpanded = false"
        ></div>
        <div
            v-show="isExpanded"
            class="box rounded-3xl overflow-clip bg-[--md-sys-color-surface-container] absolute right-0 z-20"
        >
            <div class="p-6 h-full overflow-auto">
                <label for="r">R</label>
                <input
                    id="r"
                    type="range"
                    v-model="color.r"
                    min="0"
                    max="255"
                />
                <label for="g">G</label>
                <input
                    id="g"
                    type="range"
                    v-model="color.g"
                    min="0"
                    max="255"
                />
                <label for="b">B</label>
                <input
                    id="b"
                    type="range"
                    v-model="color.b"
                    min="0"
                    max="255"
                />

                <div
                    class="w-full h-16 grid place-content-center border rounded-2xl bg-[--md-sys-color-primary] text-[--md-sys-color-on-primary]">
                    SourceColor
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ThemeProvider } from '../app.vue'


const color = reactive({
    r: 0,
    g: 0,
    b: 0
})

const isExpanded = ref(false)

const rgbToHex = (r: number, g: number, b: number) => "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
const theme = inject<ThemeProvider>('theme-provider')!

watch(color, () => {
    const hex = rgbToHex(color.r, color.g, color.b)
    theme.sourceColor.value = hex
})

</script>

<style scoped>
.scrim {
    @apply bg-[--md-sys-color-scrim] opacity-[0.2] w-screen h-screen fixed left-0 top-0 z-20;
}

.box {
    height: 240;
    animation: expanded-animation 500ms;
}

label {
    @apply select-none pointer-events-none;
}

@keyframes expanded-animation {
    from {
        max-height: 0px;
        height: 0px;
    }

    to {
        max-height: 240;
        height: 240;
    }
}
</style>
