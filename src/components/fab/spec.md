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

## iconOnly
当iconOnly为true时，忽略按钮的文字，仅显示图标。

## disabled
当disabled为true时，将不再触发按钮的任何事件。

## Example

```html
<template>

    <ThemeProvider>
        <Fab @click="remove" variant="primary">Create</Fab>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Fab } from 'material-anti-mage-vue'

</script>
```