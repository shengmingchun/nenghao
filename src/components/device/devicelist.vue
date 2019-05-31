<!-- html部分 -->
<template>
	<div id="app">
		<div style="padding-bottom: 20px;text-align: left; margin-left: 10px; margin-top: 10px;" >
				<el-input
					placeholder="请输入机器名称"
					prefix-icon="el-icon-search"
					v-model="devname" style="width: 20%;">
				</el-input>
				
				<el-select v-model="typeid" style='width:25%' placeholder='请输入设备类别'>
					<el-option></el-option>
					<el-option v-for="(obj,index) in baseDevtype"  :value="obj.typeid" :key="obj.typename">{{obj.typename}}</el-option>
				</el-select>
				
				<el-button @click="search()">查询</el-button>
				<el-button @click="add()">新增</el-button>
		</div>
		<div>
			 <el-table 
				  :data="list"
				  style="width: 100%;margin-left: 10px;">
				  <el-table-column prop="devid" label="设备id"	width="120" >
				  </el-table-column>
				  <el-table-column prop="devname"	label="设备名称" 	width="180">
				  </el-table-column>
				  <el-table-column prop="baseDevtype.typename" label="设备类别"	width="120" >
				  </el-table-column>
				  <el-table-column prop="devdate"	label="投入时间" 	width="180">
				  </el-table-column>
				  <el-table-column prop="devuser" label="责任人"	width="180" >
				  </el-table-column>
				  <el-table-column prop="baseCompany.compname"	label="所属企业" 	width="180">
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
				typeid:'',
				devname:"",
				baseDevtype:[],
				list:[],
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/baseDevice/search"
				var data = {typeid:this.typeid,devname:this.devname};
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
				this.$router.push({path:'/deviceadd'});
			},
			del(row){
				var url = this.baseUrl+"/baseDevice/delete"
				var data = {devid:row.devid};
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
				this.$router.push({name:"deviceedit",params:{row:row}});
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseDevice/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.list=res.data;
			});
			this.search();
			var url = this.baseUrl+"/baseDevtype/list"
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
