<!-- html部分 -->
<template>
	<div id="app">
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='energetype' placeholder='请输入能源类别'></el-input> </el-col>
		   <el-col :span="12"> <el-input style='width:45%' v-model='ratio' placeholder='请输入系数'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='save()'>修改</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				energetype:"",
				ratio:'',
				sid:'',
			};
		},
		methods:{
			save(){
				var url = this.baseUrl+"/energyStandradcoal/update"
					var data = {energetype:this.energetype,ratio:this.ratio,sid:this.sid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("修改成功");
					this.$router.push({path:'/standradcoallist'});
					})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){			
			var obj=this.$route.params.row;
			this.sid=obj.sid;
			this.energetype=obj.energetype;
			this.ratio=obj.ratio;		
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
