import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import request from "./utils/request.js";
import * as echarts from 'echarts'
// import vueResource from 'vue-resource'
// import vueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'


// 引入字体的文件
import './assets/font/iconfont.css'
// 引入全局的样式文件
import './assets/css/global.less'
import 'default-passive-events'

import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../src/assets/style.css'
import './theme/index.css'

// 全局引入图片上传
import EleUploadImage from 'vue-ele-upload-image'
Vue.component(EleUploadImage.name, EleUploadImage)

Vue.use(Element)
Vue.use(ElementUI,{size:'mini'});
Vue.config.productionTip = false
// Vue.use(vueResource)
// Vue.use(vueRouter)

Vue.prototype.$axios = axios;
Vue.prototype.$http = axios

// const demo = Vue.extend({})
// const d = new demo()

// // 组件通讯  d现在就是vc
// Vue.prototype.x = d

// 将全局的echarts对象挂载到Vue的原型对象上
// 别的组件中 this.$echarts
Vue.prototype.$echarts = window.echarts
Vue.prototype.request = request;
Vue.prototype.$echarts = echarts
new Vue({
    router:router,
    //安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    render: h => h(App)
}).$mount('#app')