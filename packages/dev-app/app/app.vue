<template>

  <!-- Provides material colors, context -->
  <GlareProvider
    :dark="theme.getTheme.isDark"
    :contrast-level="theme.getTheme.contrastLevel"
    :source-color="theme.getTheme.sourceColorHex"
    :variant="theme.getTheme.variant"
  >

    <!-- Root -->
    <NuxtLayout name="app-layout">

      <template #header>
        <Header headline="Dev App">
          <template #start>
            <IconButton @click="() => isNavOpen = !isNavOpen">
              <Icon>menu</Icon>
            </IconButton>
          </template>
          <template #end>
            <IconButton @click="theme.setTheme(e => ({ isDark: !e.isDark }))">
              <Icon>{{ theme.getTheme.isDark ? 'light_mode' : 'dark_mode' }}</Icon>
            </IconButton>
          </template>
        </Header>
      </template>

      <!-- Page viewer -->
      <template #default>
        <NuxtPage />
      </template>

      <template #drawer>
        <nav
          class="navigation-drawer-wrapper"
          :class="[isModal && 'modal']"
        >
          <NavigationDrawer
            class="navigation-drawer"
            :modal="isModal"
            v-model="isNavOpen"
            :default-label="currentRouteName"
            @routeRequested="({ url }) => router.push(url)"
          >
            <template
              v-if="isModal"
              #start
            >
              <h1>Dev App</h1>
            </template>
            <NavigationDrawerItem
              label="Home"
              url="/"
            ></NavigationDrawerItem>
            <NavigationDrawerItem type="divider"></NavigationDrawerItem>
            <NavigationDrawerItem
              type="headline"
              label="Component"
            ></NavigationDrawerItem>

            <NavigationDrawerItem
              v-for="route in routesWithoutIndexPage"
              :label="route.label"
              :url="route.url"
            >
            </NavigationDrawerItem>
          </NavigationDrawer>
        </nav>

      </template>

    </NuxtLayout>
  </GlareProvider>

</template>

<script setup lang="ts">
import { GlareProvider, IconButton, Icon, NavigationDrawer, NavigationDrawerItem } from '../../ui/src'

const theme = useThemeStore()

const isModal = ref(false)
const isNavOpen = ref(false)

const router = useRouter()
const routesWithoutIndexPage = computed<Array<{ label: string, url: string }>>(() => {
  const routes = router.getRoutes()
  routes.splice(routes.findIndex(e => e.name === 'index'), 1)
  return routes.map(e => ({
    label: e.name?.toString().replace('examples-', ''),
    url: e.path,
  }))
})
const currentRouteName = computed(() => router.currentRoute.value.name === 'index' ? 'Home' : router.currentRoute.value.name?.toString().replace('examples-', ''))


const handleResize = (e: Event) => {
  const target = e.target as Window
  isModal.value = target.innerWidth < 900
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
  isModal.value = window.innerWidth < 900
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.navigation-drawer-wrapper {
  @apply h-full;

  &.modal {
    @apply fixed left-0 top-0;
  }

  &>* {
    @apply h-full;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
  }
}
</style>
