<template>
<div class="detail-container">
	<img class="head-img" :src="tobj.pic">
	<div class="detail-content">
		<a class="hcon-btn" :href="'../process/process?fid='+fid+'&qnum='+tobj.qnum+'&title='+tobj.title" >立即开始</a>
		<div class="qt-time" v-if="tobj.hand_qnum !== '' && tobj.need_dnum !== '0'">
			<div class="num-question" >
				{{ tobj.hand_qnum }}道题目
			</div>
			<div class="num-question num-min">
				{{ tobj.need_dnum }}min
			</div>
		</div>
		<div class="hcon-text">
			<div v-html="tobj.content"></div>
		</div>
		<div class="hcon-open" style="display: none;">展开</div>
		<div class="hcon-zan" v-if="tobj.like_num !== '0'">
			<i class="icons icons-zan"></i>{{ tobj.like_num }}人认为有用
		</div>
	</div>
	<div class="gray-interleave" v-if="ver"></div>
	<div class="hp-version" v-if="ver">
		<div class="ver-top">
			<span class="ver-title">版本记录</span>
			<span class="ver-all">
				<a href="../ver_record/ver_record?fid=id">全部</a>
			</span>
		</div>
		<div class="ver-content">
            <div class="ver">
            	<div class="ver-left">{{ ver }}</div>
            	<div class="ver-right">{{ ttime }}</div>
            </div>
            <div class="limit-two">{{ ver_content }}</div>
        </div>
	</div>
</div>
<div v-on:click="toast">点击弹出Toast</div>
<actionsheet :actions="actions" :visible.sync="sheetVisible"></actionsheet>
</template>
<script>
	import Lib from 'assets/Lib.js'
    import {Toast,Indicator,MessageBox,Actionsheet} from 'components';
	export default{
		data(){
			return{
				ver:'',
				fid:43,
				isLoading: true,
				tobj:{},
                sheetVisible: true,
                actions:[
                    {
                        name:'拍照',
                        method:function(){
                            alert('1');
                        }
                    },
                    {
                        name:'取消',
                        method:function(){
                            alert('eqw');
                        }
                    }
                ]
                
			}
		},
		components:{
            Actionsheet
		},
		ready(){
			var that = this;
			that.getData();
		},
		methods:{
			getData(){
				var that = this;
				that.$http.get('https://api.smzdm.com/ev1/finder_detail/',{
					params:{
						fid: that.fid
					}
				}).then((response) => {
					//success
					var $body = JSON.parse(response.body);
					var $data = $body.data;
					console.log('data:',$body);
					// that.$set('tobj',$data);
					that.tobj = $data
				},(response) => {
					//fail

				});
			},
          toast(){

           // Toast({
           //   message: '提示',
           //   position: 'middle',
           //   duration: 1000
           // });

            // Indicator.open({
            //     text: '加载~~~',
            //     spinnerType: 'snake'
            // });
            // setTimeout(()=>{
            //   Indicator.close();
            // },1000);
            MessageBox('提示', '操作成功');
          }
	}

	}
</script>
<style scoped>
@import '../../assets/style/css.css';
.detail-container{
	background-color: #fff;
}
.head-img{
	width: 100%;
}
.detail-content{
	padding: 25px 4% 20px;
}
.hcon-btn{
	margin: 0 auto;
	color: #fff;
	background-color: #f04848;
    font-size: 16px;
    width: 150px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 35px;
    margin-bottom: 20px;
    display: block;
    text-decoration: none;
}
.qt-time{
    overflow: hidden;
}
.qt-time .num-question{
    float: left;
    margin-right: 10px;
    font-size: 12px;
    line-height: 12px;
    color: #152568;
}
.qt-time .num-min{
    padding-left: 10px;
    border-left: 1px solid #cccccc;
}
.hcon-text{
	margin-top: 15px;
	font-size: 14px;
	color: #666666;
    line-height: 22px;
    word-wrap: break-word;
}
.hcon-open{
	color: #f04848;
    cursor: pointer;
    font-size: 14px;
}
.hcon-zan{
	margin-top: 15px;
    vertical-align: middle;
    color: #888888;
}
.hp-version{
	padding: 20px 4% 15px;
    background-color: #fff;
}
.hp-version .ver-top{
	overflow: hidden;
    padding-bottom: 10px;
    position: relative;
    border: none;
    z-index: 0;
}
.hp-version .ver-top .ver-title {
    font-size: 15px;
    line-height: 25px;
    color: #666666;
    float: left;
}
.hp-version .ver-top .ver-all {
    float: right;
    font-size: 12px;
    line-height: 25px;
    color: #f04848;
}
.hp-version .ver-top::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    box-sizing: border-box;
    border-bottom: 1px solid #dddddd;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}
.hp-version .ver-content  {
    margin-top: 15px;
}
.hp-version .ver-content .ver {
    font-size: 14px;
    color: #666666;
    line-height: 22px;
    overflow: hidden;
    margin-bottom: 5px;
}
.ver .ver-left{
    float: left;
}
.ver .ver-right{
    float: right;
    font-size: 12px;
    color: #888;

}
.hp-version .ver-content .limit-two{
    word-wrap:break-word;
    width: 100%;
    overflow: hidden;
    color: #666;
    font-size: 14px;
}
.detail-content .hcon-zan .icons-zan {
    vertical-align: middle;
    margin-right: 4px;
}
.gray-interleave{
    height: 10px;
    width:100%;
    background-color: #eee;
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
@media screen and (max-width: 680px){
    p img, img {
    width: 100%;
} 
}
 p img, img {
    display: block;
    margin: 0 auto 20px;
    max-width: 600px;
    clear: both;
}
</style>
