<template>
	<header class="cs-header" :class="{'is-fixed': fixed}">
		<div class="cs-header-button is-left">
			<slot name="left"></slot>
		</div>
		<h1 class="cs-header-title" v-text="title"></h1>
		<div class="cs-header-button is-right">
			<slot name="right"></slot>
		</div>
	</header>
</template>
<script>
	export default {
		name: 'cs-header',
		props: {
			fixed: Boolean,
			title: String
		}
	}
</script>
<style scoped>
	
	.cs-header{
	  text-align: center;
      background-color: blue;
      box-sizing: border-box;
      color: white;
      display: flex;
      font-size: 14px;
      /*height: $header-height;*/
      line-height: 1;
      padding: 0 10px;
      position: relative;
      text-align: center;
      white-space: nowrap;
      font-weight: normal;
	}
	.cs-header .cs-button {
		 background-color: transparent;
        border: 0;
        box-shadow: none;
        color: inherit;
        display: inline-block;
        padding: 0;
        font-size: inherit;
	}
	.cs-header::after{
		content: none;
	}
	.cs-header-button{
		flex: .5;
	}
	.cs-header-button>a{
		color: inherit;
	}
	.cs-header-button.is-left{
		text-align: left;
	}
	.cs-header-button.is-right{
		text-align: right;
	}
	.cs-header-title{
		font-size: inherit;
        flex: 1;
	}
	.cs-header.is-fixed{
		position: fixed;
		top: 0;
		right: 0;
		left:0;
}
</style>