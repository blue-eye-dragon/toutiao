 //进行路由的初始化和注册
 //导入
 import VueRouter from 'vue-router'
 //注册
 import Vue from 'vue'
 Vue.use(VueRouter)
 import Login from '@/views/login'
 import Home from '@/views/home'
 import Welcome from '@/views/welcome'
 import Notfound from '@/views/404'
 //初始化
 const router = new VueRouter({
     routes: [
        {path:'/login',component:Login},
        {
            path:'/',
            component:Home,
            children:[
                {path:'/',component:Welcome}
            ]
        },
        {path:'*',component:Notfound}
     ]
 })
//导出
export default router