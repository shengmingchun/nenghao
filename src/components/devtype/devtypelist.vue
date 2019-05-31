<!-- html部分 -->
<template>
	<div id="app">
		<div style="padding-bottom: 20px;text-align: left; margin-left: 10px; margin-top: 10px;" >
				<el-input
					placeholder="请输入机器名称"
					prefix-icon="el-icon-search"
					v-model="typename" style="width: 40%;">
				</el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<div>
			 <el-table 
				  :data="list"
				  style="width: 50%;margin-left: 10px;">
				  <el-table-column prop="typeid" label="设备id"	width="180" >
				  </el-table-column>
				  <el-table-column prop="typename"	label="设备名称" 	width="180">
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
				typename:"",
				list:[],
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/baseDevtype/search"
				var data = {typename:this.typename};
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
				this.$router.push({path:'/devtypeadd'});
			},
			del(row){
				var url = this.baseUrl+"/baseDevtype/delete"
				var data = {typeid:row.typeid};
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
				this.$router.push({name:"devtypeedit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevtype/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list=res.data;
			});
			this.search();
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
