<template>
<!--  3. 在另一个兄弟组件中通过事件总线$on来监听事件，进行事件的处理 -->
  <div class="son">
    <p>这是儿子组件:{{name}}</p>
    <p>我妹妹的男友有叫：{{ xiaojiuzi}}</p>
  </div>
</template>

<script>
import myemit from '@/utils/event.js'
export default {
  data () {
    return {
      name: '子组件-小jack',
      xiaojiuzi: '？？'
    }
  },
  // 一开始就进行事件的监听
  mounted () {
    // myemit.$on('事件名称','事件处理函数')
    myemit.$on('getname', (data) => {
      console.log(data)
      this.xiaojiuzi = data.name
    })
  }
}
</script>

<style lang="less" scoped>
</style>
