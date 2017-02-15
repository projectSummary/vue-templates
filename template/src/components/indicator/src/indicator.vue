<template>
  <transition name="mint-indicator">
    <div class="mint-indicator" v-show="visible">
      <div class="mint-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <spinner class="mint-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>
        <span class="mint-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="mint-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<style scoped>
.mint-indicator{
  transition: opacity .2s linear;
}
.mint-indicator-wrapper{
      top: 50%;
      left: 50%;
      position: fixed;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      box-sizing: border-box;
      text-align: center;
}
.mint-indicator-text{
  display: block;
      color: #fff;
      text-align: center;
      margin-top: 10px;
      font-size: 16px;
}
.mint-indicator-spin{
  display: inline-block;
  text-align: center;
}
.mint-indicator-mask{
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: transparent;
}
.mint-indicator-enter,
.mint-indicator-leave-active {
  opacity: 0;
}
</style>

<script>
  import Spinner from 'components/spinner/index.js';
  // if (process.env.NODE_ENV === 'component') {
  //   require('components/spinner/style.css');
  // }
  export default {
    data() {
      return {
        visible: false
      };
    },
    components: {
      Spinner
    },
    computed: {
      convertedSpinnerType() {
        switch (this.spinnerType) {
          case 'double-bounce':
            return 1;
          case 'triple-bounce':
            return 2;
          case 'fading-circle':
            return 3;
          default:
            return 0;
        }
      }
    },
    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'snake'
      }
    }
  };
</script>