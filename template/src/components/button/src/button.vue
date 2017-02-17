<template>
  <button
    class="cs-button"
    :class="['cs-button--' + type, 'cs-button--' + size, {
        'is-disabled': disabled,
        'is-plain': plain
      }]"
    :disabled="disabled">
    <span class="cs-button-icon" v-if="icon || _slotContents.icon">
      <slot name="icon">
        <i v-if="icon" class="csui" :class="'csui-' + icon"></i>
      </slot>
    </span>
    <label class="cs-button-text"><slot></slot></label>
  </button>
</template>

<script>
// if (process.env.NODE_ENV === 'component') {
//   require('cs-ui/packages/font/style.css');
// }
/**
 * mt-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .csui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
 */
export default {
  name: 'mt-button',

  props: {
    icon: String,
    disabled: Boolean,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  }
};
</script>

<style lang="css">
  .cs-button{
    appearance: none;
      border-radius: 4px;
      border: 0;
      box-sizing: border-box;
      color: inherit;
      display: block;
      font-size: 18px;
      height: 41px;
      outline: 0;
      overflow: hidden;
      position: relative;
      text-align: center;
  }
  .cs-button::after{
    background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute 0 0 0 0;
  }
  .cs-button:not(.is-disabled):active::after {
        opacity: .4;
      }
.cs-button-icon{
   vertical-align: middle;
        display: inline-block;
}
.cs-button--default{
   color: $button-default-color;
        background-color: $button-default-background-color;
        box-shadow: $button-default-box-shadow;
}
.cs-button--default.is-plain{
  border: 1px solid $button-default-plain-color;
          background-color: transparent;
          box-shadow: none;
          color: $button-default-plain-color;
        }
}
.cs-button--primary{
   color: $button-primary-color;
        background-color: $button-primary-background-color;
}
.cs-button--primary.is-plain{
   border: 1px solid $button-primary-background-color;
          background-color: transparent;
          color: $button-primary-background-color;
}
.cs-button--danger{
   color: $button-danger-color;
  background-color: $button-danger-background-color;
}
.cs-button--danger.is-plain{
    border: 1px solid $button-danger-background-color;
          background-color: transparent;
          color: $button-danger-background-color;
}
.cs-button--large{
   display: block;
        width: 100%;
}
.cs-button--normal{
  display: inline-block;
        padding: 0 12px;
}
.cs-button--small{
  display: inline-block;
        font-size: 14px;
        padding: 0 12px;
        height: 33px;
}
.cs-button.is-disabled{
  opacity: .6;
}
</style>
