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
      if (this.$refs.contentWrap && this.$refs.contentWrap === e.target || this.$refs.contentWrap.contains(e.target)){return }
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
$border-color:#999999;
$border-radius:4px;
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
  //border: 1px solid $border-color;
  //box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));
  transform: translateY(-100%);
  background: #ffffff;
  word-break: break-all;
  max-width: 20em;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  margin-top: -10px;
  &::before,&::after{
    content: '';
    display: block;
    border:10px solid transparent;
    position: absolute;
    left: 10px;
  }
  &::before{
    top: 100%;
    border-top-color: $border-color;
  }
  &::after{
    top: calc(100% - 1px) ;
    border-top-color: #ffffff;
  }
}

</style>