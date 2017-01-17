<template>
	<a v-for="item in items" class="list-item" :href="'../module/detail.html?fid= '+ item.id">
          <div class="left-top" v-if="item.is_new === 1">新上线</div>
          <div class="left-top lt-yellow" v-if="item.is_up === 1">有更新</div>
          <div class="right-bottom" v-if="item.last_version !== ''">
            <div class="right-last-version">
              {{ item.last_version }}
            </div>
          </div>
          <img class="item-image" :src="item.pic">
          <div class="item-text">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-subtitle"> {{ item.subtitle }} </div>
            <div class="item-float">
              <div class="list-left" v-if="item.hand_qnum !== ''">
                <span>{{item.hand_qnum}}</span>道题目
              </div>
              <div class="list-left border-left" v-if="item.need_dnum !== '0'">
                <span>{{item.need_dnum}}</span>min
              </div>
              <div class="list-right" v-if="item.like_num !== '0'">
                <span class="icons icons-zan"></span>
                <span>{{ item.like_num }}</span>
              </div>
            </div>    
          </div>
      </a>
</template>
<script >
import Lib from 'assets/Lib.js'

module.exports = {
	components:{
		
	},
    data: function () {
     	return {
      		
    	}
  	},
  	ready(){
  		
  	},
  	methods:{
  	
  	},
  	props:['items']
}
</script>
<style scoped>
@import '../assets/css.css';

.list-item{
  display: block;
  margin-top: 10px;
  position: relative;
  background-color: #fff;
  text-decoration: none;
}
.list-item .item-image{
  width: 100%;
  height:200px;
}

.list-left{
  float: left;
  margin-right: 10px;
  font-size: 12px;
  line-height: 12px;
  color: #152568;
}
.border-left{
  padding-left: 10px;
  border-left: 1px solid #cccccc;
}
.list-right{
  float: right;
  color: #888888;
  font-size: 12px;
  line-height: 12px;
}
.list-right .icons-zan{
    vertical-align: middle;
    margin-right: 4px;
}
.list-item .left-top{
  position: absolute;
  top: 10px;
  left: 0;
  width: 45px;
  height: 20px;
  background-color: #81c94b;
  color: #fff;
  text-align: center;
  line-height: 20px;
  border-radius: 0 2.5px 2.5px 0;
  font-size: 12px;

}
.list-item .lt-yellow{
  background-color: #ff9946;
}
.list-item .right-bottom{
  position: absolute;
  top: 180px;
  right: 5px;
  height: 15px;
  padding-left: 5px;
  padding-right: 5px; 
  height: 15px;
  text-align: center;
  line-height: 15px;
  background-color: rgba(0, 0, 0, 0.3); 
  border-radius: 2px;
}
.list-item .right-bottom .right-last-version{
  color: #fff;
  opacity: 1;
  font-size: 12px;
}

.item-text{
  height: 120px;
  padding: 15px; 
  box-sizing:border-box;
}
.item-text .item-title{
  text-align: left;
  font-size: 15px;
  color: #333333;
  font-weight: bolder;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.item-text .item-subtitle{
  margin-top: 5px;
  font-size: 15px;
  line-height: 22px;
  height: 44px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #666666;
}
.item-float{
  overflow: hidden;
  margin-top: 5px;
}
</style>