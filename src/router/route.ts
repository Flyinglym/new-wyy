import {RouteRecordRaw} from "vue-router";
import layout from '../views/layout.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: layout,
        children: [
            {
                path: 'findMusic',
                name: 'findMusic',
                component: () => import('../views/findMusic/findMusic.vue')
            },
            {
                path: 'my',
                name: 'my',
                component: () => import('../views/myMusic/myMusic.vue')
            }
        ]
    },

]