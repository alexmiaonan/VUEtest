<template>
	<div class="login">
		<el-row>
			<el-col :span="8" :offset="8">
				<el-form :label-position="labelPosition" :model="formLabelAlign">
					<el-form-item label="用户名">
						<el-input placeholder="请输入用户名" v-model="formLabelAlign.username"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input placeholder="请输入密码" v-model="formLabelAlign.password" show-password></el-input>
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
					password: '',
				},
				input1: '',
				input2: ''
			};
		},
		methods: {
			send(){
				console.log("注册成功")
			}
		}
	}
</script>

<style>


</style>
