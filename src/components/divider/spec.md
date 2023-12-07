# Divider

[Divider in Material](https://m3.material.io/components/divider/overview)

## DisplayName
```
MAMVDivider
```

## mode
mode属性控制线段的左右间距。

+ no-inset
+ middle-inset
+ inset-left
+ inset-right

## Example

```html
<template>

    <ThemeProvider>
        <Divider mode="middle-inset"></Divider>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Divider } from 'material-anti-mage-vue'

</script>
```