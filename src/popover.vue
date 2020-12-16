<template>
  <div class="popover-wrap" @click.stop="showContent">
    <div class="content-wrap" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WheelPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showContent() {
      this.visible = !this.visible
      if (this.visible === true){
        this.$nextTick(()=>{
          let handler = ()=>{
            console.log('document 隐藏 popover')
            this.visible = false
            document.removeEventListener('click',handler)
          }
          document.addEventListener('click',handler)
        })
      }else {console.log('vm 隐藏 popover')}
    }
  }
}
</script>

<style scoped lang='scss'>
.popover-wrap {
  display: inline-block;
  vertical-align: top;
  position: relative;
  > .content-wrap{
    position:absolute;
    border: 1px solid #999999;
    bottom: 100%;
    left: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}

</style>