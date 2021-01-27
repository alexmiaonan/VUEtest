<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- <HiWorld msg="home传来的msg" :num="20" @send="sendmsg"><h1 slot="shang">Home页面插槽1</h1><h2 slot="xia">Home页面插槽2</h2></HiWorld> -->
		<p>home页面</p>
		<Heart :stateprop="heartstate" @toparents="statechange"><span slot="heart">为你点赞！</span></Heart>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	import Heart from "@/components/Heart.vue"
	export default {
		name: 'Home',
		components: {
			// HelloWorld,
			Heart
		},
		methods: {
			// sendmsg(e){
			// 	console.log("Hiworld传输的参数",e)
			// }
			statechange(e) {
				console.log("更改点赞状态！", e.state)
			}
		},
		data() {
			return {
				heartstate: false,
			}
		}
	}
</script>
