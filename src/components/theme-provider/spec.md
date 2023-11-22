# ThemeProvider
通过ThemeProvider组件，生成一组用于此组件的CSS变量，CSS变量的有效范围为ThemeProvider组件内部。

生成结果来自`@material/material-color-utilities`，如果你正在使用`@material/web`，请注意，当ThemeProvider挂载后，此组件将在有效范围内覆盖`@material/web`的组件的样式。

## dark
`dark: Boolean`

当值为true时启用深色模式。

## sourceColor
`sourceColor: String`

第三方库`@material/material-color-utilities`生成的主题配色来源于一个名为sourceColor的参数。其输入应该为一个十六进制的颜色代码，例如`#2A6B3C`。

_注意，并非所有颜色代码的输入都有对应的主题配色输出，第三方库`@material/material-color-utilities`的设计系统针对众多用户普遍不喜欢的颜色进行了一个排除，同时设计系统的结果满足设计规范。_

## Example
如下代码示例提供了一个名为sourceColor的参数。

```html
<template>

    <ThemeProvider sourceColor="#2A6B3C">
        <!-- ... -->
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider } from 'material-anti-mage-vue'

</script>
```