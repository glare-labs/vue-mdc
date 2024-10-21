<template>
    <div>
        <Switch></Switch>
        <Switch disabled></Switch>

        <Switch default-selected></Switch>
        <Switch
            default-selected
            disabled
        ></Switch>

        <Switch with-icon></Switch>
        <Switch
            with-icon
            disabled
        ></Switch>
        <Switch
            with-icon
            default-selected
        ></Switch>
        <Switch
            with-icon
            default-selected
            disabled
        ></Switch>

        <Switch
            with-icon
            with-icon-selected-only
            :default-selected="false"
        ></Switch>
        <Switch
            with-icon
            with-icon-selected-only
        ></Switch>
        <Switch
            with-icon
            with-icon-selected-only
            default-selected
            disabled
        ></Switch>

    </div>
</template>

<script setup lang="ts">
import { Switch } from '../../../../../vue-mdc/src/components/switch'

</script>

<style scoped></style>
