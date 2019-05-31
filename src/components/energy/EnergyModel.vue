<template>
	<div>
		<span>请选择年份：</span> <el-date-picker v-model="year"  type="year"
			placeholder="请选择年份" value-format='yyyy'>
		  </el-date-picker>
		  <el-button @click='search()'>查询</el-button>
		<center>
		<h1>生产模型-作业量</h1>
		<div style="display: inline-block;width: 1000px;height: 600px;text-align: left;background: #f4f4f4;padding-left: 30px;">
			<canvas id="model1"></canvas>
		</div>
		<h1>能源消耗-折标煤</h1>
		<div style="display: inline-block;width: 1000px;height: 600px;text-align: left;background: #f4f4f4;padding-left: 30px;">
			<canvas id="model2"></canvas>
		</div>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				year:'2018',
				data1: {},
				data2: {}
				
			};
		},
		methods:{
			search(){
				var url = this.baseUrl+"/produceJob/model"
				var data = {year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					this.data1=res.data;  
					this.draw1();
				  })
				  
			  var url = this.baseUrl+"/energyConsume/model"
			  var data = {year:this.year};
			  this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				  }
				}).then(res=>{
					this.data2=res.data;  
					this.draw2();
				})
			},
			
			// 画作业量模型
			draw1(){
				//获取Canvas对象(画布)
				var canvas = document.getElementById("model1");
				var context = canvas.getContext("2d");
				// 流程
				var flows = this.data1.children;
				
				canvas.width=1000;
				canvas.height=600;
				context.moveTo(150,300);
				context.fillStyle = 'green';
				context.font = "16px Times New Roman";      
				context.fillText(" "+this.data1.comp+": "+this.data1.amount, 0, 305);
				context.lineTo(295,300);
				context.lineWidth = 1;
				context.strokeStyle = "lightseagreen";
				// 箭头
				context.stroke();
				context.moveTo(260,290);
				context.lineTo(295,300);
				context.stroke();
				context.moveTo(260,310);
				context.lineTo(295,300);
				context.stroke();
				//流程
				var flowHeight = (600-60*2)/(flows.length-1);
				for(var i=0;i<flows.length;i++){
					context.moveTo(300,60+flowHeight*i);
					context.lineTo(350,60+flowHeight*i);
					context.stroke();
					// 文字
					context.fillStyle = 'orangered';
					context.fillText(" 流程"+flows[i].flow+": "+flows[i].amount+"", 350, 60+flowHeight*i+5);
					
					// 箭头
					context.moveTo(520,60+flowHeight*i);
					context.lineTo(645,60+flowHeight*i);
					context.stroke();
					context.moveTo(620,60+flowHeight*i-10);
					context.lineTo(645,60+flowHeight*i);
					context.stroke();
					context.moveTo(620,60+flowHeight*i+10);
					context.lineTo(645,60+flowHeight*i);
					context.stroke();
					// 设备
					var devs = flows[i].children;
					for(var j=0;j<devs.length;j++){
						context.moveTo(650,60+flowHeight*i+(j-1)*30);
						context.lineTo(700,60+flowHeight*i+(j-1)*30);
						context.stroke();
						// 文字
						context.fillStyle = 'royalblue';
						context.fillText(" "+devs[j].dev+": "+devs[j].amount, 700, 60+flowHeight*i+(j-1)*30+5);
					}
					context.moveTo(650,60+flowHeight*i-30);
					context.lineTo(650,60+flowHeight*i+30);
					context.stroke();
					
				}
				
				context.moveTo(300,60);
				context.lineTo(300,600-60);
				context.stroke();
			},
			// 画能耗模型
			draw2(){
				//获取Canvas对象(画布)
				var canvas = document.getElementById("model2");
				var context = canvas.getContext("2d");
				// 流程
				var flows = this.data2.children;
				
				canvas.width=1000;
				canvas.height=600;
				context.moveTo(170,300);
				context.fillStyle = 'green';
				context.font = "16px Times New Roman";      
				context.fillText(" "+this.data2.comp+": "+this.data2.consume, 0, 305);
				context.lineTo(295,300);
				context.lineWidth = 1;
				context.strokeStyle = "lightseagreen";
				// 箭头
				context.stroke();
				context.moveTo(260,290);
				context.lineTo(295,300);
				context.stroke();
				context.moveTo(260,310);
				context.lineTo(295,300);
				context.stroke();
				//流程
				var flowHeight = (600-60*2)/(flows.length-1);
				for(var i=0;i<flows.length;i++){
					context.moveTo(300,60+flowHeight*i);
					context.lineTo(350,60+flowHeight*i);
					context.stroke();
					// 文字
					context.fillStyle = 'orangered';
					context.fillText(" 流程"+flows[i].flow+": "+flows[i].consume+"", 350, 60+flowHeight*i+5);
					
					// 箭头
					context.moveTo(550,60+flowHeight*i);
					context.lineTo(645,60+flowHeight*i);
					context.stroke();
					context.moveTo(620,60+flowHeight*i-10);
					context.lineTo(645,60+flowHeight*i);
					context.stroke();
					context.moveTo(620,60+flowHeight*i+10);
					context.lineTo(645,60+flowHeight*i);
					context.stroke();
					// 设备
					var devs = flows[i].children;
					for(var j=0;j<devs.length;j++){
						context.moveTo(650,60+flowHeight*i+(j-1)*30);
						context.lineTo(700,60+flowHeight*i+(j-1)*30);
						context.stroke();
						// 文字
						context.fillStyle = 'royalblue';
						context.fillText(" "+devs[j].dev+": "+devs[j].consume, 700, 60+flowHeight*i+(j-1)*30+5);
					}
					context.moveTo(650,60+flowHeight*i-30);
					context.lineTo(650,60+flowHeight*i+30);
					context.stroke();
					
				}
				
				context.moveTo(300,60);
				context.lineTo(300,600-60);
				context.stroke();
			}
		},
		mounted(){
			this.search();
		}
		
	}
</script>

<style>

</style>
