<!-- html部分 -->
<template>
	<div id="app">
		<div style="text-align: left; " >
			<el-tag v-for="(tag,index) in $store.state.tags" :key="tag.name" closable :type="tag.type" 
			@click="fn(tag,index)" @close="fn2(tag,index)" style="margin-left: 5px; ">
				{{tag.name}}
			</el-tag>
		</div>
		<router-view/>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn(tag,index){
				this.$router.push({path:tag.url});
				this.$store.commit("update",index);
				this.$store.commit("change",tag.index);
			},
			fn2(tag,index){
				if(this.$store.state.tags.length==1){
					this.$message("最后一个了");
				}else{
					var falg=this.$store.state.tags[index].type=="warning";
					this.$store.commit("del",index);
					
					if(falg){
							
						if(index==0){
							this.$store.commit("update",0);
							this.$router.push({path:this.$store.state.tags[index].url});
							this.$store.commit("change",this.$store.state.tags[index-1].index);
						}else{
							this.$store.commit("update",index-1);
							this.$router.push({path:this.$store.state.tags[index-1].url});
							this.$store.commit("change",this.$store.state.tags[index-1].index);
						}
					}
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
