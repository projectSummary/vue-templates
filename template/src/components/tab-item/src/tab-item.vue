<template>
  <a class="cs-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="cs-tab-item-icon"><slot name="icon"></slot></div>
    <div class="cs-tab-item-label"><slot></slot></div>
  </a>
</template>
<script>
/**
 * cs-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <cs-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </cs-tab-item>
 */
export default {
  name: 'cs-tab-item',
  props: ['id']
};
</script>

<style lang="css">
  .cs-tab-item{
    display: block;
    padding: 7px 0;
    flex: 1;
    text-decoration: none;
  }
  .cs-tab-item-icon{
     size: 24px;
     margin: 0 auto 5px;
  }
  .cs-tab-item-icon:empty{
    display: none;
  }
  .cs-tab-item-icon > *{
    display: block;
    size: 100%;
  }
  .cs-tab-item-label{
    color: inherit;
    font-size: 12px;
    line-height: 1;
  }
</style>
