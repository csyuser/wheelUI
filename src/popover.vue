<template>
  <div class="popover-wrap" @click="onclick" ref="popover">
    <div class="content-wrap" ref="contentWrap" v-if="visible">
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
    positionContent(){
      let contentWrap = this.$refs.contentWrap
      document.body.appendChild(contentWrap)
      const {width, height, top, left} = this.$refs.triggerWrap.getBoundingClientRect()
      // const contentHeight = contentWrap.getBoundingClientRect()['height']
      contentWrap.style.left = left + window.scrollX + 'px'
      contentWrap.style.top = top + window.scrollY + 'px'
    },
    onclickDocument(e){
      if (this.$refs.popover && this.$refs.popover === e.target || this.$refs.popover.contains(e.target)){return }
      this.close()
    },
    open(){
      this.visible = true
      this.$nextTick(()=>{
        this.positionContent()
        document.addEventListener('click',this.onclickDocument)
      })
    },
    close(){
      this.visible = false
      document.removeEventListener('click',this.onclickDocument)
    },
    onclick(e){
      if (this.$refs.triggerWrap.contains(e.target)){
        if (this.visible === true){
          this.close()
        }else {this.open()}
      }
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