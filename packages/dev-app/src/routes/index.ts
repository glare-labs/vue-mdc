import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { componentRoutes } from '../modules/components/router.module'
import IndexPage from '../pages/index-page.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        component: IndexPage
    },
    ...componentRoutes,
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
