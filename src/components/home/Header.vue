<!-- html部分 -->
<template>
	<div>
		<span style="font-size: 20px;color: white;">能耗综合分析平台</span>
		<div style="display: inline-block;float: right;margin-right: 40px;">
			<el-dropdown :hide-on-click="false">
			  <span class="el-dropdown-link">
				{{cname}}<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
				<el-dropdown-item>修改密码</el-dropdown-item>
				<el-dropdown-item @click.native='fn'>退出登录</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
		<div style="display: inline-block;float: right;margin-right: 40px;font-size: 14px;color: white;">
				{{compname}}
		</div>
		
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				cname:'',
				compname:'',
				 arr:[]
			};
		},
		methods:{
			fn(){
				this.$router.push({path:'/Login'})
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.arr = res.data;
			})
			
			// 接收路由传递的参数
			var obj = this.$route.params.obj;
			this.cname=obj.cname;
			this.compname = obj.baseCompany.compname;
			
		}
	}
</script>
<!-- css部分 -->
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
