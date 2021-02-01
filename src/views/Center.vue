<template>
	<div class="center">
		{{user}}的个人主页
		<br>
		<br>
		<br>
		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: this.$jsCookie.get('user')
			}
		},
	}
</script>

<style>
</style>
