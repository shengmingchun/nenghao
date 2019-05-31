<!-- html部分 -->
<template>
	<div id="app">
		<h1 style="margin-bottom: 50px;">信息添加页面</h1>
		<el-row>
		  <!-- <el-col :span="12"> <el-input style='width:45%' v-model='compid' placeholder='ID'></el-input> </el-col> -->
		  <el-col :span="12"> <el-input style='width:45%' v-model='compname' placeholder='请输入公司姓名'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='contacts' placeholder='请输入联系人'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='comptel' placeholder='请输入联系电话'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='industry' placeholder='请输入行业'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='address' placeholder='请输入地址'></el-input> </el-col>
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
				compname:'',
				contacts:'',
				comptel:'',
				industry:'',
				address:''
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/baseCompany/insert"
				var data = {compname:this.compname,contacts:this.contacts,comptel:this.comptel,industry:this.industry,
				address:this.address};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
				this.$router.push({path:'/Test01'});
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
