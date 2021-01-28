<template>
	<div class="book">

		<el-container>
			<el-header>{{book.title}}</el-header>
			<el-main>
				<div class="left1">
					<img :src="book.mainimg" class="image">
				</div>
				<div class="right1">
					{{book.outline}}
				</div>
			</el-main>
			<div class="zhangjie">
				<el-col :span="4" v-for="(a,index) in articles" :key="a.title">
					<router-link :to="'/article/'+a.id">
						<el-tag type="success"> 第{{index+1}}章-- {{a.title}} </el-tag>
					</router-link>
				</el-col>
			</div>

		</el-container>
	</div>
</template>

<script>
	import {
		articles,
		books
	} from '../data/bookdata.js'
	export default {
		data() {
			return {
				book: null,
				articles: []
			}
		},
		created() {
			this.book = books.filter((item) => {
				return item.id == this.$route.params.pk;
			})[0]
			this.articles = articles.filter((item) => {
				return item.bookid == this.$route.params.pk;
			})
		}
	}
</script>

<style lang="less">
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	.zhangjie{
		line-height: 60px;
		background-color: #909399;
	}
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		line-height: 30px;
		text-align: left;

		img {
			width: 200px;
			height: 200px;
		}
	}

	.left1 {
		float: left;
	}
	.right1 {
		float: right;
		text-align: left;
	}
</style>
