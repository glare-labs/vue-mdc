# Divider
分隔线。

[Divider in Material](https://m3.material.io/components/divider/overview)

## DisplayName
```
MAMVDivider
```

## direction
分隔线的方向。

+ horizontal
+ vertical

## variant
variant属性控制分隔线的左（上）右（下）间距。

+ no-inset
+ middle-inset
+ inset-left
+ inset-right

## Example

```html
<template>

    <ThemeProvider>
        <Divider variant="middle-inset"></Divider>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Divider } from 'material-anti-mage-vue'

</script>
```