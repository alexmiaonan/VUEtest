import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	meta:{
		auth:true
	},
  },
  {
    path: '/element',
    name: 'Element',
    component: () => import(/* webpackChunkName: "element" */ '../views/Element.vue')
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import(/* webpackChunkName: "collect" */ '../views/Collect.vue'),
	meta:{
		auth:true
	},
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/book/:pk',
    name: 'Book',
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue')
  },
  {
    path: '/article/:pk',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
  }
]

const router = new VueRouter({
  routes
})

import Cookies from 'js-cookie'
router.beforeEach(function(t,f,n){
	if(t.meta.auth){
		let user = Cookies.get('user')
		if(user){
			n()
		}
		else{
			n({name:"Login",query:{next:t.path}})  //  /login?next=/collect
		}
	}
	else{
		n();
	}
	
})

export default router
