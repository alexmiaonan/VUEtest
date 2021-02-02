<template>
	<div class="login">
		<el-row>
			<el-col :span="8" :offset="8">
				<el-form :label-position="labelPosition" :model="formLabelAlign">
					<el-form-item label="用户名">
						<el-input placeholder="请输入用户名" v-model="formLabelAlign.username"></el-input>
					</el-form-item>
					<el-form-item label="邮箱">
						<el-input placeholder="请输入邮箱" v-model="formLabelAlign.email"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input placeholder="请输入密码" v-model="formLabelAlign.password" show-password></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input placeholder="请确认密码" v-model="formLabelAlign.password2" show-password></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="send">注册</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition: 'right',
				formLabelAlign: {
					username: '',
					email: '',
					password: '',
					password2: '',
				},
				input1: '',
				input2: ''
			};
		},
		methods: {
			send(){
				this.$axios({
					url:"users/",
					method:"post",
					data:{
						username:this.formLabelAlign.username,
						email:this.formLabelAlign.email,
						password:this.formLabelAlign.password,
						password2:this.formLabelAlign.password2,
					}
				}).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log("错误原因",err)
				})
			}
		}
	}
</script>

<style>


</style>
