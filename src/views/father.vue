<template>
  <div class="father">
    <p>这是父组件123123</p>
    <p>这是父组件：{{name}}</p>
    <!-- 监听子组件发射的事件 -->
    <son></son>
    <dauther></dauther>
  </div>
</template>

<script>
// 1.引入子组件
import son from '@/views/son.vue'
import dauther from '@/views/dauther.vue'
export default {
  data () {
    return {
      name: '父组件-jack'
    }
  },
  // 2 组件components注册
  components: {
    son, dauther
  }
}
</script>

<style lang="less" scoped>
</style>
