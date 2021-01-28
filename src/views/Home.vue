<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<HiWorld msg="home传来的msg" :num="20" @send="sendmsg">
			<h1 slot="shang">Home页面插槽1</h1>
			<h2 slot="xia">Home页面插槽2</h2>
		</HiWorld>
		<div class="books">
			<el-row :gutter="20">
				<el-col :span="6" v-for="b in books" :key="b.id">
					<router-link to="/about">
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

		<Heart :stateprop="heartstate" @toparents="statechange"><span slot="heart">为你点赞！</span></Heart>
		<br>
		<br>
		<Star :starnumprop="star" @tellparent="starchange"><span slot="to">评星！</span></Star>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	import Heart from "@/components/Heart/Heart.vue"
	import Star from "@/components/Star/Star.vue"
	import {
		books
	} from "../data/bookdata.js"
	export default {
		name: 'Home',
		components: {
			HelloWorld,
			Heart,
			Star
		},
		methods: {
			sendmsg(e) {
				console.log("Hiworld传输的参数", e)
			},
			statechange(e) {
				console.log("更改服务器点赞状态！state:", e.state)
			},
			starchange(e) {
				console.log("更改服务器评星状态！state:", e.starnum)
			},
		},
		data() {
			return {
				books,
				heartstate: false,
				star: 2,
			}
		}
	}
</script>
<style lang="less">
	.books {
		width: 80%;
		margin: 0 auto;

		.book {
			img {
				width: 100%;
			}
		}
	}

	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>
