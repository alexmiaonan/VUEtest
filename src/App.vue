<template>
	<div id="app">
		<!-- <div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>|
		<router-link to="/element">Element</router-link>
    </div> -->
		<el-container>
			<el-header>
				<el-menu  class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="1">
						<router-link :to='{name:"Home"}'>首页</router-link>
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的</template>
						<el-menu-item index="2-1">收藏</el-menu-item>
					</el-submenu>
					<el-menu-item class="login" index="3">登录</el-menu-item>
					<el-menu-item class="regist" index="4">注册</el-menu-item>
				</el-menu>
			</el-header>
			<el-main>
				<router-view />
			</el-main>
			<el-footer>
				<el-button type="primary" class="back">
					<router-link :to='{name:"Home"}'>返回首页</router-link>
				</el-button>
			</el-footer>
		</el-container>

	</div>
</template>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

		.el-header {
			padding: 0;
		}

		a {
			text-decoration: none;
		}

		.login {
			float: right;
		}

		.regist {
			float: right;

		}

		.el-footer {
			background-color: #B3C0D1;
			color: #333;
			text-align: center;
			line-height: 60px;
		}
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
