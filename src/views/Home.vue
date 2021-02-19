<template>
	<div class="home">
		<div class="books">
			<el-row :gutter="20">
				<el-col :span="6" v-for="b in books" :key="b.id">
					<router-link :to="'/book/'+b.id">
						<el-card :body-style="{ padding: '0px' }" shadow="hover" class="book">
							<img :src='"http://127.0.0.1:8000"+b.img' class="image">
							<div style="padding: 14px;">
								<h3>{{b.name}}</h3>
							</div>
						</el-card>
					</router-link>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'Home',
		data() {
			return {
				play: true,
				books: [],
			}
		},
		created() {
			this.$axios({
				method:"get",
				url:"books/"
			}).then(res=>{
				this.books=res.data;
			}).catch(()=>{
			})
		},
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
	img{
		width: 240px;
		height: 320px;
	}
	.target {
		width: 200px;
		height: 200px;
		position: relative;
		background-color: skyblue;
	}
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
