<template>
    <NuxtLayout
        name="page-view-layout"
        headline="Ripple"
    >

        <NuxtLayout
            name="component-layout"
            headline="Ripple"
        >

            <div class="ripple-box">
                Ripple Component
                <Ripple></Ripple>
            </div>
            <div
                class="ripple-box"
                v-ripple
            >v-ripple</div>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="v-ripple-hover-color, v-ripple-pressed-color"
        >
            <div
                class="ripple-box"
                v-ripple
                v-ripple-hover-color="'red'"
                v-ripple-pressed-color="'green'"
            >v-ripple, color, opacity</div>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Attach & Detach"
        >
            <div
                id="b-box"
                class="ripple-box"
            >
                Target Box
                <Ripple
                    id="my-ripple"
                    for="attachable-controller-ripple"
                ></Ripple>
            </div>
            <div class="list-2">
                <div
                    id="a-box"
                    class="ripple-box"
                >
                    Attach/Detach Target Box
                </div>
                <div class="actions">
                    <Button @click="() => handleClick('attach')">Attach</Button>
                    <Button @click="() => handleClick('detach')">Detach</Button>
                </div>
            </div>

            <div
                id="attachable-controller-ripple"
                class="ripple-box"
            >
                Activate Target Box
            </div>
        </NuxtLayout>

        <NuxtLayout
            name="component-layout"
            headline="Attach & Detach 2"
        >
            <div class="ripple-box">
                Switch target automly

                <div class="ripple-box">
                    <Ripple :for="currentOpt"></Ripple>
                </div>
                <div
                    class="ripple-box"
                    id="a001"
                >
                </div>
                <div
                    class="ripple-box"
                    id="a002"
                >
                </div>


                <select v-model="currentOpt">
                    <option>a001</option>
                    <option>a002</option>
                </select>
            </div>
        </NuxtLayout>

    </NuxtLayout>




</template>

<script setup lang="ts">
import { AttachableControllerSymbol, type AttachableControllerHost, Ripple, vRipple, vRippleHoverColor, vRipplePressedColor, Button } from '../../../../ui/src'


const handleClick = (mode: 'attach' | 'detach') => {
    const ripple = (document.querySelector('#my-ripple') as AttachableControllerHost)[AttachableControllerSymbol]
    const box = document.querySelector('#a-box') as HTMLElement
    if (mode === 'attach') {
        ripple?.attach(box)
    } else {
        ripple?.detach()
    }
}

const currentOpt = ref<string>('a001')
</script>

<style scoped>
.list-1 {
    display: grid;
    grid-template-columns: repeat(2, 128px);
}

.list-2 {
    display: flex;
    gap: 4px;
}

.actions {
    display: flex;
    flex-wrap: 1;
    align-items: center;

}

.ripple-box {
    position: relative;
    padding-left: 16px;
    padding-right: 16px;
    max-width: 192px;
    min-height: 64px;
    border: 1px solid var(--md-sys-color-outline);
    display: grid;
    place-content: center;
    user-select: none;
    margin-top: 16px
}
</style>
