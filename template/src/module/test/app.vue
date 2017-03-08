<template>
	<div v-cloak>
 		<navbar :fixed="true" v-model="selected">
 			<tab-item id="1">选项一</tab-item>
 			<tab-item id="2">选项二</tab-item>
 		</navbar>
		<tab-container v-model="selected" class="app-tab-container">
			<tab-container-item id="1">
				<div class="m-circle">
					<ul class="">
						<li>
							<a href="#"><img src="../../assets/img/smzdm_178.jpg"></a>
							<span>优惠券</span>
						</li>
						<li>
							<a href="#"><img src="../../assets/img/hua.jpg"></a>
							<span>优惠券</span>
						</li>
						<li>
							<a href="#"><img src="../../assets/img/hua.jpg"></a>
							<span>优惠券</span>
						</li>
						<li>
							<a href="#"><img src="../../assets/img/hua.jpg"></a>
							<span>优惠券</span>
						</li>
						<li>
							<a href="#"><img src="../../assets/img/hua.jpg"></a>
							<span>优惠券</span>
						</li>
					</ul>
					<ul class="">
						<li>
							<a href="#"><img src="../../assets/img/smzdm_178.jpg"></a>
							<span>优惠券</span>
						</li>
						<li>
							<a href="#"><img src="../../assets/img/hua.jpg"></a>
							<span>优惠券</span>
						</li>
						<li>
							<a href="#"><img src="../../assets/img/hua.jpg"></a>
							<span>优惠券</span>
						</li>
						<li>
							<a href="#"><img src="../../assets/img/hua.jpg"></a>
							<span>优惠券</span>
						</li>
						<li>
							<a href="#"><img src="../../assets/img/hua.jpg"></a>
							<span>优惠券</span>
						</li>
						</ul>
				</div>
			</tab-container-item>
			<tab-container-item id="2">
				 <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
			</tab-container-item>
		</tab-container>
	</div>
</template>
<script>
	/*
	*	首页的5个小圆，下面的推广位,tab切换
	*/
	import '../../assets/style/css.css';
	import { Navbar,TabItem,TabContainer,TabContainerItem} from 'components';
	export default{
		data(){
			return{
				selected:"2",
				show:true
			}
		},
		components:{
			Navbar , TabItem , TabContainer , TabContainerItem
		},
		mounted(){

		},
		methods:{

		}
	}
</script>
<style lang="scss" rel="stylesheet/scss">
	.app-tab-container{
		margin-top: 50px;
		.m-circle{
			ul{
				height: auto;
				padding: 0;
				margin: 0;
				li{
					box-sizing: border-box;
					margin: 10px 1%;
					width: 18%;
					float: left;
					list-style-type: none;
					font-size: 12px;
					text-align: center;
					a{
						display: block;
						width: 80%;
						height: 0px;
						padding-bottom: 80%;
						border-radius: 100%;
						margin: 0 auto;
						border: 1px solid black;
						overflow: hidden;
						img{
							width: 100%;
						}
					}
				}
			}
		}
	}
	.fade-enter-active, .fade-leave-active {
  			transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
  		opacity: 0
	}
</style>
