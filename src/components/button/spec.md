# Button

[Button in Material](https://m3.material.io/components/buttons/overview)

## DisplayName
```
MAMVButton
```

## variant
_按钮根据重要程度提供四种配色。primary、secondary、tertiary按照重要程度从重到轻，**非毁灭性操作请勿使用error**（例如无法撤销的行为）。_

+ primary
+ secondary
+ tertiary
+ error

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
指定按钮的默认点击行为。默认值为button。_当type为submit或reset时，需要为Button组件指定form属性的值为一个form的选择器_

+ submit
+ reset
+ button

## form
一个用于获取form的选择器。

## iconOnly
当iconOnly为true时，忽略按钮的文字，仅显示图标。

## disabled
当disabled为true时，将不再触发按钮的任何事件。

## Example

```html
<template>

    <ThemeProvider>
        <Button @click="remove" size="large" variant="error">Delete</Button>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Button } from 'material-anti-mage-vue'

</script>
```