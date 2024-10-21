import type { RouteRecordRaw } from 'vue-router'
import ButtonPage from './pages/button-page.vue'
import CheckboxPage from './pages/checkbox-page.vue'
import FabPage from './pages/fab-page.vue'
import IconButtonPage from './pages/icon-button-page.vue'
import NavigationBarPage from './pages/navigation-bar-page.vue'
import NavigationRailPage from './pages/navigation-rail-page.vue'
import ProgressPage from './pages/progress-page.vue'
import RadioPage from './pages/radio-page.vue'
import SwitchPage from './pages/switch-page.vue'
import TypographyPage from './pages/typography-page.vue'

export const componentRoutes: Array<RouteRecordRaw> = [
    {
        path: '/component/button',
        component: ButtonPage
    },
    {
        path: '/component/fab',
        component: FabPage
    },
    {
        path: '/component/icon-button',
        component: IconButtonPage
    },
    {
        path: '/component/navigation-bar',
        component: NavigationBarPage
    },
    {
        path: '/component/navigation-rail',
        component: NavigationRailPage
    },
    {
        path: '/component/switch',
        component: SwitchPage
    },
    {
        path: '/component/radio',
        component: RadioPage
    },
    {
        path: '/component/checkbox',
        component: CheckboxPage
    },
    {
        path: '/component/progress',
        component: ProgressPage
    },
    {
        path: '/component/typography',
        component: TypographyPage
    },
]
