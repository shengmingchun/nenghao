<!-- html部分 -->
<template>
	<div id="app">
		<h1>父组件</h1>
		<children1></children1>
		<children2></children2>
		<color1></color1>
		<color2></color2>
	</div>
</template>
<!-- js部分 -->
<script>
	import children1 from './children1'
	import children2 from './children2'
	import color1 from './color1'
	import color2 from './color2'
	export default {
		name:'',
		components:{children1,children2,color1,color2},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
