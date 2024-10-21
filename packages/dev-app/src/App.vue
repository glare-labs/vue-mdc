<template>
  <div class="light root">
    <ComponentNavigation
      :component-router-array="componentRouterArray"
      @navigate-request="handleNavigationRequest"
    ></ComponentNavigation>

    <main class="wrapper">
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ComponentNavigation, type IComponentNavigationNavigationRequestCustomEvent, type TComponentRouterArray } from './modules/component-navigation'
import { componentRoutes } from './modules/components/router.module'

const componentRouterArray: TComponentRouterArray = componentRoutes.map(e => ({ url: e.path, label: e.path.replace('/component/', '') }))

const router = useRouter()
const handleNavigationRequest = (e: Event) => {
  const event = e as CustomEvent<IComponentNavigationNavigationRequestCustomEvent>
  router.push(event.detail.url)
}
</script>

<style>
.root {
  background-color: var(--md-sys-color-surface);
  min-height: 100svh;
  overflow: auto;
}

.wrapper {
  margin: 16px;
  padding: 16px;
  border-radius: 28px;
  background-color: var(--md-sys-color-surface-container-lowest);
}

.light {
  --md-sys-color-primary-palette-key-color: #88fe00;
  --md-sys-color-secondary-palette-key-color: #607f61;
  --md-sys-color-tertiary-palette-key-color: #488266;
  --md-sys-color-neutral-palette-key-color: #73796a;
  --md-sys-color-neutral-variant-palette-key-color: #727a68;
  --md-sys-color-background: #f6fce9;
  --md-sys-color-on-background: #181d12;
  --md-sys-color-surface: #f6fce9;
  --md-sys-color-surface-dim: #d6dcca;
  --md-sys-color-surface-bright: #f6fce9;
  --md-sys-color-surface-container-lowest: #ffffff;
  --md-sys-color-surface-container-low: #f0f6e3;
  --md-sys-color-surface-container: #eaf0de;
  --md-sys-color-surface-container-high: #e4ebd8;
  --md-sys-color-surface-container-highest: #dfe5d3;
  --md-sys-color-on-surface: #181d12;
  --md-sys-color-surface-variant: #dde6d0;
  --md-sys-color-on-surface-variant: #414939;
  --md-sys-color-inverse-surface: #2c3226;
  --md-sys-color-inverse-on-surface: #edf3e1;
  --md-sys-color-outline: #727a67;
  --md-sys-color-outline-variant: #c1cab4;
  --md-sys-color-shadow: #000000;
  --md-sys-color-scrim: #000000;
  --md-sys-color-surface-tint: #366b00;
  --md-sys-color-primary: #366b00;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #88fe00;
  --md-sys-color-on-primary-container: #275000;
  --md-sys-color-inverse-primary: #77df00;
  --md-sys-color-secondary: #486549;
  --md-sys-color-on-secondary: #ffffff;
  --md-sys-color-secondary-container: #c9ebc7;
  --md-sys-color-on-secondary-container: #314d33;
  --md-sys-color-tertiary: #2e694f;
  --md-sys-color-on-tertiary: #ffffff;
  --md-sys-color-tertiary-container: #b2f0ce;
  --md-sys-color-on-tertiary-container: #125138;
  --md-sys-color-error: #ba1a1a;
  --md-sys-color-on-error: #ffffff;
  --md-sys-color-error-container: #ffdad6;
  --md-sys-color-on-error-container: #93000a;
  --md-sys-color-primary-fixed: #88fe00;
  --md-sys-color-primary-fixed-dim: #77df00;
  --md-sys-color-on-primary-fixed: #0c2000;
  --md-sys-color-on-primary-fixed-variant: #275000;
  --md-sys-color-secondary-fixed: #c9ebc7;
  --md-sys-color-secondary-fixed-dim: #aecfad;
  --md-sys-color-on-secondary-fixed: #04210b;
  --md-sys-color-on-secondary-fixed-variant: #314d33;
  --md-sys-color-tertiary-fixed: #b2f0ce;
  --md-sys-color-tertiary-fixed-dim: #97d4b3;
  --md-sys-color-on-tertiary-fixed: #002114;
  --md-sys-color-on-tertiary-fixed-variant: #125138;
}
</style>
