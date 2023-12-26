# FabExtended

[Fab in Material](https://m3.material.io/components/floating-action-button/overview)

## DisplayName
```
MAMVFabExtended
```

## variant
+ primary
+ secondary
+ tertiary
+ surface

## icon-position
图标显示位置。

+ left
+ right

## lowered
当lowered值设为true时降低该组件的elevation-level到1。

## disabled
当disabled为true时，将不再触发按钮的任何事件。

## Example

```html
<template>

    <ThemeProvider>
        <FabExtended @click="remove" variant="primary">
            <template #icon>
                <Icon>edit</Icon>
            </template>
            Edit
        </FabExtended>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, FabExtended, Icon } from 'material-anti-mage-vue'

</script>
```