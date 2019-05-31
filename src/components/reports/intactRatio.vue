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
		<h1>能耗综和图表</h1>
		<!-- 折线图 -->
		<ve-line :data="chartData"></ve-line>
		<!-- 柱状图 -->
		
	</div>
</template>
<!-- js部分 -->
<script>
  export default {
    data: function () {
      return {
				years:'2018',
        chartData: {
          columns: [],
          rows: []
        }
      }
    },
		methods:{
			search(){
				var url = this.baseUrl+"/devInfo/intactRatio"
				var data = {year:this.years}
				// 传递给后端的数据
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData=res.data;
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
