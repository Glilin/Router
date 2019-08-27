/* eslint-disable eol-last */
import Vue from 'vue'

// 1.引入组件 @代表src目录下的文件
import index from '@/views/index.vue'
import login from '@/views/login.vue'
import product from '@/views/product.vue'
import shui from '@/views/shui.vue'
import dian from '@/views/dian.vue'
import fu from '@/views/fu.vue'
import Father from '@/views/father.vue'

// 2.引入路由
import VueRouter from 'vue-router'
// 3.使用路由
Vue.use(VueRouter)
    // 4.创建路由对象
var router = new VueRouter({
    // 5.配置路由
    routes: [{
            name: 'father',
            path: '/father',
            component: Father
        },
        {
            name: 'default',
            path: '/',
            redirect: { name: 'father' }
        },
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
        },
        {
            name: 'product',
            // id相当于形参，它不会音响你穿什么值，但是会决定后期如何取参数
            path: '/product/:id',
            component: product,
            // 添加嵌套路由
            children: [{
                    // 里面是一个一个对象，对象描述一个单独的路由配置
                    // 嵌套路由不要添加/ ，否则会破坏层次结构
                    name: 'shui',
                    path: 'shui ',
                    component: shui
                },
                {
                    name: 'dian',
                    path: 'dain',
                    component: dian
                }, {
                    name: 'fu',
                    path: 'fu',
                    component: fu
                }
            ]
        }
    ]
})
Vue.config.productionTip = false

export default router