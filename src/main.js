/* eslint-disable eol-last */
import Vue from 'vue'
import App from './App.vue'
// 1.引入组件
import router from '@/router/index.js'

Vue.config.productionTip = false

new Vue({
    // 4.注入路由，让整个应用都有路由功能
    router,
    render: h => h(App)
}).$mount('#app')