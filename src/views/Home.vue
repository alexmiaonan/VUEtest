<template>
	<div class="home">
		<div class="books">
			<el-row :gutter="20">
				<el-col :span="5" v-for="b in books" :key="b.id">
					<router-link :to="'/book/'+b.id">
						<el-card :body-style="{ padding: '0px' }" shadow="hover" class="book">
							<img :src="b.mainimg" class="image">
							<div style="padding: 14px;">
								<h3>{{b.title}}</h3>
							</div>
						</el-card>
					</router-link>
				</el-col>
			</el-row>
		</div>
		<span class="iconfont icon-cainixihuan" style="font-size: 100px;"></span>
		<transition>
			<div class="target" v-show="play"></div>
		</transition>
		<button @click="play=!play">切换</button>
		<button @click="login">登录</button>
		<button @click="getusers">注册</button>
		<button @click="setsubjects">添加专题</button>
	</div>
</template>

<script>
	import {
		books
	} from "../data/bookdata.js"
	export default {
		name: 'Home',
		methods: {
			login() {
				this.$jsCookie.set("token", "YWRtaW46MTIzNDU2")
			},
			getusers() {
				this.$axios.post('customusers/', {
						username: "qweqweqwe1",
						password: "123456",
						password2: "123456"
					})
					.then(function(response) {
						console.log(response.data);
					})
					.catch(function(error) {
						console.log(error);
					});
			},
			setsubjects() {
				this.$axios({
						method: 'post',
						url: 'subjects/',
						data: {
							name: '专题2',
						}
					})
					.then(function(response) {
						console.log(response);
					})
					.catch(function(error) {
						console.log(error);
					});
			},


		},
		data() {

			return {
				play: true,
				books,
			}
		}
	}
</script>
<style lang="less">
	@keyframes hide {
		from {
			width: 200px;
			height: 200px;
			opacity: 1;
			left: 0;
		}

		to {
			width: 0px;
			height: 0px;
			opacity: 0;
			left: -200px;
		}
	}

	.target {
		width: 200px;
		height: 200px;
		position: relative;
		background-color: skyblue;
	}

	// .v-enter {
	// 	opacity: 0;
	// 	left: -200px;
	// 	width: 0px;
	// 	height: 0px;
	// }

	// .v-enter-active {
	// 	transition: all 2s ;
	// }

	// .v-enter-to {
	// 	opacity: 1;
	// 	left: 0px;
	// 	width: 200px;
	// 	height: 200px;
	// }

	// .v-leave {
	// 	opacity: 1;
	// 	left: 0px;
	// 	width: 200px;
	// 	height: 200px;
	// }

	// .v-leave-active {
	// 	transition: all 2s ;
	// }

	// .v-leave-to {
	// 	opacity: 0;
	// 	left: -200px;
	// 	width: 0px;
	// 	height: 0px;
	// }
	.v-enter {}

	.v-enter-active {
		animation: hide reverse 2s;
	}

	.v-enter-to {}

	.v-leave {}

	.v-leave-active {
		animation: hide 2s;
	}

	.v-leave-to {}


	.books {
		width: 80%;
		margin: 0 auto;

		.book {
			img {
				width: 100%;
			}
		}
	}

	.el-col {
		min-width: 130px;
	}

	.el-header {
		padding: 0;
		width: 100%;
	}

	.el-main {
		background-color: #E9EEF3;
	}

	.el-menu-demo {
		padding: 0;
		width: 100%;
	}

	h3 {
		text-align: center;
	}
</style>
