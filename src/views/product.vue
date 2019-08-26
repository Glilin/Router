<template>
  <div class="product">
  <p>这是产品</p>
  <p>{{typeinfo}}</p>
  <input type="button" value="单击查看详情">
  </div>
</template>
<script>
export default {
  data () {
    return {
      typeinfo: ''
    }
  },
  // 普通监听用函数来处理
  watch: {
    // watch监听是响应同一路由参数的变化
    $route (to, from) {
      // 对路由变化作出响应
      // console.log(to)
      // console.log(from)
      var id = to.params.id
      console.log(id)
      if (id === '1') {
        this.typeinfo = '这是水果分类的信息'
      } else if (id === '2') {
        this.typeinfo = '这是电器分类的信息'
      } else if (id === '3') {
        this.typeinfo = '这是服装分类的信息'
      }
    }
  },
  // mounted钩子函数是响应路由的变化
  mounted () {
    // this.$route:可以获取路由参数对象，里面有属性可以获取参数
    // prams:通过router-link进行路由的跳转就通过params来获取
  //  console.log(this.$route)
   var id = this.$route.params.id
   console.log(id)
   if (id === '1') {
     this.typeinfo = '这是水果分类的信息'
   } else if (id === '2') {
     this.typeinfo = '这是电器分类的信息'
   } else if (id === '3') {
     this.typeinfo = '这是服装分类的信息'
   }
  }
}
</script>
<style lang="less" scoped>

</style>
