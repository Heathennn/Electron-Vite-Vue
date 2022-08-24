import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('views/home/index.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/ebidsun',
        name: 'ebidsun',
        component: () => import('views/ebidsun/index.vue'),
        meta: {
            title: '标信'
        }
    },
    {
        path: '/decoder',
        name: 'decoder',
        component: () => import('views/decoder/index.vue'),
        meta: {
            title: '解码器'
        }
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router