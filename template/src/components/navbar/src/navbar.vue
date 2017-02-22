<template>
	<div class="cs-navbar" :class="{ 'is-fixed': fixed}">
		<slot></slot>
	</div>
</template>
<script>
	export default{
		name:'navbar',
		props:{
			fixed:Boolean,
			value:{}
		}
	}
</script>
<style scoped lang="css">
	.cs-navbar{
	  background-color: #fff;
      display: flex;
      text-align: center;
	}
	.cs-navbar.is-fixed{
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
        z-index: 1;
	}
	.cs-navbar .cs-tab-item{
		padding: 17px 0;
        font-size: 15px;
	}
	.cs-navbar .cs-tab-item:last-child{
		border-right: 0;
	}
	.cs-navbar .cs-tab-item.is-selected {
		border-bottom: 3px solid #26a2ff;
      	color: #26a2ff;
      	margin-bottom: -3px;
	}
</style>