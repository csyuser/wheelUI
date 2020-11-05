<template>
  <div class="toast" :class="positionClass">
    <div class="message">
      <div class="slot">
        <slot v-if="!isHtml"></slot>
        <div v-else v-html="$slots.default"></div>
      </div>
      <div class="close" v-if="closeButton" @click="clickClose"><span>{{closeButton.text}}</span></div>
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
          auto:true,callback:undefined
        }
      }
    },
    autoCloseDelay:{
      type:Number,
      default:5
    },
    isHtml:{
      type:Boolean,
      default:false
    },
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','middle','bottom'].indexOf(value)>=0
      }
    }
  },
  computed:{
    positionClass(){
      return `position-${this.position}`
    }
  },
  mounted(){
    this.execAutoClose()
  },
  methods:{
    close(){
      this.$el.remove()
      this.$emit('close')
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
  position: fixed;left: 50%;transform: translateX(-50%);
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
      cursor: pointer;
      flex-shrink: 0;
      display: flex;
      align-items: center;
    }
  }
  &.position-top{top: 0;}
  &.position-middle{
    top: 50%;
    transform: translate(-50%,-50%);
  }
  &.position-bottom{bottom: 0;}
}
</style>