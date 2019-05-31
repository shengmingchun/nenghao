<!-- html部分 -->
<template>
	<div id="app">
		<el-container>
			<el-header><Header></Header></el-header>
			<el-container>
				<el-aside width="200px"><Menu></Menu></el-aside>
				<el-main><Main></Main></el-main>
			</el-container>
		</el-container>
	</div>
</template>
<!-- js部分 -->
<script>
	import Menu from './Menu'
	import Header from './Header'
	import Main from './Main'
	export default {
		components:{Menu,Header,Main},
		name:'',
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
	*{
		margin: 0px;
		padding: 0px;
	}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
	height: auto;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
	height: auto;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
