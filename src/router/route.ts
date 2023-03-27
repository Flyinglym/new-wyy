import { RouteRecordRaw } from "vue-router";
import layout from "../views/layout.vue";
import findMusic from "../views/findMusic/findMusic.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: layout,
    redirect: "/findMusic",
    children: [
      {
        path: "findMusic",
        name: "findMusic",
        component: findMusic,
        redirect: "/findMusic/discover",
        children: [
          {
            path: "discover",
            name: "discover",
            component: () => import("../views/findMusic/discover/discover.vue")
          }
        ]
      },
      {
        path: "my",
        name: "my",
        component: () => import("../views/myMusic/myMusic.vue")
      }
    ]
  }
];
