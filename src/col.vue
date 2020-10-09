<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'wheelCol',
  props:{
    span:{
      type:[Number,String]
    }
  }
};
</script>

<style scoped lang="scss">
.col{
  height: 50px;
  width: 50%;
  $class-prefix:col-;
  @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {width: ($n / 24) *100%;} }
  &:nth-child(odd){background: #378df1;}
  &:nth-child(even){background: #79b7ff;}
}
</style>