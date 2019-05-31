<!-- html部分 -->
<template>
	<div id="app">
		<el-row>
		  <el-col :span="12"> 
			<el-select v-model="devid" style='width:45%' placeholder='请输入设备名称'>
		  		<el-option v-for="(obj,index) in baseDevtype"  :value="obj.devid" :key="obj.devname">{{obj.devname}}</el-option>
			</el-select>
			</el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-date-picker style='width:45%' v-model="repairdate" type="date" placeholder="维修日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"> </el-date-picker> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='cause' placeholder='请输入维修原因'></el-input> </el-col>
		</el-row>
		<el-row>
		 
		  <el-col :span="12"> <el-input style='width:45%' v-model='cost' placeholder='请输入维修费用'></el-input> </el-col>
		
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
				repairid:'',
				devid:"",
				repairdate:'',
				cause:'',
				cost:"",
				baseDevtype:[],
			};
		},
		methods:{
			save(){
				var url = this.baseUrl+"/produceRepair/update"
					var data = {devid:this.devid,repairdate:this.repairdate,cause:this.cause,
				cost:this.cost,repairid:this.repairid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("修改成功");
					this.$router.push({path:'/repairlist'});
					})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.baseDevtype=res.data;
			});
			var obj=this.$route.params.row;
			this.devid=obj.devid;
			this.repairdate=obj.repairdate;
			this.cause=obj.cause;
			this.cost=obj.cost;
			this.repairid=obj.repairid;
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
