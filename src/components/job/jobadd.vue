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
		  <el-col :span="12"> <el-date-picker style='width:45%' v-model="starttime" type="datetime" placeholder="选择开始时间" format="yyyy 年 MM 月 dd 日 hh时mm分ss秒" value-format="yyyy-MM-dd hh:mm:ss"> </el-date-picker> </el-col>
		  <el-col :span="12"> <el-date-picker style='width:45%' v-model="completetime" type="datetime" placeholder="选择结束时间" format="yyyy 年 MM 月 dd 日 hh时mm分ss秒" value-format="yyyy-MM-dd hh:mm:ss"> </el-date-picker> </el-col>		
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='duration' placeholder='请输入运行时长'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='amount' placeholder='请输入作业量'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='reportid' placeholder='请输入报岗id'></el-input> </el-col>
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
				devid:"",
				starttime:'',
				completetime:'',
				duration:"",
				amount:'',
				reportid:"",
				baseDevtype:[],
			};
		},
		methods:{
			add(){
				var url = this.baseUrl+"/produceJob/insert"
				var data = {devid:this.devid,starttime:this.starttime,completetime:this.completetime,
				duration:this.duration,amount:this.amount,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
			}).then(res=>{
				this.$message("添加成功");
				this.$router.push({path:'/joblist'});
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
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
