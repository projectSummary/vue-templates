<template>
	<div>
		<search v-model="value" cancel-text="取消"
  placeholder="搜索"></search>
	</div>
</template>
<script>
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
<style scoped>
	
</style>