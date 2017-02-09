import Vue from 'vue';
import App from './app';
//import Mint from 'mint-ui';
//import 'mint-ui/lib/style.css';
var VueResource = require('vue-resource');

Vue.use(VueResource);
//Vue.use(Mint);

new Vue({
	el: "#body",
	components:{
		App
	}
});
