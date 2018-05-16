/**
 * 使用Vue去运行App.vue
 */

 import Vue from 'vue' //相当于 var Vue = require('vue')

 //导入根组件
 import App from './App.vue'

 /**利用Vue框架创建出来的根实例，去把根组件的template中的内容，渲染到id=app的div中去 */
 new Vue({
     el:"#app",
     render:function(createElement){//用来渲染根组件
        return createElement(App)
     }
 })