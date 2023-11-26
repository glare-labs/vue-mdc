# IconButton
图标按钮。

[IconButton in Material](https://m3.material.io/components/icon-buttons/overview)


## DisplayName
```
MAMVIconButton
```

## variant
_按钮变体。与普通按钮Button组件一样拥有primary、secondary、tertiary、error四个变体，但IconButton多出一个surface变体。注意，surface变体不能和toggle属性一同使用。_

+ surface
+ primary
+ secondary
+ tertiary
+ error

## size
_图标大小。_

+ small
+ medium
+ large

## selected
组件的初始选择状态。若设置selected属性，则组件默认为已选择状态。

注意，selected需要与toggle一同使用。

## toggle
用于设置图标按钮的可选中的属性。当设置toggle属性后，图标按钮可以在选择与未选择之上切换。

## disabled
图标按钮的可用性。

## Example

```html
<template>

    <ThemeProvider>
        <IconButton size="large" variant="surface" toggle>
            <Icon>favorite<Icon>
        </IconButton>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, IconButton, Icon } from 'material-anti-mage-vue'

</script>
```