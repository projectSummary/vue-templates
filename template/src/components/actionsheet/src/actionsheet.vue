<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="mint-actionsheet">
      <ul class="mint-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
        <li v-for="item in actions" class="mint-actionsheet-listitem" @click.stop="itemClick(item)">{{ item.name }}</li>
      </ul>
      <a class="mint-actionsheet-button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
    </div>
  </transition>
</template>

<style>
.mint-actionsheet{
      position: fixed;
      background: #e0e0e0;
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      backface-visibility: hidden;
      transition: transform .3s ease-out;
}
.mint-actionsheet-list{
  list-style: none;
  padding: 0;
  margin: 0;
}
.mint-actionsheet-listitem{
  border-bottom: solid 1px #e0e0e0;
}
.mint-actionsheet-listitem,.mint-actionsheet-button{
  display: block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  color: #333;
  background-color: #fff;
}
.mint-actionsheet-listitem:active{
  background-color: #f0f0f0;
}
.mint-actionsheet-button:active{
   background-color: #f0f0f0;
}
.actionsheet-float-enter,
.actionsheet-float-leave-active {
  transform: translate3d(-50%, 100%, 0);
}
</style>

<script>
  import Popup from 'assets/utils/popup';
  import 'assets/style/popup.css';
  export default {
    name: 'mt-actionsheet',
    mixins: [Popup],
    props: {
      modal: {
        default: true
      },
      modalFade: {
        default: false
      },
      lockScroll: {
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      actions: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentValue: false
      };
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },
      value(val) {
        this.currentValue = val;
      }
    },
    methods: {
      itemClick(item) {
        if (item.method && typeof item.method === 'function') {
          item.method();
        }
        this.currentValue = false;
      }
    },
    mounted() {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
      }
    }
  };
</script>