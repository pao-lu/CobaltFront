import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../page/Main.vue"
import Contest from "@/page/Contest.vue"
import Problem from "@/page/Problem.vue"
import ProblemDetail from "@/page/ProblemDetail.vue"
import Status from "@/page/Status.vue"

const routes = [
    {
        path: '/',
        name: '主页',
        component: Main
    },
    {
        path: '/c',
        name: '比赛',
        component: Contest
    },
    {
        path: '/p',
        name: '题目',
        children: [{ path: '', name: '题目列表', component: Problem },
        { path: ':id', name: "题目详情", component: ProblemDetail }],
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

router.beforeEach((to, from, next) => {
    if (to.name) {
        document.title = to.name + ' - 在线评测系统';
    }
    next();
})

export default router;