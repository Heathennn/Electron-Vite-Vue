import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('views/home/index.vue')
    },
    {
        path: '/ebidsun',
        name: 'ebidsun',
        component: () => import('views/ebidsun/index.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router