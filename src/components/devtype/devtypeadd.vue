<!-- html部分 -->
<template>
	<div id="app">
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='typename' placeholder='请输入机器名称'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='add()'>添加</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				typename:"",
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/baseDevtype/insert"
				var data = {typename:this.typename};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
				this.$router.push({path:'/devtypelist'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
