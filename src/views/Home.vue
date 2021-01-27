<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<HiWorld msg="home传来的msg" :num="20" @send="sendmsg"><h1 slot="shang">Home页面插槽1</h1><h2 slot="xia">Home页面插槽2</h2></HiWorld>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	export default {
		name: 'Home',
		components: {
			HelloWorld,
		},
		methods:{
			sendmsg(e){
				console.log("Hiworld传输的参数",e)
			}
		}
	}
</script>
