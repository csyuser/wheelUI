<template>
  <div class="w-button-group">
    <slot></slot>
  </div>

</template>

<script lang="ts">
export default {
name: "w-button-group",
  mounted() {
    for (let node of this.$el.children){
      let nodeName = node.nodeName.toLowerCase()
      if (nodeName!='button'){
        console.warn(`w-button-group下的子元素应该全部是 button 而你写了 ${nodeName}`)
      }
    }
  }
}
</script>

<style lang="scss">
.w-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .w-button{
    border-radius:0;
    &:not(:first-child){margin-left: -1px}
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>