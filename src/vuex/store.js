import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state对象用来存储数据
var state={
	tags: [
	  { name: '首页', type:'warning',url:"/",index:'101'},
	],
	defaultActive:'101',
	loginFlag:false,
}
// mutations对象用来存储方法
var mutations = {
	add(state,tag){
		for(var obj of state.tags){
			obj.type="info";
		}
		for(var obj of state.tags){
			if(obj.name==tag.name){
				obj.type="warning";
				return;
			}
		}
		state.tags.push(tag);	
	},
	update(state,index){
		for(var obj of state.tags){
			obj.type="info";
		}
		state.tags[index].type='warning';
	},
	del(state,index){
		state.tags.splice(index,1);
	},
	change(state,index){
		state.defaultActive=index;
	},
	set(state,index){
		debugger
		state.tags=[ { name: '首页', type:'warning',url:"/",index:'101'},];
	}
	
}
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})