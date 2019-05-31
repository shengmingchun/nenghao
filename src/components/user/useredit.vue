<!-- html部分 -->
<template>
	<div id="app">
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='cname' placeholder='请输入姓名'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='username' placeholder='请输入用户名'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='password' placeholder='请输入密码'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='telno' placeholder='请输入手机号'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='email' placeholder='请输入邮箱'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='sex' placeholder='请输入性别'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
		 <el-select v-model="compid" style='width:45%'>
		 			  <el-option v-for="(obj,index) in baseCompany"  :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
		 </el-select>
		 
		 </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='save()'>保存</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				userid:'',
				cname:'',
				username:'',
				password:"",
				telno:"",
				email:"",
				sex:"",
				compid:"",
				baseCompany:[],
			};
		},
		methods:{
			save(){
				var url = this.baseUrl+"/baseUser/update"
				var data = {userid:this.userid,cname:this.cname,username:this.username,password:this.password,telno:this.telno,
				email:this.email,sex:this.sex,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("修改成功");
				this.$router.push({path:'/userlist'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var obj=this.$route.params.row;
			this.cname=obj.cname;
			this.username=obj.username;
			this.password=obj.password;
			this.telno=obj.telno;
			this.email=obj.email;
			this.sex=obj.sex;
			this.compid=obj.compid;
			this.userid=obj.userid;
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseCompany=res.data;
			});
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
