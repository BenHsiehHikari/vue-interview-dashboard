import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/view/Home.vue';
import Chart from '@/components/view/Charts.vue';
import Table from '@/components/view/Table.vue';

Vue.use(VueRouter);


export default new VueRouter({
	linkActiveClass: '',
    linkExactActiveClass: 'active',   //设置点击状态的class
    mode: 'hash',
    hashbang:true,
	base: __dirname,
	routes: [
		//將頁面元件與path指定的路由連結
		{name: 'Home',path:'/',component: Home},
		{name: 'Chart',path:'/chart',component: Chart},
		{name: 'Table',path:'/table',component: Table}
	]
});
