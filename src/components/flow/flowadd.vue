<!-- html部分 -->
<template>
	<div id="app">
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='flowname' placeholder='请输入流程名称'></el-input> </el-col>
		  <el-col :span="12"> 
		  <el-select v-model="dljid" style='width:45%' placeholder='请输入斗轮机名称'>
		  		<el-option v-for="(obj,index) in dljarr"  :value="obj.devid" :key="obj.devname">{{obj.devname}}</el-option>
		  </el-select>
		   </el-col>
		 </el-row>
		<el-row>
		  <el-col :span="12"> 
			<el-select v-model="zcjid" style='width:45%' placeholder='请输入装船机名称'>
				<el-option v-for="(obj,index) in zcjarr"  :value="obj.devid" :key="obj.devname">{{obj.devname}}</el-option>
			</el-select>
		   </el-col>
		  <el-col :span="12"> 
				<el-select v-model="pdjid" style='width:45%' placeholder='请输入皮带机名称'>
					 <el-option v-for="(obj,index) in pdjarr"  :value="obj.devid" :key="obj.devname">{{obj.devname}}</el-option>
				</el-select>
		   </el-col>
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
			add(){
				
				var url = this.baseUrl+"/baseFlow/insert"
				var data = {flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
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
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
