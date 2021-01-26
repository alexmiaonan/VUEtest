<template>
	<div class="about">
		<h1>This is an about page</h1>
		<div>
			<h2>计数器</h2>
			<button @click="jianfa">-</button>
			<span>{{num}}</span>
			<button @click="jiafa">+</button>
		</div>
		<div>
			<h2>计数器</h2>
			<button @click="num2--">-</button>
			<span>{{num2}}</span>
			<button @click="num2++">+</button>
		</div>
		<div >{{ normal() }}</div>
		<div>{{compute1}}</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				num: 0,
				num2: 0
			}
		},
		methods: {
			normal() {
				console.log("普通方法执行了");
				return "普通方法"
			},
			jianfa() {
				this.num--;
			}, 
			jiafa() {
				this.num++;
			},
		},
		computed: {
			compute1() {
				console.log("计算属性执行了");
				return "计算属性" + this.num
			},
		},
		watch: {
			num(newvalue, oldvalue) {
				console.log("监听器执行了", newvalue, oldvalue);

			}
		}
	}
</script>
