# Quick Start

## Install

```
npm i material-anti-mage-vue
```

## Setup (Optional)

You can register all components at once or register specific components. You can also introduce specific components through import.

### Register All
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { RegisterAllComponents } from 'material-anti-mage-vue'

const app = createApp(App)
app.use(RegisterAllComponents)
app.mount('#root')
```

### Register Specific 
```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { RegisterAllComponents, ThemeProvider, Button } from 'material-anti-mage-vue'

const app = createApp(App)
app.use(RegisterComponents(ThemeProvider, Button))
app.mount('#root')
```

### Import Specific
```html
<template>

    <ThemeProvider>
        <Button>Action<Button>
    </ThemeProvider>

</template>

<script>
import { ThemeProvider, Button } from 'material-anti-mage-vue'

</script>

```

## Setup

For the component to work properly, **make sure the ThemeProvider wraps the component being called**.

```html
<template>

    <ThemeProvider>
        // ...
    </ThemeProvider>

</template>

<script>
import { ThemeProvider } from 'material-anti-mage-vue'

</script>

```