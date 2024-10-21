<template>
    <div>
        <CircularProgress indeterminate></CircularProgress>
        <CircularProgress :value="0.25"></CircularProgress>

        <LinearProgress indeterminate></LinearProgress>
        <LinearProgress :value="0.25"></LinearProgress>
    </div>
</template>

<script setup lang="ts">
import { CircularProgress, LinearProgress } from '../../../../../vue-mdc/src/components/progress'

</script>

<style scoped></style>
