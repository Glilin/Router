<template>
  <div class="product">
  <p>这是产品</p>
  </div>
</template>
<script>
export default {
  // 普通监听用函数来处理
  watch: {
    // watch 监听是响应同一路由参数的变化
    $route (to, from) {
      // 对路由变化作出响应
      // console.log(to)
      // console.log(from)
      var id = to.params.id
      console.log(id)
    }
  },
  // mounted钩子函数是响应路由的变化
  mounted () {
    // this.$route:可以获取路由参数对象，里面有属性可以获取参数
    // prams:通过router-link进行路由的跳转就通过params来获取
  //  console.log(this.$route)
   var id = this.$route.params.id
   console.log(id)
  }
}
</script>
<style lang="less" scoped>

</style>
