<!-- html部分 -->
<template>
	<div id="app">
		<el-input style="width: 100px;" v-model="color"></el-input>
		<el-button @click="fn">改变颜色</el-button>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				color:"",
			};
		},
		methods:{
			fn(){
				this.$store.commit("changrColor",this.color);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
