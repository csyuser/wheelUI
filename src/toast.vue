<template>
  <div class="wrapper" :class="positionClass">
    <div class="toast">
      <div class="message">
        <div class="slot">
          <slot v-if="!isHtml"></slot>
          <div v-else v-html="$slots.default"></div>
        </div>
        <div class="close" v-if="closeButton" @click="clickClose"><span>{{ closeButton.text }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wheelToast',
  props: {
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭', callback: undefined
        }
      }
    },
    autoClose: {
      type: Object,
      default() {
        return {
          auto: true, callback: undefined
        }
      }
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    isHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    positionClass() {
      return `position-${this.position}`
    }
  },
  mounted() {
    this.execAutoClose()
  },
  methods: {
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    execAutoClose() {
      if (this.autoClose.auto) {
        setTimeout(() => {
          this.close()
          if (this.autoClose.callback && typeof this.autoClose.callback === 'function') {
            this.autoClose.callback()
          }
        }, this.autoCloseDelay * 1000)
      }
    },
    clickClose() {
      this.close()
      if (this.closeButton.callback && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-bg: #3c3c3d;
$toast-padding: 10px;
$animationDuration:300ms;
@keyframes slide-up {
  0% {opacity: 0;transform: translateY(100%)}
  100% {opacity: 1;transform: translateY(0%)}
}
@keyframes fade-in {
  0% {opacity: 0}
  100% {opacity: 1}
}
@keyframes slide-down {
  0% {opacity: 0;transform: translateY(-100%)}
  100% {opacity: 1;transform: translateY(0%)}
}
.wrapper{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  &.position-top {
    top: 0;
    > .toast{
      animation: slide-down $animationDuration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    > .toast{animation: fade-in $animationDuration;}
  }

  &.position-bottom {
    bottom: 0;
    > .toast{
      animation: slide-up $animationDuration;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;}
  }
}
.toast {
  font-size: $font-size;
  background: $toast-bg;
  color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);

  > .message {
    display: flex;
    > .slot {
      padding: $toast-padding;
    }

    > .close {
      border-left: 1px solid #666666;
      padding: $toast-padding;
      cursor: pointer;
      flex-shrink: 0;
      display: flex;
      align-items: center;
    }
  }
}
</style>