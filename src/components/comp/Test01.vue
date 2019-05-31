<!-- html部分 -->
<template>
	<div id="app">
		<div style="padding-bottom: 20px;margin-top: 10px; text-align: left;" >
				<el-input
					placeholder="请输入用户名"
					prefix-icon="el-icon-search"
					v-model="search_compname" style="width: 40%;padding-left:10px ;">
				</el-input>
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		
			
				
			
		
		 <el-table 
			  :data="list"
			  style="width: 100%;margin-left: 10px;">
			  <el-table-column prop="compid" label="公司id"	width="180" >
			  </el-table-column>
			  <el-table-column prop="compname"	label="公司名称" 	width="180">
			  </el-table-column>
			   <el-table-column prop="contacts"	label="联系人" 	width="180">
			  </el-table-column>
			   <el-table-column prop="industry"	label="行业" 	width="160">
			  </el-table-column>
			  <el-table-column prop="address" label="地址">
			  </el-table-column>
			  <el-table-column fixed="right" label="操作" width="120">
				  <template slot-scope="scope">
					<el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
					<el-button type="text" size="small"  @click="del(scope.row)">移除</el-button>
				  </template>
				</el-table-column>
		</el-table>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				search_compname:"",
				list:[],
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/baseCompany/search"
				var data = {compname:this.search_compname};
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
				this.$router.push({path:'/compadd'});
			},
			del(row){
				var url = this.baseUrl+"/baseCompany/delete"
				var data = {compid:row.compid};
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
				this.$router.push({name:"compedit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
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
