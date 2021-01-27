<template>
	<div>
		<h2>计数器</h2>
		<button @click="num2--">-</button>
		<span>{{num2}}</span>
		<button @click="num2++">+</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				num2: 0,
			}
		},
		beforeCreate() {
			console.log("创建之前")
		},
		created() {
			console.log("创建了")
		},
		beforeMount() {
			console.log("渲染之前")
		},
		mounted() {
			console.log("渲染了")
		},
		beforeUpdate() {
			console.log("更新之前")
		},
		updated() {
			console.log("更新了")
		},
		beforeDestroy() {
			console.log("销毁之前")
		},
		destroyed() {
			console.log("销毁了")
		}
	}
</script>

<style>
</style>
