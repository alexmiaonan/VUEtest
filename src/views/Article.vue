<template>
	<div class="article">
		<el-container>
			<el-header>{{article.title}}</el-header>
			<el-main>{{article.content}}</el-main>
		</el-container>

	</div>
</template>

<script>
	import {
		articles
	} from '../data/bookdata.js'
	export default {
		// filters:{
		// 	info(value){
		// 		return value+"   gcm"
		// 	}
		// },
		data() {
			return {
				article: null
			}
		},
		created() {
			this.article = articles.filter(item => {
				return item.id == this.$route.params.pk;
			})[0]
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

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		line-height: 20px;
		text-align: left;
	}
</style>
