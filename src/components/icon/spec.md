# Icon

Icon组件的正常运作需要依赖`material-symbols`，需要手动导入到项目中。

1. Download
```
npm i material-symbols
```

2. Import
```typescript
import 'material-symbols'
```

## DisplayName
```
MAMVIcon
```

## Size
_图标大小。_

+ small
+ medium
+ large

## variant
_图标变体。_

[Icon & Material Symbol styles](https://m3.material.io/styles/icons/applying-icons)

+ outlined
+ rounded
+ sharp

## Example
如下代码是在引入相关依赖后的代码示例。

```html
<template>

    <ThemeProvider>
        <Icon size="large" variant="rounded">group</Icon>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Icon } from 'material-anti-mage-vue'

</script>
```