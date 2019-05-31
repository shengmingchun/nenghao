<!-- html部分 -->
<template>
	<div id="app">
		<h1>子组件</h1>
		<el-button @click="fn">打印</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn(){
				console.log(this.$store.state.v1);
				console.log(this.$store.state.v2);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
