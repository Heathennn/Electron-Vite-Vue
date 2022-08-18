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
        name: '标信',
        path: '/ebidsun',
        routeName: 'ebidsun'
    }
]