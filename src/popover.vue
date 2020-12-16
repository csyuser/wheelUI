<template>
  <div class="popover-wrap" @click.stop="showContent">
    <div class="content-wrap" ref="contentWrap" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrap" class="triggerWrap">
          <slot></slot>
    </span>
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
          let contentWrap = this.$refs.contentWrap
          document.body.appendChild(contentWrap)
          const {width, height, top, left} = this.$refs.triggerWrap.getBoundingClientRect()
          // const contentHeight = contentWrap.getBoundingClientRect()['height']
          contentWrap.style.left = left + window.scrollX + 'px'
          contentWrap.style.top = top + window.scrollY + 'px'
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
  > .triggerWrap{
    display: inline-block;
  }
}
.content-wrap{
  position:absolute;
  border: 1px solid #999999;
  //bottom: 100%;
  //left: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}

</style>