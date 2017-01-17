import Vue from 'vue';
import App from './app';
var VueResource = require('vue-resource');
Vue.use(VueResource);
new Vue({
	el: "#body",
	components:{
		App
	}
})