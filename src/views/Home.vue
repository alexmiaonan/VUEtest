<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<HiWorld msg="home传来的msg" :num="20" @send="sendmsg">
			<h1 slot="shang">Home页面插槽1</h1>
			<h2 slot="xia">Home页面插槽2</h2>
		</HiWorld>
		<Heart :stateprop="heartstate" @toparents="statechange"><span slot="heart">为你点赞！</span></Heart>
		<br>
		<br>
		<Star :starnumprop="star" @tellparent="starchange"><span slot="to">评星！</span></Star>
		<br>
		<br>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	import Heart from "@/components/Heart/Heart.vue"
	import Star from "@/components/Star/Star.vue"
	export default {
		// name: 'Home',
		components: {
			HelloWorld,
			Heart,
			Star
		},
		methods: {
			sendmsg(e) {
				console.log("Hiworld传输的参数", e)
			},
			statechange(e) {
				console.log("更改服务器点赞状态！state:", e.state)
			},
			starchange(e) {
				console.log("更改服务器评星状态！state:", e.starnum)
			}
		},
		data() {
			return {
				heartstate: false,
				star: 2
			}
		}
	}
</script>
