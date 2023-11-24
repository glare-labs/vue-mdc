# Elevation
Elevation通过使用一个CSS变量`--elevation-level`来控制阴影等级。通过此组件，能够轻易地向一个定位为relative的盒子添加阴影。

[Elevation in Material](https://m3.material.io/styles/elevation/overview)

## Display
```
MAMVElevation
```

## CSS Property
使Elevation组件能够正常运作，必须向Elevation的基组件提供如下两个CSS属性：

```css
position: relative;
--elevation-level: 3;
```

`--elevation-level`从0开始，当值为0时不显示任何阴影。

## Example
如下代码通过CSS变量显示了一个有阴影的盒子。

```html
<template>

    <ThemeProvider>
        <div class="elevation box">
            <Elevation></Elevation>
        </div>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Elevation } from 'material-anti-mage-vue'

</script>

<style scoped>
.box {
    height: 320px;
    width: 320px;
    position: relative;
}
.elevation {
    --elevation-level: 0;
}
.elevation:hover {
    --elevation-level: 3;
}
.elevation:active {
    --elevation-level: 0;
}
</style>
```