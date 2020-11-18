<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "WheelTabsHead",
}
</script>

<style scoped lang="scss">
$tab-height:40px;
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #e6e6e6;
  position: relative;
  > .actions-wrapper{
    margin-left: auto;
  }
}
</style>