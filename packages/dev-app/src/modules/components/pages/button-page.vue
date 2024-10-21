<template>
    <div>
        <Button :appearance="EButtonAppearance.Filled">Filled Button</Button>
        <Button :appearance="EButtonAppearance.FilledTonal">FilledTonal Button</Button>
        <Button :appearance="EButtonAppearance.Elevated">Elevated Button</Button>
        <Button :appearance="EButtonAppearance.Outlined">Outlined Button</Button>
        <Button :appearance="EButtonAppearance.Text">Text Button</Button>
    </div>
</template>

<script setup lang="ts">
import { Button, EButtonAppearance } from '../../../../../vue-mdc/src/components/button'
</script>

<style scoped></style>
