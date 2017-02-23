<template>
	<div class="cs-navbar" :class="{ 'is-fixed': fixed}">
		<slot></slot>
	</div>
</template>
<script>
/**
 * mt-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <mt-navbar :selected.sync="selected">
 *   <mt-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </mt-tab-item>
 * </mt-navbar>
 *
 * <mt-navbar :selected.sync="selected" fixed>
 *   <mt-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </mt-tab-item>
 * </mt-navbar>
 *
 */
export default{
	name:'cs-navbar',
	props:{
		fixed:Boolean,
		value:{}
	}
}
</script>
<style lang="css">
	.cs-navbar{
	  background-color: #fff;
      display: flex;
      align-item: center;
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