<template>
  <div class="father">
    <p>这是父组件123123</p>
    <!-- 3.使用组件就像使用标签 -->
    <son></son>
  </div>
</template>

<script>
// 1.引入子组件
import son from '@/views/son.vue'
export default {
  // 2 组件components注册
  components: {
    son
  }
}
</script>

<style lang="less" scoped>

</style>
