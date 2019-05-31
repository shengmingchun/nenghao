<!-- html部分 -->
<template>
	<div id="app">
		<div style="padding-bottom: 20px;text-align: left; margin-left: 10px; margin-top: 10px;" >
				<el-input
					placeholder="请输入船队名称"
					prefix-icon="el-icon-search"
					v-model="shipname" style="width: 20%;">
				</el-input>
				
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<div>
			 <el-table 
				  :data="list"
				  style="width: 100%;margin-left: 10px;">
				  <el-table-column prop="reportid" label="id"	width="60" >
				  </el-table-column>
				  <el-table-column prop="shipname"	label="船队名称" 	width="120">
				  </el-table-column>
				  <el-table-column prop="capacity" label="装载量(吨)"	width="100" >
				  </el-table-column>
				  <el-table-column prop="planjobtime"	label="预计到港时间" 	width="150">
				  </el-table-column>
				  <el-table-column prop="startjobtime" label="实际到港时间"	width="150" >
				  </el-table-column>
				  <el-table-column prop="completetime"	label="完成时间" 	width="150">
				  </el-table-column>
				  <el-table-column prop="flowname" label="流程"	width="80" >
				  </el-table-column>
				  <el-table-column prop="reportuser"	label="报岗人" 	width="90">
				  </el-table-column>
				  <el-table-column prop="compname" label="所属企业"	width="80" >
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
				shipname:"",
				list:[],
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/produceReport/search"
				var data = {shipname:this.shipname};
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
				this.$router.push({path:'/reportadd'});
			},
			del(row){
				var url = this.baseUrl+"/produceReport/delete"
				var data = {reportid:row.reportid};
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
				this.$router.push({name:"reportedit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/produceReport/list"
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
