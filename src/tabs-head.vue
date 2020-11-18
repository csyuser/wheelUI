<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WheelTabsHead',
  inject:['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',(name,vm)=>{
      let headLeft = this.$el.getBoundingClientRect().left
      let {width,left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = width + 'px'
      this.$refs.line.style.left = left-headLeft +'px'
    })
  },
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #e6e6e6;
  position: relative;

  > .actions-wrapper {
    margin-left: auto;
  }
  > .line{
    position: absolute;
    bottom: -2px;
    border-bottom: 2px solid #108ee9;
    transition:all 300ms
  }
}
</style>