<template>
	<div class="Heart" @click="change">
		<br>
		<slot name="heart"></slot>
		<br>
		<img :src="state?state2:state1" alt="">
		<span>{{ state?"取消点赞":"点赞" }}</span>
		<br>
	</div>
</template>

<script>
	export default {
		props: {
			stateprops: {
				require: true,
				type: Boolean
			}
		},
		created() {
			this.state = this.stateprops;
		},
		data() {
			return {
				state: true,
				state1: require("../assets/img/1.png"),
				state2: require("../assets/img/2.png")
			}
		},
		methods: {
			change() {
				this.state = !this.state
				this.$emit("toparents", {
					"state": this.state
				})
			},
		}
	}
</script>

<style lang="less">
	.Heart {
		display: inline-block;
		img {
			vertical-align: middle;
		}
	}
</style>
