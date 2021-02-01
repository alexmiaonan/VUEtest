import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

import HiWorld from '@/components/HiWorld.vue'
import obj111 from "./data"
import {
	obj2,
	obj3
} from "./data/index.js"
console.log("obj1", obj111)
console.log("obj2", obj2, "obj3", obj3)
Vue.component("HiWorld", HiWorld)
Vue.use(ElementUI);

// 全局过滤
// Vue.filter("info",function(value){
// 	return value+ "    gcm"
// })

import Cookies from "js-cookie"
Vue.prototype.$jsCookie = Cookies
console.log(Vue.prototype)

let bus = new Vue()
Vue.prototype.$bus = bus



new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
