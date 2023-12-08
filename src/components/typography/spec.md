# Typography
Typography组件提供一套符合规范的段落标签。

[Typography in Material](https://m3.material.io/styles/typography/overview)

## DisplayName
```
MAMVTypography
```

## variant
字体相关（字体大小、字体宽度、行高）的变体。

+ label-small
+ label-medium
+ label-large
+ body-small
+ body-medium
+ body-large
+ title-small
+ title-medium
+ title-large
+ headline-small
+ headline-medium
+ headline-large
+ display-small
+ display-medium
+ display-large

## Example

```html
<template>

    <ThemeProvider sourceColor="#2A6B3C">

        <Typography variant="label-medium">Font Variant</Typography>
        <Typography>Font Variant</Typography>
        <Typography variant="title-medium">Font Variant</Typography>
        <Typography variant="headline-medium">Font Variant</Typography>

    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Typography } from 'material-anti-mage-vue'

</script>
```