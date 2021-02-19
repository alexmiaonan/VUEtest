<template>
	<div id="app">
		<el-container>
			<el-header>
				<el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="1">
						<router-link :to='{name:"Home"}'>首页</router-link>
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的</template>
						<el-menu-item index="2-1">
							<router-link style="color: rgb(255, 255, 255);text-decoration: none;" :to="{name:'Collect'}">收藏</router-link>
						</el-menu-item>
					</el-submenu>
					<template v-if="userinfo">
						<el-menu-item class="rt" index="4" @click="logout">
							退出
						</el-menu-item>
						<el-menu-item class="rt" index="3">
							<router-link :to="{name:'Center'}">{{ userinfo.username }}</router-link>
						</el-menu-item>
					</template>
					<template v-else>
						<el-menu-item class="rt" index="4">
							<router-link :to="{name:'Regist'}">注册</router-link>
						</el-menu-item>
						<el-menu-item class="rt" index="3">
							<router-link :to="{name:'Login'}">登录</router-link>
						</el-menu-item>
					</template>
				</el-menu>
			</el-header>
			<el-main class="zhongjian">
				<router-view />
			</el-main>
			<el-footer class="dibu">
				<el-button type="primary" class="back">
					<router-link :to='{name:"Home"}'>返回首页</router-link>
				</el-button>
			</el-footer>
		</el-container>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				user: null,
				activeIndex2: '1',
				userinfo: null
			}
		},
		created() {
			this.$bus.$on("userlogin", _u => {
				this.user = _u
				this.$axios({
					url: "users/getuserinfo/",
					method: "get"
				}).then(res => {
					this.userinfo = res.data
				})
			})
			let user = this.$jsCookie.get('token')
			if (user) {
				this.user = user
				this.$axios({
					url: "users/getuserinfo",
					method: "get"
				}).then(res => {
					this.userinfo = res.data
				})
			}
		},
		beforeDestroy() {
			this.$bus.$off("userlogin")
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			logout() {
				if (this.$route.name != "Home") {
					this.$router.push({
						name: "Home"
					})
				}
				this.userinfo = null
				this.user = null
				this.$jsCookie.remove('token')
				this.$jsCookie.remove('user')
			}
		}
	}
</script>
<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

		.el-header {
			padding: 0;
			min-width: 300px;
		}

		.zhongjian {
			height: 653px;
		}

		.rt {
			float: right;
		}

		a {
			text-decoration: none;
		}

		.dibu {
			background-color: #B3C0D1;
			color: #333;
			text-align: center;
			line-height: 60px;
		}
	}
</style>
