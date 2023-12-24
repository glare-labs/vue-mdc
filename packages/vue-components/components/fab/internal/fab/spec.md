# Fab

[Fab in Material](https://m3.material.io/components/floating-action-button/overview)

## DisplayName
```
MAMVFab
```

## variant
+ primary
+ secondary
+ tertiary
+ surface

## size
+ small
+ medium
+ large

## lowered
当lowered值设为true时降低该组件的elevation-level到1。

## disabled
当disabled为true时，将不再触发按钮的任何事件。

## Example

```html
<template>

    <ThemeProvider>
        <Fab @click="remove" variant="primary">
            <Icon>edit</Icon>
        </Fab>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Fab， Icon } from 'material-anti-mage-vue'

</script>
```