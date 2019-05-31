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
		<h1企业耗能</h1>
		<ve-line :data="chartData"></ve-line>
		<h1>企业作业量对比</h1>
		<ve-radar :data="chartData2"></ve-radar>
		<h1>企业设备类别作业量对比</h1>
		<ve-radar :data="chartData3"></ve-radar>
		<h1企业耗电量对比</h1>
		<ve-line :data="chartData4"></ve-line>
		<h1>企业耗水量对比</h1>
		<ve-line :data="chartData5"></ve-line>
		<h1>企业耗油量对比</h1>
		<ve-line :data="chartData6"></ve-line>
		
	</div>
</template>
<!-- js部分 -->
<script>
  export default {
    data() {
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
		 chartData4: {
		  colums:[],
		 rows:[],
		},
		chartData5: {
		  colums:[],
		 rows:[],
		},
		chartData6: {
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
			var url = this.baseUrl+"/energyConsume/flowConsume"
			var data = {year:this.years}
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.chartData=res.data;
			});
			var url = this.baseUrl+"/energyConsume/devTypeConsume"
			
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.chartData2=res.data;
			});
			var url = this.baseUrl+"/energyConsume/devConsume"
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.chartData3=res.data;
			});
			var url = this.baseUrl+"/energyConsume/electricConsume"
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.chartData4=res.data;
			});
			var url = this.baseUrl+"/energyConsume/waterConsume"
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.chartData5=res.data;
			});
			var url = this.baseUrl+"/energyConsume/oilConsume"
			// 传递给后端的数据
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.chartData6=res.data;
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
