<template>
  <div class="toast">
    <div class="message">
      <span class="slot"><slot></slot></span>
      <div class="close" v-if="closeButton" @click="clickClose">{{closeButton.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wheelToast',
  props:{
    closeButton:{
      type:Object,
      default(){
        return{
          text:'关闭',callback:undefined
        }
      }
    },
    autoClose:{
      type:Object,
      default(){
        return{
          auto:false,callback:undefined
        }
      }
    },
    autoCloseDelay:{
      type:Number,
      default:3
    }
  },
  mounted(){
    this.execAutoClose()
  },
  methods:{
    close(){
      this.$el.remove()
      this.$destroy()
    },
    execAutoClose(){
      if (this.autoClose.auto){
        setTimeout(()=>{this.close()
          if (this.autoClose.callback && typeof this.autoClose.callback === 'function'){
            this.autoClose.callback()
          }
        },this.autoCloseDelay*1000)
      }
    },
    clickClose(){
      this.close()
      if (this.closeButton.callback && typeof this.closeButton.callback === 'function'){
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-bg: #3c3c3d;
$toast-padding:10px;
.toast{
  position: fixed;top: 0;left: 50%;transform: translateX(-50%);
  font-size: $font-size;background: $toast-bg;color: #ffffff;
  border-radius: 4px;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  >.message{
    display: flex;
    >.slot{
      padding: $toast-padding;
    }
    >.close{
      border-left: 1px solid #666666;
      padding: $toast-padding;
    }
  }
}
</style>