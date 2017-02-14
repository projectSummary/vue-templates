<template>
<div class="list-app">
<!-- 首页头图 -->
<img class="head-img" src="../../assets/img/topImg.png" height="250" width="750">
<!-- 入口列表 -->
<div class="list-items">
	<list :items="list"></list>
</div>
<!-- 入口列表 end-->
<div class="weui-loadmore" v-if="isMore">
    <div class="weui-loading"></div>
    <div class="weui-loadmore_tips">正在加载</div>
</div>
<div class="no-more" v-if="isEnd">
  没有了哦
</div>
</div>
</template>
<script>
	import Lib from 'assets/Lib.js'
	
	export default{
		data(){
			return{
				head_img:'',
				list:[],
				isMore:false,
    			isNewMore: true
			}
		},
		components:{
			list
		},
		ready(){
			var that = this;
			that.getData();
		},
		methods:{
			getData(){
				var that = this;
				that.$http.get('https://api.smzdm.com/ev1/get_list/',{
					params:{
						page:1
					}
				}).then((response) => {
					//success
					var $body = JSON.parse(response.body);
					var $data = $body.data;
					console.log('data:',$data);
					that.head_img = $data.top_img;
					that.list = $data.list;
				},(response) => {
					//fail

				});
			}
		}

	}
</script>
<style scoped lang="scss">
@import '../../assets/css.css';
.list-app{
	background-color: #eee;
}
.head-img{
  width: 100%;
  height: 125px;
}

.weui-loadmore{
  width: 65%;
  margin:1.5em auto;
  line-height: 1.6em;
  font-size: 14px;
  text-align: center;
}
.weui-loadmore_tips{
  display: inline-block;
  vertical-align: middle;
  color: #848484;
}
.weui-loading{
  display: inline-block;
  vertical-align: middle;
}
.no-more{
  text-align: center;
  color: #848484;
  font-size: 14px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 500;
}
</style>