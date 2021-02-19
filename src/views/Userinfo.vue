<template>
	<div class="userinfo">
		<h3>{{ userinfo }}你可以进行如下操作：</h3>
		<h4><router-link :to="{name:'Setheadpic'}">修改头像</router-link></h4>
		<h4><router-link :to="{name:'Setpassword'}">修改密码</router-link></h4>
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
