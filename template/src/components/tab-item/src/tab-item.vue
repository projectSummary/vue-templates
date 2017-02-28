<template>
  <a class="m-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="m-tab-item-icon"><slot name="icon"></slot></div>
    <div class="m-tab-item-label"><slot></slot></div>
  </a>
</template>
<script>
/**
 * m-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <m-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </m-tab-item>
 */
export default {
  name: 'm-tab-item',
  props: ['id']
};
</script>

<style lang="css">
  .m-tab-item{
    display: block;
    padding: 7px 0;
    flex: 1;
    text-decoration: none;
  }
  .m-tab-item-icon{
     size: 24px;
     margin: 0 auto 5px;
  }
  .m-tab-item-icon:empty{
    display: none;
  }
  .m-tab-item-icon > *{
    display: block;
    size: 100%;
  }
  .m-tab-item-label{
    color: inherit;
    font-size: 12px;
    line-height: 1;
  }
</style>
