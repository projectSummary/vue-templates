<template>
<div class="detail">
  <zdm-header :title="title">
    <div slot="left" class="logo">
    </div>
  </zdm-header>
  <div class="zdm-swipe">
       <swipe :auto="4000">
          <swipe-item>
              <img src="../../assets/img/smzdm_178.jpg">
          </swipe-item>
          <swipe-item>
              <img src="../../assets/img/smzdm_178.jpg">
          </swipe-item>
          <swipe-item>
              <img src="../../assets/img/smzdm_178.jpg">
          </swipe-item>
        </swipe>
  </div>
  <div class="upload">
    <upload :url="imgurl">
    </upload>
  </div>
  <ul class="list list_preferential" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
   <li v-for="item in list" class="">
      <a :href="item.src" target="_blank">
        <div class="image_wrap">
          <div class="image">
            <img :src="item.imglink">
          </div>
        </div>
        <address>
          <span>{{item.time}}</span>{{item.business}}
        </address>
        <h2>{{item.content}}</h2>
        <div class="tips">
          <em>{{item.price}}</em>
          <span>
            <i></i>
            {{item.comment}}
          </span>
        </div>
      </a>
   </li>
  </ul>
  <div class="foot-banner">
     <div class="download-normal">
       <a >
         <span class="download-left">
           <img src="" class="download-logo" style="margin-top: 11.25px;">
           <em class="download-info">
             高性价比网购推荐<br>品质生活起点站
           </em>
         </span>
         <span class="download-btn">
           下载 App
         </span>
       </a>
       <a href="javascript:void(0);" class="download-close">
         <img src="">
       </a>
     </div>
  </div>
  
</div>
</template>
<script>
    import Vue from 'vue';
	  import Lib from 'assets/Lib';
    import axios from 'axios';
    import { zdmHeader, Upload } from 'components';
    import { Swipe, SwipeItem, InfiniteScroll} from 'mint-ui';
    import 'mint-ui/lib/style.css';
    Vue.use(InfiniteScroll);

	export default{
		data(){
			return{
        title:"什么值得买",
				loading: false,
        imgurl: "//new.brand.smzdm.com/common/upload_pic_ajax/",
        list:[
            {  
              src:'https://m.smzdm.com/p/7010188/?from=index',
              imglink:'https://tp-y.zdmimg.com/201703/12/58c564dd7a1464767.png_d320.jpg',
              time:"03-12 23:20",
              business: "京东",
              content:'千元赠品来袭：京东 家电各品类大促',
              price:"满5000送飞利浦粉钻，各档优惠券",
              comment:"431"

            },
            {
              src:'https://m.smzdm.com/p/7010188/?from=index',
              imglink:'https://tp-y.zdmimg.com/201703/12/58c564dd7a1464767.png_d320.jpg',
              time:"03-12 23:20",
              business: "京东",
              content:'千元赠品来袭：京东 家电各品类大促',
              price:"满5000送飞利浦粉钻，各档优惠券",
              comment:"431"
            }
        ]
                
			}
		},
		components:{
            zdmHeader, Swipe, SwipeItem, Upload
		},
		mounted(){
			var that = this;
			that.getData();
		},
		methods:{
  			getData(){
  				var that = this;
  				axios.get('http://api.smzdm.com/ev1/finder_detail/',{
                      params: {
                          fid: 11
                      }
  				}).then((response) => {
  					var $data = response.data.data;
  					console.log('data:', $data);
  					that.tobj = $data
  				});
  			},
        loadMore(){
          this.loading = true;
          setTimeout(() => {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
              this.list.push(last + i);
            }
            this.loading = false;
          }, 2500);
        }
  }

	}
</script>
<style lang="scss">
    @import "~zdm_ui/ct-common";
    .detail{
      color: $red;
      .foot-banner{
        position: fixed;
        left: 0;
        bottom: 0;
        font-size: rem(30);
        width: 100%;
        background: rgba(0,0,0,.7);
        z-index: 9;
        .download-normal{
          max-width: 600px;
          height: 65px;
          margin: 0 auto;
          position: relative;
          a{
            display: block;
            color: #cdcdcd;
            overflow: hidden;
            .download-left{
              float: left;
              width: 68%;
              height: 65px;
              .download-logo{
                width: 16.6667%;
                max-width: 45px;
                margin-left: 8%;
                float: left;
                margin-top: 10px;
              }
              .download-info{
                line-height: 22px;
                float: left;
                padding-left: 7.8431%;
                margin-top: 11px;
              }
            }
            .download-btn{
              display: block;
              width: 22.6667%;
              max-width: 110px;
              height: 35px;
              line-height: 35px;
              margin-top: 15px;
              text-align: center;
              float: left;
              border: 1px solid #cdcdcd;
              border-radius: 4px;
              -moz-border-radius: 4px;
              -webkit-border-radius: 4px;
            }
          }
          a.download-close{
            width: 3.2%;
            position: absolute;
            right: 1%;
            top: 20px;
            padding: 5px;
          }
        }
      }
      .upload{
      }
    }
    .logo{
        background-image: url('../../assets/img/zdm-icons.png');
        background-repeat: no-repeat;
        background-size: 56px;
        padding-left: 30px;
        line-height: 25px;
        width: 9px;
        height: 1.93333em;
        margin-top: 10px;
    }
    .zdm-swipe{
        position: relative;
        top: 40px;
        .mint-swipe{
            height: 200px;
            color: #fff;
            font-size: 30px;
            text-align: center;
            margin-bottom: 20px;
        }
    }
    .list{
      font-size: 15px;
      max-width: 960px;
      margin: 0 auto;
      padding: 0 1.875%;
      li{
        border-bottom: 1px solid #dedede;
        padding: 6px 0;
        overflow: hidden;
        .image_wrap{
          float: left;
          width: 84px;
          height: 84px;
          margin-right: 20px;
          z-index: 1;
          position: relative;
          overflow: hidden;
          .image{
            width: 84px;
            height: 84px;
            display: table-cell;
            vertical-align: middle;
            img{
              max-width: 84px;
              max-height: 84px;
            }
          }
        }
        address{
          font-size: .9em;
          line-height: 1.2;
          height: 1.2em;
          overflow: hidden;
          color: #868b98;
          text-overflow: ellipsis;
          white-space: nowrap;
          &>span{
            float: right;
            font-size: .8em;
            padding-top: 3px;
          }
        }
        h2{
          margin: 6px 0 12px;
          height: 2.4em;
          overflow: hidden;
          font-size: 1em;
          font-weight: 400;
          color: $red;
        }
        .tips{
          em{
            float: left;
            color: #e6312a;
            width: 40%;
            height: 1.2em;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          span{
            float: right;
            font-size: 12px;
            color: #868b98;
          }
        }
      }
    }
</style>
