<template>
	<div class="book">
		<el-container>
			<el-header>
				<el-row>
					<el-col :span="20">
						<h1 class="title">{{book.title}} </h1>
					</el-col>
					<el-col :span="4">
						<template v-if="user">
							<el-button v-if="has" type="success" round disabled>已在书架</el-button>
							<el-button v-else type="success" round @click="add">加入书架</el-button>
						</template>
						<template v-else>
							<el-button type="success" round @click="$router.push({name:'Login',query:{next:$route.path}})">加入书架</el-button>
						</template>
					</el-col>
				</el-row>
			</el-header>
			<el-container>
				<el-aside>
					<img :src="book.mainimg" class="image">
				</el-aside>
				<el-container>
					<el-main>
						{{book.outline}}
					</el-main>
					<el-footer>
						<div class="zhangjie">
							<el-col :span="4" v-for="(a,index) in articles" :key="a.title">
								<router-link :to="'/article/'+a.id">
									<el-tag type="success"> 第{{index+1}}章-- {{a.title}} </el-tag>
								</router-link>
							</el-col>
						</div>
					</el-footer>
				</el-container>
			</el-container>
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
				user: null,
				has: false,
				book: null,
				articles: []
			}
		},
		created() {
			let user = this.$jsCookie.get("user")
			if (user) {
				this.user = user;
			}
			this.book = books.filter((item) => {
				return item.id == this.$route.params.pk;
			})[0]
			this.articles = articles.filter((item) => {
				return item.bookid == this.$route.params.pk;
			})
			this.has = this.$store.getters.getCollectBoos.indexOf(this.book.id) >= 0 ? true : false
		},
		methods: {
			add() {
				this.$message('加入书架');
				this.has = true
				this.$store.commit("addCollect", this.book.id)
			}
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
	h1{
		margin: 0 auto;
	}
	.zhangjie {
		line-height: 60px;
		background-color: #909399;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		line-height: 30px;
		text-align: left;
	}
</style>
