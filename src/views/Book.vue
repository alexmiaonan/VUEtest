<template>
	<div class="book" v-if="book">
		<el-container>
			<el-header>
				<el-row>
					<el-col :span="20">
						<h1 class="title">{{book.name}} </h1>
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
					<img :src='"http://127.0.0.1:8000"+book.img' class="image">
				</el-aside>
				<el-container>
					<el-main>
						{{ book.info }}
					</el-main>
					<el-footer>
						<div class="zhangjie">
							<el-col :span="4" v-for="(a,index) in book.article" :key="a.title">
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
	export default {
		data() {
			return {
				user: null,
				has: false,
				book: null,
			}
		},
		created() {
			let user = this.$jsCookie.get("token")
			if (user) {
				this.user = user;
			}
			this.$axios(`books/${this.$route.params.pk}/`).then(res => {
				this.book = res.data;
				this.has = res.data.collectinfo.hascollect
			}).catch(err => {
				console.log("err", err);
			})
		},
		methods: {
			add() {
				this.$message('加入书架');
				this.has = true
				this.$axios({
					url: "collects/",
					method: "POST",
					data: {
						book: this.book.name
					}
				}).then(res => {
					console.log("收藏成功", res.data);
				}).catch(err => {
					console.log("收藏失败", err);
				})
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

	h1 {
		margin: 0 auto;
	}

	.zhangjie {
		line-height: 60px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		line-height: 30px;
		text-align: left;
	}
</style>
