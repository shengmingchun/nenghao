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
		  <el-col :span="12"> <el-input style='width:45%' v-model='electric' placeholder='请输入电耗(kw.h)'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='water' placeholder='请输入水耗(吨)'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:45%' v-model='oil' placeholder='请输入油耗(L)'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:45%' v-model='reportid' placeholder='请输入报岗id'></el-input> </el-col>
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
				consumeid:'',
				devid:"",
				electric:'',
				water:'',
				oil:"",
				reportid:'',
				baseDevtype:[],
			};
		},
		methods:{
			save(){
				var url = this.baseUrl+"/energyConsume/update"
					var data = {devid:this.devid,electric:this.electric,water:this.water,
				oil:this.oil,reportid:this.reportid,consumeid:this.consumeid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("修改成功");
					this.$router.push({path:'/consumelist'});
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
			this.consumeid=obj.consumeid;
			this.electric=obj.electric;
			this.water=obj.water;
			this.oil=obj.oil;
			this.reportid=obj.reportid;
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
