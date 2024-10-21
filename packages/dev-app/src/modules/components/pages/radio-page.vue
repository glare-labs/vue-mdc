<template>
    <div>
        <Radio></Radio>
        <Radio disabled></Radio>
        <Radio default-checked></Radio>
        <Radio
            default-checked
            disabled
        ></Radio>

        <Radio touch-target="wrapper"></Radio>
        <Radio
            touch-target="wrapper"
            disabled
        ></Radio>
        <Radio
            touch-target="wrapper"
            default-checked
        ></Radio>
        <Radio
            touch-target="wrapper"
            default-checked
            disabled
        ></Radio>
    </div>
</template>

<script setup lang="ts">
import { Radio } from '../../../../../vue-mdc/src/components/radio'

</script>

<style scoped></style>
