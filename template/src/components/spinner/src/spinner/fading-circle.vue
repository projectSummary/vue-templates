<template>
  <div :class="['mint-spinner-fading-circle circle-color-' + _uid]" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <div v-for="n in 12" :class="['is-circle' + (n + 1)]" class="mint-spinner-fading-circle-circle"></div>
  </div>
</template>

<script>
  import common from './common.vue';
  export default {
    name: 'fading-circle',
    mixins: [common],
    created() {
      if (this.$isServer) return;
      this.styleNode = document.createElement('style');
      const css = `.circle-color-${this._uid} > div::before { background-color: ${this.spinnerColor}; }`;
      this.styleNode.type = 'text/css';
      this.styleNode.rel = 'stylesheet';
      this.styleNode.title = 'fading circle style';
      document.getElementsByTagName('head')[0].appendChild(this.styleNode);
      this.styleNode.appendChild(document.createTextNode(css));
    },
    destroyed() {
      if (this.styleNode) {
        this.styleNode.parentNode.removeChild(this.styleNode);
      }
    }
  };
</script>

<style scoped>
.mint-spinner-fading-circle{
  position: relative;
}
.mint-spinner-fading-circle-circle{
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        /*&.is-circle2 {
          transform: rotate(calc(30deg));
          &::before {
            animation-delay: calc(-1.1s);
          }
        }
        &.is-circle3 {
          transform: rotate(calc(60deg));
          &::before {
            animation-delay: calc(-1s);
          }
        }
        &.is-circle4 {
          transform: rotate(calc(10deg));
          &::before {
            animation-delay: calc(-1.2s + 1.2s / 12 * 3);
          }
        }
        &.is-circle5 {
          transform: rotate(calc(7.5deg));
          &::before {
            animation-delay: calc(-1.2s + 1.2s / 12 * 4);
          }
        }
        &.is-circle6 {
          transform: rotate(calc(6deg));
          &::before {
            animation-delay: calc(-1.2s + 1.2s / 12 * 5);
          }
        }
        &.is-circle7 {
          transform: rotate(calc(5deg));
          &::before {
            animation-delay: calc(-1.2s + 1.2s / 12 * 6);
          }
        }
        &.is-circle8 {
          transform: rotate(calc(360/84deg));
          &::before {
            animation-delay: calc(-1.2s + 1.2s / 12 * 7);
          }
        }
        &.is-circle9 {
          transform: rotate(calc(360/96deg));
          &::before {
            animation-delay: calc(-1.2s + 1.2s / 12 * 8);
          }
        }
        &.is-circle10 {
          transform: rotate(calc(360/108deg));
          &::before {
            animation-delay: calc(-1.2s + 1.2s / 12 * 9);
          }
        }
        &.is-circle11 {
          transform: rotate(calc(360deg / 12 * 10));
          &::before {
            animation-delay: calc(-1.2s + 1.2s / 12 * 10);
          }
        }
        &.is-circle12 {
          transform: rotate(calc(360deg / 12 * 11));
          &::before {
            animation-delay: calc(-1.2s + 1.2s / 12 * 11);
          }
        }*/
}
.mint-spinner-fading-circle-circle::before{
  content: " ";
  display: block;
  margin: 0 auto;
  size: 15%;
  border-radius: 100%;
  animation: mint-fading-circle 1.2s infinite ease-in-out both;
}
@keyframes mint-fading-circle {
  0%, 39%, 100% { opacity: 0 }
  40% { opacity: 1 }
}
  
</style>