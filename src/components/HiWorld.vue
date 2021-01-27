<template>
	<div>
		<!-- <h1>this is hiworld</h1>
		<h2>msg传参为{{msg}}</h2>
		<h2>num传参为{{num}}</h2> -->
		<HeiWorld></HeiWorld>
		<slot name="shang"></slot>
		<button @click="send">向父组件发送参数</button>
		<slot name="xia"></slot>
		<br>
		<br>
		<br>
	</div>
</template>

<script>
	import HeiWorld from "@/components/HeiWorld.vue"
	export default {
		components: {
			HeiWorld
		},
		name: 'HelloWorld',
		props: {
			msg: String,
			num: {
				type: Number,
				required: true
			}
		},
		methods:{
			send(){
				this.$emit("send",{"name":"qiku"})
			}
		}
		
	}
</script>

<style>

</style>
