import Vue from 'vue';
import App from './app';
var VueResource = require('vue-resource');
var VueRouter = require('vue-router');
Vue.use(VueResource);
Vue.use(VueRouter);
new Vue({
	el: "#body",
	components:{
		App
	}
})