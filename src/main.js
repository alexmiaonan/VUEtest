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
import obj111 from "./data"
import {
	obj2,
	obj3
} from "./data/index.js"
console.log("obj1", obj111)
console.log("obj2", obj2, "obj3", obj3)
Vue.component("HiWorld", HiWorld)
Vue.use(ElementUI);

import mock from "mockjs"
console.log(mock.mock({
	"key1|1-10":"gcm",
	"key2|10":"jrx",
	"key3|1-5":100,
	"key4|1-5.2-3":100,
	"key5|1":true,
	"key6|1-9":true,
	"key7|2":{name:"qiku",age:5,addr:"dongsanjie"},
	"key8|1-3":{name:"qiku",age:5,addr:"dongsanjie"},
	"key9|1":[1,2,3,4,5],
	"key10|1-3":[1,2,3,4,5],
	"key11|3":[1,2,3,4,5],
	"key12":function(){
		return mock.mock({
			"key12|3":[1,2]
		})
	},
	"key13":/[1-5][5-9]/,
	"key14":"@CNAME"
}));

// 全局过滤
// Vue.filter("info",function(value){
// 	return value+ "    gcm"
// })

import Cookies from "js-cookie"
Vue.prototype.$jsCookie = Cookies
console.log(Vue.prototype)

let bus = new Vue()
Vue.prototype.$bus = bus
import axios from "axios"
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	let token = Vue.prototype.$jsCookie.get("token")
	if(token){
		config["headers"]["Authorization"]="Basic "+token
	}
	console.log(config.headers.Authorization,"111111111")
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
Vue.prototype.$axios = axios

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
