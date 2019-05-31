<!-- html部分 -->
<template>
	<div id="app">
		<el-row>
		  <el-col :span="12"> 
			<el-select v-model="devid" style='width:45%' placeholder='请输入设备名称'>
		  		<el-option v-for="(obj,index) in baseDevice"  :value="obj.devid" :key="obj.devname">{{obj.devname}}</el-option>
			</el-select>
			</el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='faulttime' placeholder='请输入故障时间'></el-input>  </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='cause' placeholder='请输入故障原因'></el-input> </el-col>
		</el-row>
		<el-row>
		 <el-col :span="12"> <el-input style='width:45%' v-model='faultuser' placeholder='请输入报告人'></el-input> </el-col>
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
				faulttime:"",
				cause:'',
				faultuser:'',
				devid:"",
				baseDevice:[],
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/produceFault/insert"
				var data = {faulttime:this.faulttime,cause:this.cause,faultuser:this.faultuser,
				devid:this.devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
				this.$router.push({path:'/faultlist'});
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
				this.baseDevice=res.data;
			});
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
