import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import welcome from '@/components/home/welcome'
import Login from '@/components/home/Login'
import Test01 from '@/components/comp/Test01'
import compadd from '@/components/comp/compadd'
import compedit from '@/components/comp/compedit'
import devtypelist from '@/components/devtype/devtypelist'
import devtypeadd from '@/components/devtype/devtypeadd'
import devtypeedit from '@/components/devtype/devtypeedit'
import devicelist from '@/components/device/devicelist'
import deviceadd from '@/components/device/deviceadd'
import deviceedit from '@/components/device/deviceedit'
import flowlist from '@/components/flow/flowlist'
import flowadd from '@/components/flow/flowadd'
import flowedit from '@/components/flow/flowedit'
import faultlist from '@/components/fault/faultlist'
import faultadd from '@/components/fault/faultadd'
import faultedit from '@/components/fault/faultedit'
import repairlist from '@/components/repair/repairlist'
import repairadd from '@/components/repair/repairadd'
import repairedit from '@/components/repair/repairedit'
import reportlist from '@/components/report/reportlist'
import reportadd from '@/components/report/reportadd'
import reportedit from '@/components/report/reportedit'
import Control from '@/components/zk/Control'
import joblist from '@/components/job/joblist'
import jobadd from '@/components/job/jobadd'
import jobedit from '@/components/job/jobedit'
import standradcoallist from '@/components/standradcoal/standradcoallist'
import standradcoaladd from '@/components/standradcoal/standradcoaladd'
import standradcoaledit from '@/components/standradcoal/standradcoaledit'
import consumelist from '@/components/consume/consumelist'
import consumeadd from '@/components/consume/consumeadd'
import consumeedit from '@/components/consume/consumeedit'
import produce from '@/components/produce/produce'
import energy from '@/components/energy/energy'
import EnergyModel from '@/components/energy/EnergyModel'
import userlist from '@/components/user/userlist'
import useradd from '@/components/user/useradd'
import useredit from '@/components/user/useredit'
import usage from '@/components/reports/usage'
import intactRatio from '@/components/reports/intactRatio'
import cost from '@/components/reports/cost'
import amount from '@/components/reports/amount'
import consume from '@/components/reports/consume'
Vue.use(Router)
import parent from '@/components/zj/parent'
export default new Router({
	mode:'history',
  routes: [
	  
	  {path: '/Login',name: 'Login',component:Login,},
		 {
		  path: '/',
		 
		  component: index,
			children:[
				{path: '/',name: 'welcome',component: welcome,},
				{path: 'Test01',name: 'Test01',component: Test01,},
				{path: 'userlist',name: 'userlist',component: userlist,},
				{path: 'useradd',name: 'useradd',component: useradd,},
				{path: 'useredit',name: 'useredit',component: useredit,},
				{path: 'compadd',name: 'compadd',component: compadd,},
				{path: 'compedit',name: 'compedit',component: compedit,},
				{path: 'devtypelist',name: 'devtypelist',component: devtypelist,},
				{path: 'devtypeadd',name: 'devtypeadd',component: devtypeadd,},
				{path: 'devtypeedit',name: 'devtypeedit',component: devtypeedit,},
				{path: 'devicelist',name: 'devicelist',component: devicelist,},
				{path: 'deviceadd',name: 'deviceadd',component: deviceadd,},
				{path: 'deviceedit',name: 'deviceedit',component: deviceedit,},
				{path: 'flowlist',name: 'flowlist',component: flowlist,},
				{path: 'flowadd',name: 'flowadd',component: flowadd,},
				{path: 'flowedit',name: 'flowedit',component: flowedit,},
				{path: 'faultlist',name: 'faultlist',component: faultlist,},
				{path: 'faultadd',name: 'faultadd',component: faultadd,},
				{path: 'faultedit',name: 'faultedit',component: faultedit,},
				{path: 'repairlist',name: 'repairlist',component: repairlist,},
				{path: 'repairadd',name: 'repairadd',component: repairadd,},
				{path: 'repairedit',name: 'repairedit',component: repairedit,},
				{path: 'reportlist',name: 'reportlist',component: reportlist,},
				{path: 'reportadd',name: 'reportadd',component: reportadd,},
				{path: 'reportedit',name: 'reportedit',component: reportedit,},
				{path: 'Control',name: 'Control',component: Control,},
				{path: 'joblist',name: 'joblist',component: joblist,},
				{path: 'jobadd',name: 'jobadd',component: jobadd,},
				{path: 'jobedit',name: 'jobedit',component: jobedit,},
				{path: 'standradcoallist',name: 'standradcoallist',component: standradcoallist,},
				{path: 'standradcoaladd',name: 'standradcoaladd',component: standradcoaladd,},
				{path: 'standradcoaledit',name: 'standradcoaledit',component: standradcoaledit,},
				{path: 'consumelist',name: 'consumelist',component: consumelist,},
				{path: 'consumeadd',name: 'consumeadd',component: consumeadd,},
				{path: 'consumeedit',name: 'consumeedit',component: consumeedit,},
				{path: 'produce',name: 'produce',component: produce,},
				{path: 'energy',name: 'energy',component: energy,},
				{path: 'EnergyModel',name: 'EnergyModel',component: EnergyModel,},
				{path: 'usage',name: 'usage',component: usage,},
				{path: 'intactRatio',name: 'intactRatio',component: intactRatio,},
				{path: 'cost',name: 'cost',component: cost,},
				{path: 'amount',name: 'amount',component: amount,},
				{path: 'consume',name: 'consume',component: consume,},
			]
		},
		{path: '/parent',name: 'parent',component: parent,},
		
  ]
})
