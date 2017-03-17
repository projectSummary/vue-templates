<template>
	<header class="zdm-header">
		<div class="zdm-header-button is-left">
			<slot name="left"></slot>
		</div>
		<h1 class="zdm-header-title" v-text="title"></h1>
		<div class="zdm-header-button is-right">
			<slot name="right"></slot>
		</div>
	</header>
</template>
<script>
/*
	header
*/
export default{
	name: 'zdm-header',
	data(){
		return{

		};
	},
	props: {
		title: String
	}
}

</script>
<style scoped lang="scss">
	@import "~zdm_ui/ct-common";
	.zdm-header{
		box-sizing: border-box;
		position: fixed;
		color: $white;
		font-size: 15px;
		background-color: #f04848;
		top: 0;
		left: 0;
		z-index: 1300;
		width: 100%;
		white-space: nowrap;
		height: 2.93333em;
		.zdm-header-button{

		}
		.zdm-header-title{
    		font-weight: 400;
			font-size: 1em; 
        	font-family: microsoft yahei;

		}
		.is-left{
			float: left;
		}
		.is-right{
			float: right;
		}
	}
</style>






