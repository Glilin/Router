<template>
  <div class="product">
    <p>这是产品</p>
    <p>{{typeinfo}}</p>
    <input type="button" value="单击查看详情" @click='jump' />
    <!-- 挖坑设置嵌套路由所映射组件的展示区域 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      typeinfo: '',
      id: ''
    }
  },
  methods: {
    jump () {
      if (this.id === '1') {
        this.$router.push({ name: 'shui' })
      } else if (this.id === '2') {
        this.$router.push({ name: 'dian' })
      } else if (this.id === '3') {
        this.$router.push({ name: 'fu' })
      }
    }
  },
  // 普通监听用函数来处理
  watch: {
    // watch监听是响应同一路由参数的变化
    $route (to, from) {
      // 对路由变化作出响应
      // console.log(to)
      // console.log(from)
      this.id = to.params.id
      if (this.id === '1') {
        this.typeinfo = '这是水果分类的信息'
      } else if (this.id === '2') {
        this.typeinfo = '这是电器分类的信息'
      } else if (this.id === '3') {
        this.typeinfo = '这是服装分类的信息'
      }
    }
  },
  // mounted钩子函数是响应路由的变化
  mounted () {
    // this.$route:可以获取路由参数对象，里面有属性可以获取参数
    // prams:通过router-link进行路由的跳转就通过params来获取
    console.log(this.$route)
    this.id = this.$route.params.id
    if (this.id === '1') {
      this.typeinfo = '这是水果分类的信息'
    } else if (this.id === '2') {
      this.typeinfo = '这是电器分类的信息'
    } else if (this.id === '3') {
      this.typeinfo = '这是服装分类的信息'
    }
  }
}
</script>
<style lang="less" scoped>
</style>
