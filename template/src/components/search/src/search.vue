<template>
  <div class="cs-search">
    <div class="cs-searchbar">
      <div class="cs-searchbar-inner">
        <i class="csui csui-search" v-show="visible"></i>
        <input
        ref="input"
        @click="visible = true"
        type="search"
        v-model="currentValue"
        :placeholder="visible ? placeholder : ''"
        class="cs-searchbar-core">
      </div>
      <a
        class="cs-searchbar-cancel"
        @click="visible = false, currentValue = ''"
        v-show="visible"
        v-text="cancelText">
      </a>
      <label
        @click="visible = true, $refs.input.focus()"
        class="cs-searchbar-placeholder"
        v-show="!visible">
        <i class="csui csui-search"></i>
        <span class="cs-searchbar-text" v-text="placeholder"></span>
      </label>
    </div>
    <div class="cs-search-list" v-show="show || currentValue">
      <div class="cs-search-list-warp">
        <slot>
          <x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import XCell from 'components/cell/index.js';

/**
 * mt-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 *
 * @example
 * <mt-search :value.sync="value" :result.sync="result"></mt-search>
 * <mt-search :value.sync="value">
 *   <mt-cell v-for="item in result" :title="item"></mt-cell>
 * </mt-search>
 */
export default {
  name: 'mt-search',

  data() {
    return {
      visible: false,
      currentValue: this.value
    };
  },

  components: { XCell },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.currentValue = val;
    }
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array
  },

  mounted() {
    this.autofocus && this.$refs.input.focus();
  }
};
</script>

<style lang="css">
  /*@import "../../../src/style/var.css";*/
	.cs-search{
	  height: 100%;
      height: 100vh;
      overflow: hidden;
	}
	.cs-searchbar{
	  position: relative;
      align-items: center;
      background-color: #d9d9d9;
      box-sizing: border-box;
      display: flex;
      padding: 8px 10px;
      z-index: 1;
	}
	.cs-searchbar-inner{
        align-items: center;
        background-color: $color-white;
        border-radius: 2px;
        display: flex;
        flex: 1;
        height: 28px;
        padding: 4px 6px;
	}
	.cs-searchbar-inner .csui-search{
		font-size: 12px;
        color: #d9d9d9;
	}
	.cs-searchbar-core{
		appearance: none;
        border: 0;
        box-sizing: border-box;
        height: 100%;
        outline: 0;
	}
	.cs-searchbar-placeholder{
		 align-items: center;
        color: #9b9b9b;
        display: flex;
        font-size: 12px;
        justify-content: center;
        position: absolute 0 0 0 0;
	}
	.cs-searchbar-placeholder .csui-search {
          font-size: 12px;
    }
    .cs-searchbar-cancel{
    	color: $color-blue;
        margin-left: 10px;
        text-decoration: none;
    }
    .cs-search-list{
      overflow: auto;
      padding-top: 44px;
      position: absolute 0 0 0 0;
    }

</style>
