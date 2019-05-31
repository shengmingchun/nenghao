<!-- html部分 -->
<template>
	<div id="app">
		<div style="padding-bottom: 20px;text-align: left; margin-left: 10px; margin-top: 10px;" >
				<el-input
					placeholder="请输入作业量"
					prefix-icon="el-icon-search"
					v-model="amount" style="width: 20%;">
				</el-input>
				
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<div>
			 <el-table 
				  :data="list"
				  style="width: 100%;margin-left: 10px;">
				  <el-table-column prop="jobid" label="id"	width="100" >
				  </el-table-column>
				  <el-table-column prop="devname"	label="设备名称" 	width="180">
				  </el-table-column>
				  <el-table-column prop="starttime" label="开始作业时间"	width="180" >
				  </el-table-column>
				  <el-table-column prop="completetime"	label="结束作业时间" 	width="180">
				  </el-table-column>
				  <el-table-column prop="duration" label="运行时长"	width="120" >
				  </el-table-column>
				  <el-table-column prop="amount" label="作业量"	width="120" >
				  </el-table-column>
				  <el-table-column prop="reportid" label="报岗id"	width="80" >
				  </el-table-column>
				  <el-table-column fixed="right" label="操作" width="120">
					  <template slot-scope="scope">
						<el-button type="text" size="small"  @click="edit(scope.row)">编辑</el-button>
						<el-button type="text" size="small"  @click="del(scope.row)">移除</el-button>
					  </template>
					</el-table-column>
			</el-table>
		</div>
		
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				amount:"",
				list:[],
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/produceJob/search"
				var data = {amount:this.amount};
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.list=res.data;
				})
			},
			add(){
				this.$router.push({path:'/jobadd'});
			},
			del(row){
				var url = this.baseUrl+"/produceJob/delete"
				var data = {jobid:row.jobid};
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
				}).then(res=>{
					this.$message("删除成功");
					this.search();
					})
					
			},
			edit(row){
				this.$router.push({name:"jobedit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/produceJob/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list=res.data;
			});
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
