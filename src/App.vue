<template>
  <div id="app">
   <p>这是根组件</p>
   <!-- 9.添加超链接 -->
    <router-link to="/index">首页</router-link>&nbsp;&nbsp;
    <router-link to="/login">登录</router-link>
    <!-- 8.挖坑router-view -->
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="less">

</style>
