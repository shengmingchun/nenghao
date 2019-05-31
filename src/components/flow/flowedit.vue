<!-- html部分 -->
<template>
	<div id="app">
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='flowname' placeholder='请输入流程名称'></el-input> </el-col>
		  <el-col :span="12"> 
		  <el-select v-model="dljid" style='width:45%' placeholder='请输入斗轮机名称'>
		  		<el-option v-for="(obj,index) in dljarr"  :value="obj.typeid" :key="obj.devname">{{obj.devname}}</el-option>
		  </el-select>
		   </el-col>
		 </el-row>
		<el-row>
		  <el-col :span="12"> 
			<el-select v-model="zcjid" style='width:45%' placeholder='请输入装船机名称'>
				<el-option v-for="(obj,index) in zcjarr"  :value="obj.typeid" :key="obj.devname">{{obj.devname}}</el-option>
			</el-select>
		   </el-col>
		  <el-col :span="12"> 
				<el-select v-model="pdjid" style='width:45%' placeholder='请输入皮带机名称'>
					 <el-option v-for="(obj,index) in pdjarr"  :value="obj.typeid" :key="obj.devname">{{obj.devname}}</el-option>
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
				compid:'',
				flowid:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				flowname:"",
				dljarr:[],
				zcjarr:[],
				pdjarr:[],
			};
		},
		methods:{
			save(){
				var url = this.baseUrl+"/baseFlow/update"
					var data = {flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid,flowid:this.flowid,compid:this.compid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("修改成功");
					this.$router.push({path:'/flowlist'});
					})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var a = this.baseUrl+"/baseDevice/findDljByCompid"
			// 传递给后端的数据
			this.$axios.post(a,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.dljarr=res.data;
				
			});
			
					
			
			
			var b = this.baseUrl+"/baseDevice/findCzjByCompid"
			// 传递给后端的数据
			this.$axios.post(b,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.zcjarr=res.data;
			});
			var c = this.baseUrl+"/baseDevice/findPdjByCompid"
			// 传递给后端的数据
			this.$axios.post(c,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.pdjarr=res.data;
			});
			var obj=this.$route.params.row;
		
			this.dljid=obj.dljid;
			this.zcjid=obj.zcjid;
			this.pdjid=obj.pdjid;
			this.flowname=obj.flowname;
			this.flowid=obj.flowid;
			this.compid=obj.compid;
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
