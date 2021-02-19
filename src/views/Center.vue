<template>
	<div class="center">
		{{ userinfo }}的个人主页
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
				userinfo: null
			}
		},
		created() {
			let user = this.$jsCookie.get('token')
			if (user) {
				this.user = user
				this.$axios({
					url: "users/getuserinfo",
					method: "get"
				}).then(res => {
					this.userinfo = res.data.username
				})
			}
		}
	}
</script>

<style>
</style>
