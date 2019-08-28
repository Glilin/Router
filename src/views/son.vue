<template>
  <div class="son">
    <p>这是子组件:{{name}}</p>
    <!-- : 是 v-bind 简写  @ 是 v-on的简写 -->
  <input type="button" :value="'点击我告诉你'+myname" @click="tellname">
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '子组件-小jack',
      myname: '小红'
    }
  },
  methods: {
    tellname () {
      // 发射事件:通过this.$emit(事件名称，需要传递的数据)
      this.$emit('getname', this.myname)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
