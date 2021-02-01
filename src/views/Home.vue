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
		<div id="test">
			<transition>
				<div class="target" v-show="play">

				</div>

			</transition>
			<button @click="play=!play">切换</button>
		</div>

	</div>
</template>

<script>
	import {
		books
	} from "../data/bookdata.js"
	export default {
		name: 'Home',
		
		data() {

			return {
				play: true,
				books,
			}
		}
	}
</script>
<style lang="less">
	@keyframes hide{
		from{
			width: 200px;
			height: 200px;
			opacity: 1;
			left: 0;
		}
		to{
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

	.v-enter {}

	.v-enter-active {
		animation: hide reverse 2s linear;
	}

	.v-enter-to {}

	.v-leave {}

	.v-leave-active {
		animation: hide 2s linear;
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
