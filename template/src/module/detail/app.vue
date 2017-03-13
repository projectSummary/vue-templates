<template>
<div>
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
</div>
</template>
<script>
	import Lib from 'assets/Lib.js'
    import axios from 'axios';
    import { zdmHeader } from 'components';
    import { Swipe, SwipeItem} from 'mint-ui';
    import 'mint-ui/lib/style.css'
	export default{
		data(){
			return{
                title:"什么值得买",
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
            zdmHeader, Swipe, SwipeItem
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
					// that.$set('tobj',$data);
					that.tobj = $data
				});
			},
          toast(){
            MessageBox('提示', '操作成功');
          }
	}

	}
</script>
<style scoped lang="scss">
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
</style>
