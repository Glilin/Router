/* eslint-disable eol-last */
import Vue from 'vue'
import App from './App.vue'
// 1.引入组件 @代表src目录下的文件
import index from '@/views/index.vue'
import login from '@/views/login.vue'
// 2.引入路由
import VueRouter from 'vue-router'
// 3.使用路由
Vue.use(VueRouter)
    // 4.创建路由对象
var router = new VueRouter({
    // 5.配置路由
    routes: [
        // 6.配置路由单击对象：路由映射组件
        {
            name: 'index',
            path: '/index',
            component: index
        },
        {
            name: 'login',
            path: '/login',
            component: login
        }
    ]
})
Vue.config.productionTip = false

new Vue({
    // 7.注入路由，让整个应用都有路由功能
    router,
    render: h => h(App)
}).$mount('#app')