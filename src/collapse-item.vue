<template>
  <div class="collapseItem-wrap">
    <div class="title" @click="show=!show">{{ title }}</div>
    <div class="content" v-if="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WheelCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      show:false
    }
  }
}
</script>

<style scoped lang='scss'>
$border-color: #d9d9d9;
$radius: 3px;
.collapseItem-wrap {
  border: 1px solid $border-color;
  border-bottom: none;
  border-top: none;
  &:first-child {
    border-top: 1px solid $border-color;
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
  }
  &:last-child {
    border-bottom: 1px solid $border-color;
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
    > .content{
      border-top: 1px solid $border-color;
      border-bottom: none;
    }
    > .title{
      border-bottom: none;
    }
    > .content {
      border-bottom-left-radius: $radius;
      border-bottom-right-radius: $radius;
    }
  }
  > .title {
    border-bottom: 1px solid $border-color;
    background: #fafafa;
    padding: 12px 16px;
  }
  > .content {
    border-bottom: 1px solid $border-color;
    padding: 16px;
  }
}
</style>