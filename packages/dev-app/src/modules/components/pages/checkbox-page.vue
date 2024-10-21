<template>
    <div>
        <Checkbox></Checkbox>
        <Checkbox disabled></Checkbox>
        <Checkbox indeterminate></Checkbox>
        <Checkbox
            indeterminate
            disabled
        ></Checkbox>
        <Checkbox default-checked></Checkbox>
        <Checkbox
            default-checked
            disabled
        ></Checkbox>

        <Checkbox touch-target="wrapper"></Checkbox>
        <Checkbox
            touch-target="wrapper"
            disabled
        ></Checkbox>
        <Checkbox
            touch-target="wrapper"
            indeterminate
        ></Checkbox>
        <Checkbox
            touch-target="wrapper"
            indeterminate
            disabled
        ></Checkbox>
        <Checkbox
            touch-target="wrapper"
            default-checked
        ></Checkbox>
        <Checkbox
            touch-target="wrapper"
            default-checked
            disabled
        ></Checkbox>
    </div>
</template>

<script setup lang="ts">
import { Checkbox } from '../../../../../vue-mdc/src/components/checkbox'

</script>

<style scoped></style>
