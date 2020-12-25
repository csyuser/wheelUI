<template>
  <div class="popover-wrap" ref="popover">
    <div class="content-wrap" ref="contentWrap" v-if="visible" :class="{[`position-${position}`]:true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrap" class="triggerWrap">
          <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'WheelPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'left', 'right', 'bottom'].indexOf(value) >= 0
      }
    },
    trigger:{
      type:String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false,
      contentHover:false,
    }
  },
  mounted() {
    if (this.trigger === 'click'){
      this.$refs.popover.addEventListener('click',this.onclick)
    }else if (this.trigger === 'hover'){
      this.$refs.popover.addEventListener('mouseenter',this.open)
      this.$refs.popover.addEventListener('mouseleave',this.leaveHover)
    }
  },
  beforeDestroy() {
      if (this.trigger === 'click'){
        this.$refs.popover.removeEventListener('click',this.onclick)
      }else if (this.trigger === 'hover'){
        this.$refs.popover.removeEventListener('mouseenter',this.open)
        this.$refs.popover.removeEventListener('mouseleave',this.leaveHover)
        this.$refs.contentWrap && this.$refs.contentWrap.removeEventListener('mouseenter',this.open)
        this.$refs.contentWrap && this.$refs.contentWrap.removeEventListener('mouseleave',this.close)
      }
  },
  methods: {
    positionContent() {
      const {contentWrap, triggerWrap} = this.$refs
      document.body.appendChild(contentWrap)
      const {width, height, top, left} = triggerWrap.getBoundingClientRect()
      const {height: contentHeight} = contentWrap.getBoundingClientRect()
      let position = {
        top: {left: left + window.scrollX + 'px', top: top + window.scrollY + 'px'},
        left: {left: left + window.scrollX + 'px', top: top + window.scrollY + (height - contentHeight) / 2 + 'px'},
        right: {
          left: left + window.scrollX + width + 'px',
          top: top + window.scrollY + (height - contentHeight) / 2 + 'px'
        },
        bottom: {left: left + window.scrollX + 'px', top: top + window.scrollY + 'px'},
      }
      contentWrap['style'].left = position[this.position].left
      contentWrap['style'].top = position[this.position].top
    },
    onclickDocument(e) {
      if (this.$refs.popover && this.$refs.popover === e.target || this.$refs.popover.contains(e.target)) {return }
      if (this.$refs.contentWrap && this.$refs.contentWrap === e.target || this.$refs.contentWrap.contains(e.target)) {return }
      this.close()
    },
    open(e) {
      if (this.$refs.contentWrap && this.$refs.contentWrap === e.target || this.$refs.contentWrap &&this.$refs.contentWrap.contains(e.target)) {this.contentHover = true }
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onclickDocument)
      })
    },
    close() {
      this.visible = false
      this.contentHover = false
      document.removeEventListener('click', this.onclickDocument)
    },
    leaveHover(){
      if (this.trigger === 'hover'){
        setTimeout(()=>{
         if (this.contentHover === false){this.close()}
        },200)
      }
      if (this.visible === true){
        this.$refs.contentWrap.addEventListener('mouseenter',this.open)
        this.$refs.contentWrap.addEventListener('mouseleave',this.close)
      }
    },
    onclick(e) {
      if (this.$refs.triggerWrap.contains(e.target)) {
        if (this.visible === true) {
          this.close()
        } else {this.open()}
      }
    }
  }
}
</script>

<style scoped lang='scss'>
$border-color: #999999;
$border-radius: 4px;
$triangleWidth: 5px;
.popover-wrap {
  display: inline-block;
  vertical-align: top;
  position: relative;

  > .triggerWrap {
    display: inline-block;
  }
}

.content-wrap {
  position: absolute;
  //border: 1px solid $border-color;
  //box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5));

  background: #ffffff;
  word-break: break-all;
  max-width: 20em;
  border-radius: $border-radius;
  padding: 0.5em 1em;

  &::before, &::after {
    content: '';
    display: block;
    border: $triangleWidth solid transparent;
    position: absolute;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -$triangleWidth;

    &::before {
      left: 10px;
      top: 100%;
      border-top-color: #ffffff;
    }

    //&::after{
    //  top: calc(100% - 1px) ;
    //  border-top-color: #ffffff;
    //}
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -$triangleWidth;

    &::before, &::after {
      top: 50%;
      transform: translateY(-50%);
      border-left-color: #ffffff;;
    }

    &::before {
      left: 100%;
    }

    &::after {
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: $triangleWidth;

    &::before {
      top: 50%;
      transform: translateY(-50%);
      right: 100%;
      border-right-color: #ffffff;
    }
  }

  &.position-bottom {
    transform: translateY(100%);
    margin-top: $triangleWidth;

    &::before {
      bottom: 100%;
      left: 10px;
      border-bottom-color: #ffffff;
    }
  }

}

</style>