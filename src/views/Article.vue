<template>
	<div class="article" v-if="article">
		<el-container>
			<el-header>{{article.title}}</el-header>
			<el-main>{{article.content}}</el-main>
		</el-container>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				article: null
			}
		},
		created() {
			this.$axios(`article/${this.$route.params.pk}/`).then(res => {
				this.article = res.data;
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

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		line-height: 20px;
		text-align: left;
	}
</style>
