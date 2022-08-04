import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../page/Main.vue"
import Contest from "@/page/Contest.vue"
import Problem from "@/page/Problem.vue"
import Status from "@/page/Status.vue"

const routes = [
    {
        path: '/',
        name: '主页',
        component: Main
    },
    {
        path: '/c',
        name: '练习、比赛',
        component: Contest
    },
    {
        path: '/p',
        name: '题目',
        component: Problem
    },
    {
        path: '/s',
        name: '状态',
        component: Status
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;