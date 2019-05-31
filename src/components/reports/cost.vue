<!-- html部分 -->
<template>
	<div id="app" >
		<div style="margin: 5px auto 5px 0;">
				<el-date-picker
			  v-model="years"
			  type="year"
			   value-format="yyyy"
			  placeholder="选择年">
			</el-date-picker>
			<el-button @click="search()">查询</el-button>
		</div>
	
		
		 <el-table 
			  :data="list"
			  style="width: 50%;margin-left: 10px;">
			  <el-table-column prop="devname"	label="设备名称" 	width="180">
			  </el-table-column> 
				<el-table-column prop="amount"	label="作业量" 	width="120">
				</el-table-column>
				<el-table-column prop="consume"	label="能耗" 	width="120">
				</el-table-column>
				<el-table-column prop="cost"	label="维修费用" 	width="120">
				</el-table-column>
		</el-table>
		
	</div>
</template>
<!-- js部分 -->
<script>
  export default {
    data: function () {
      return {
				years:'2018',
       list:[],
      }
    },
		methods:{
			search(){
				var url = this.baseUrl+"/devInfo/cost"
				var data = {year:this.years}
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list=res.data;
				});
			}
		},
		mounted(){
			this.search();
		}
  }
</script>
<!-- css部分 -->
<style>

</style>
