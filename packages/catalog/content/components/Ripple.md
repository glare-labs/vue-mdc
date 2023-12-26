# Ripple
在触发点击事件时显示涟漪动画。

父元素需要被标记为relative。

```css
position: relative;
```

## DisplayName
```
MAMVRipple
```

## Example

```html
<template>

    <ThemeProvider>
        
        <div class="box">
            <Ripple></Ripple>
        </div>

    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, Ripple } from 'material-anti-mage-vue'

</script>

<style scoped>
.box {
    height: 400px;
    width: 400px;
    background-color: gray;
    position: relative;
}

</style>
```