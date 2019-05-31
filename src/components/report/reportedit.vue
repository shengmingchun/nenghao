<!-- html部分 -->
<template>
	<div id="app">
		<el-row> 
			<el-col :span="12"> <el-input style='width:45%' v-model='shipname' placeholder='请输入船队名称'></el-input> </el-col>
			<el-col :span="12"> <el-input style='width:45%' v-model='capacity' placeholder='请输入装载量(吨)'></el-input> </el-col> 
		</el-row>
		<el-row> 
			<el-col :span="12"> <el-date-picker style='width:45%' v-model="planjobtime" type="datetime"  placeholder="请输入预计到港时间" value-format="yyyy-MM-dd hh:mm:ss"> </el-date-picker> </el-col>
			<el-col :span="12"> <el-date-picker style='width:45%' v-model="startjobtime" type="datetime"  placeholder="请输入实际到港时间" value-format="yyyy-MM-dd hh:mm:ss"> </el-date-picker> </el-col> 
		</el-row>
		<el-row> 
			<el-col :span="12"> <el-date-picker style='width:45%' v-model="completetime" type="datetime"  placeholder="请输入完成时间" value-format="yyyy-MM-dd hh:mm:ss"> </el-date-picker> </el-col>
			<el-col :span="12"> 
				<el-select v-model="flowid" style='width:45%' placeholder='请输入流程'>
					<el-option v-for="(obj,index) in baseFlow"  :value="obj.flowid" :key="obj.flowname">{{obj.flowname}}</el-option>
				</el-select>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> <el-input style='width:45%' v-model='reportuser' placeholder='请输入报岗人'></el-input> </el-col>
			<el-col :span="12"> 
				<el-select v-model="compid" style='width:45%' placeholder='请输入所属企业'>
					<el-option v-for="(obj,index) in baseCompany"  :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
				</el-select>
			</el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"> <el-button @click='save()'>添加</el-button> <el-button @click='cancel()'>返回</el-button> </el-col>
		</el-row>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				reportid:'',
				shipname:"",
				capacity:'',
				planjobtime:'',
				startjobtime:"",
				completetime:'',
				flowid:'',
				reportuser:"",
				compid:'',
				baseFlow:[],
				baseCompany:[],
			};
		},
		methods:{
			save(){
				var url = this.baseUrl+"/produceReport/update"
					var data = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,startjobtime:this.startjobtime,completetime:this.completetime,flowid:this.flowid,
				reportuser:this.reportuser,compid:this.compid,reportid:this.reportid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("修改成功");
					this.$router.push({path:'/reportlist'});
					})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseFlow/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseFlow=res.data;
			});
			
			var b = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(b,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseCompany=res.data;
			});
			var obj=this.$route.params.row;
			this.shipname=obj.shipname;
			this.capacity=obj.capacity;
			this.planjobtime=obj.planjobtime;
			this.startjobtime=obj.startjobtime;
			this.completetime=obj.completetime;
			this.flowid=obj.flowid;
			this.reportuser=obj.reportuser;
			this.compid=obj.compid;
			this.reportid=obj.reportid;	
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
