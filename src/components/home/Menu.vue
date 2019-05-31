<!-- html部分 -->
<template>
	<div  style="height: auto;" id="app">
		<el-menu :default-active="$store.state.defaultActive">
			<span v-for="obj in arr">
				<!-- 没有子菜单 -->
				<el-menu-item v-show="!obj.children" :index="obj.index" @click="fn(obj)">
					<span>{{obj.text}}</span>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu v-show="obj.children" :index="obj.index">
					<template slot="title" >
						<span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item v-for="item in obj.children" :index="item.index" @click="fn(item)" :key='item.text'>
							<span>{{item.text}}</span>
						</el-menu-item> 
					</el-menu-item-group>
				</el-submenu>
			</span>
			
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				arr:[{text:'首页',index:'101',url:"/"},
					 {text:'基本信息',index:'102',children:[
						 {text:'企业信息',index:'1021',url:"/Test01"},
						 {text:'人员信息',index:'1022',url:"/userlist"},
						 {text:'设备类别',index:'1023',url:"/devtypelist"},
						 {text:'设备信息',index:'1024',url:"/devicelist"},
						 {text:'流程信息',index:'1025',url:"/flowlist"}
					 ]},
					 {text:'生产作业',index:'103',children:[
						 {text:'故障信息',index:'1031',url:"/faultlist"},
						 {text:'维修记录',index:'1032',url:"/repairlist"},
					 	 {text:'报岗',index:'1033',url:"/reportlist"},
					 	 {text:'中控',index:'1034',url:"/Control"},
						 {text:'作业信息',index:'1035',url:"/joblist"},
					]},
					 {text:'能耗信息',index:'104',children:[
					 	 {text:'能耗信息',index:'1041',url:"consumelist"},
					 	 {text:'折标煤系数',index:'1042',url:"standradcoallist"},	
					 ]},
					 {text:'统计信息',index:'105',children:[
					 	 {text:'作业量统计',index:'1051',url:"produce"},
					 ]},
					  {text:'用能利率',index:'106',children:[
					 	 {text:'设备利用率',index:'1061',url:"usage"},
					 	 {text:'设备完好率',index:'1062',url:"intactRatio"},
						 {text:'成本核算',index:'1063',url:"cost"},
						 {text:'作业量',index:'1064',url:"amount"},
						 {text:'能耗',index:'1065',url:"consume"},
					 ]},
					 {text:'用能模型',index:'107',children:[
					 	 {text:'企业用能模型',index:'1071',url:"energy"},
						 {text:'企业产销模型',index:'1072',url:"EnergyModel"},
					 ]},
				]
			};
		},
		methods:{
			fn(obj){
				this.$router.push({path:obj.url});
				this.$store.commit("add",{ name: obj.text, type:"warning",url:obj.url,index:obj.index});
				
			}
		}
	}
</script>
<!-- css部分 -->
<style>
.el-menu{
	 background-color: #D3DCE6;
	 height:100%;
}
</style>
