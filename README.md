# material-anti-mage-vue

_出于练习Vue和TypeScript的目的，项目创建者创建了此项目。_

**此项目正处于积极开发阶段。**

Material Anti-Mage Vue提供易于使用的简单Vue组件，提供完善的类型支持，基于Vue3和TypeScript。

借助第三方库[`@material/material-color-utilities`](https://github.com/material-foundation/material-color-utilities)，轻易地创建一套符合规则的配色方案，每一个组件遵循[`Material Design 3`](https://m3.material.io/)的设计原则，同时此项目尽可能地确保每一个组件符合[规范](https://www.w3.org/TR/wai-aria-1.2/#abstract)。

## Roadmap

|Feature|Plan|
|:--|--:|
|ThemeProvider|2023|
|Button|2023|
|Fab|2023|
|IconButton|2023|
|Label|2023|
|Divider|2023|
|Elevation|2023|
|Ripple|2023|
|Input|2024|
|Areatext|2024|
|Dialog|2024|
|Slider|2024|
|Switch|2024|
|Menu|2024|
|Radio|2024|
|Select|2024|
|_MORE_|_NOT PLAN_|

## Contribute
### File Structure
关于组件的原始文件位于`./src/components/*`，请通过`@/components`访问。

每一个组件提供如下文件，请通过`npm run template`创建模板。

|File Name|Description|
|:--|--:|
|index.ts|导出组件|
|./internal/ComponentName.render.tsx|提供组件的原始代码|
|./internal/ComponentName.type.ts|提供组件的类型|
|./internal/ComponentName.styles.ts|提供组件的样式|
|./internal/ComponentName.tokens.ts|提供组件的样式的令牌|
