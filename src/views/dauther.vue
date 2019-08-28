<template>
  <div class="dauther">
   <p>这是女儿组件：{{name}}</p>
   <input type="button" :value="'我告诉你我男朋友的名字:' + myname " @click="tellname">
  </div>
</template>

<script>

import myemit from '@/utils/event.js'
export default {
  data () {
    return {
      name: '子组件-小rose',
      myname: 'tom'
    }
  },
  // 2. $emit 事件发射
  methods: {
    tellname () {
      myemit.$emit('getname', { name: this.myname, age: 20, hobby: ['写代码', '调bug'] })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
