/* eslint-disable eol-last */
// 父子组件传值-兄弟组件传值  步骤
// 1.创建全局Vue实列做为发射事件和监听事件的对象--事件总线
// 2. 在其中一个兄弟组件中通过事件总线来$emit事件，同时传递数据
// 3. 在另一个兄弟组件中通过事件总线$on来监听事件，进行事件的处理

// 1.创建事件总线
import Vue from 'vue'
export default new Vue()