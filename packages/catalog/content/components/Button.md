# Button

[Button in Material](https://m3.material.io/components/buttons/overview)

## DisplayName
```
MAMVButton
```

## appearance
_按钮提供5种表现形式。_

+ filled
+ filled-tonal
+ outlined
+ elevated
+ text

## shape
+ square
+ rounded
+ circular

## size
+ small
+ medium
+ large

## type
指定按钮的默认点击行为。默认值为button。

+ submit
+ reset
+ button

## iconOnly
当iconOnly为true时，忽略按钮的文字，仅显示图标。

## disabled
当disabled为true时，将不再触发按钮的任何事件。

## Example

```html
<template>

    <ThemeProvider>
        <Button @click="remove" size="large" appearance="filled-tonal">Delete</Button>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Button } from 'material-anti-mage-vue'

</script>
```