<template>
<!-- 子传父  步骤
  1.  创建父组件 ， 子组件
  2.  在父组件中国使用子组件
  3.  实现子传父：在子组件中使用emit自定义发射事件，在父组件中监听子组件的发射的事件
 -->
  <div class="father">
    <p>这是父组件123123</p>
    <p>我儿子女朋友叫：{{erxifuname}}</p>
    <!-- 监听子组件发射的事件 -->
    <son v-on:getname='deal'></son>
  </div>
</template>

<script>
// 1.引入子组件
import son from '@/views/son.vue'
export default {
  data () {
    return {
      name: '父组件-jack',
      erxifuname: '??'

    }
  },
  methods: {
    // 事件处理函数有一个默认的参数
    deal (data) {
      console.log(data)
      this.erxifuname = data
    }
  },
  // 2 组件components注册
  components: {
    son
  }
}
</script>

<style lang="less" scoped>
</style>
