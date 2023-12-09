# IconButton
图标按钮。

[IconButton in Material](https://m3.material.io/components/icon-buttons/overview)


## DisplayName
```
MAMVIconButton
```

## appearance
_按钮提供4种表现形式。_

+ filled
+ filled-tonal
+ outlined
+ standard

## size
_图标大小。_

+ small
+ medium
+ large

## shape
+ square
+ rounded
+ circular

## default-selected
组件的初始选择状态。若设置default-selected属性，则组件默认为已选择状态。

注意，default-selected需要与toggle一同使用。

## toggle
用于设置图标按钮的可选中的属性。当设置toggle属性后，图标按钮可以在选择与未选择之上切换。

## disabled
图标按钮的可用性。

## Example

```html
<template>

    <ThemeProvider>
        <IconButton size="large" appearance="filled-tonal" toggle>
            <Icon>favorite<Icon>
        </IconButton>
    </ThemeProvider>

</template>

<script setup lang="ts">
import { ThemeProvider, IconButton, Icon } from 'material-anti-mage-vue'

</script>
```