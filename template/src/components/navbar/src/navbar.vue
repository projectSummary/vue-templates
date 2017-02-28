<template>
	<div class="m-navbar" :class="{ 'is-fixed': fixed}">
		<slot></slot>
	</div>
</template>
<script>
/**
 * m-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <m-navbar v-model="selected">
 *   <m-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </m-tab-item>
 * </m-navbar>
 *
 * <m-navbar v-model="selected" fixed>
 *   <m-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </m-tab-item>
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
	.m-navbar{
	  background-color: #fff;
      display: flex;
      text-align: center;
	}
	.m-navbar.is-fixed{
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
        z-index: 1;
	}
	.m-navbar .m-tab-item{
		padding: 17px 0;
        font-size: 15px;
	}
	.m-navbar .m-tab-item:last-child{
		border-right: 0;
	}
	.m-navbar .m-tab-item.is-selected {
		border-bottom: 3px solid #26a2ff;
      	color: #26a2ff;
      	margin-bottom: -3px;
	}
</style>