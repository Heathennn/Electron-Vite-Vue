export interface MenuItem {
    name: string,
    path: string,
    icon?: any,
    routeName?: string
}

export const menuList: MenuItem[] = [
    {
        name: '首页',
        path: '/',
        routeName: 'home'
    },
    {
        name: '本地服务管理',
        path: '/ebidsun',
        routeName: 'ebidsun'
    },
    {
        name: '解码器',
        path: '/decoder',
        routeName: 'decoder'
    }
]

