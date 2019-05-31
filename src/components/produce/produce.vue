<!-- html部分 -->
<template>
	<div id="app">
		 <el-date-picker
		  v-model="years"
		  type="year"
		   value-format="yyyy"
		  placeholder="选择年">
		</el-date-picker>
		<el-button @click="search()">查询</el-button>
		<h1>流程作业量对比</h1>
		<!-- 折线图 -->
		<ve-line :data="chartData"></ve-line>
		<h1>设备类别作业量对比</h1>
		<ve-line :data="chartData2"></ve-line>
		<h1>设备作业量对比</h1>
		<ve-line :data="chartData3"></ve-line>
	</div>
</template>
<!-- js部分 -->
<script>
  export default {
    data: function () {
      return {
		  years:'2018',
        chartData: {
          colums:[],
         rows:[],
        },
		chartData2: {
		  colums:[],
		 rows:[],
		},
		chartData3: {
		 colums:[],
		 rows:[],
		},
      }
    },
	methods:{
		search(){
			this.fn();
		},
		fn(){
			// 后端网址
			var url = this.baseUrl+"/jobAmount/flowAmount"
			var data = {year:this.years}
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.chartData=res.data;
			});
			var url = this.baseUrl+"/jobAmount/devTypeAmount"
			
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.chartData2=res.data;
			});
			var url = this.baseUrl+"/jobAmount/devAmount"
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.chartData3=res.data;
			});
		}
	},
	mounted:function(){
		this.fn();
		
	}
  }
</script>
<!-- css部分 -->
<style>

</style>
