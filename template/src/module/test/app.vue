<template>
	<div>
		<search v-model="value" cancel-text="取消"
  placeholder="搜索"></search>
	</div>
</template>
<script>
/*
*	首页的5个小圆，下面的推广位
*/
	import { Search } from 'components';
	export default{
		data(){
			return{
				value:''
			}
		},
		components:{
			Search 
		},
		mounted(){

		},
		methods:{

		}
	}
</script>
<style scoped lang="scss">
	
</style>