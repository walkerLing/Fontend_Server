import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
    // 创建并暴露一个路由器
export default new vueRouter({
    mode:'history',
    routes: [
        // 一级路由
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ("../pages/Login.vue")
        },
        {
            path: '/manage',
            name: 'Manage',
            redirect: 'manage/teamintroduction',
            component: () => import ("../pages/Manage.vue"),
            children: [
                {
                    path:'targetdetection',
                    name:'TargetDetection',
                    component: ()=> import("../pages/TargetDetection.vue"),
                    meta: {
                        title: "番茄识别系统"
                    },
                },
                {
                    path:'userfeedback',
                    name:'UserFeedback',
                    component: ()=> import("../pages/UserFeedback.vue"),
                },
                {
                    path:'realmonitor',
                    name:'RealMonitor',
                    component: ()=> import("../pages/RealMonitor.vue"),
                },
                {
                    path:'home',
                    name:'Home',
                    component: ()=> import("../pages/Home.vue"),
                },
                {
                    path:'teamintroduction',
                    name:'TeamIntroduction',
                    component: ()=> import("../pages/TeamIntroduction.vue"),
                },
                {
                    path:'blockpage',
                    name:'BlockPage',
                    component: ()=> import("../pages/BlockPage.vue"), 
                },
            ]
        }
    ]
})