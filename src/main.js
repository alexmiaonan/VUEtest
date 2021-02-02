import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
// 全局导入iconfont样式
import "./assets/css/iconfont.css"

import HiWorld from '@/components/HiWorld.vue'
Vue.component("HiWorld", HiWorld)
Vue.use(ElementUI);

import Cookies from "js-cookie"
Vue.prototype.$jsCookie = Cookies

import "./mock/index.js"
import axios from "./api/index.js"
Vue.prototype.$axios = axios

let bus = new Vue()
Vue.prototype.$bus = bus


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
