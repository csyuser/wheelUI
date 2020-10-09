<template>
  <div class="col" :class="[span&&`col-${span}`,offset&&`offset-${offset}`]" :style="{paddingLeft:gutter/2 +'px',paddingRight:gutter/2 +'px'}">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name:'wheelCol',
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    }
  },
  data(){
    return{
      gutter:0
    }
  }
};
</script>

<style scoped lang="scss">
.col{
  width: 50%;
  $class-prefix:col-;
  @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {width: ($n / 24) *100%;} }
  $class-prefix:offset-;
  @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {margin-left: ($n / 24) *100%;} }
  &:nth-child(odd)> .col-content{background: #378df1;}
  &:nth-child(even)> .col-content{background: #79b7ff;}
  .col-content{
    height: 50px;
    padding: 0 10px;
  }
}
</style>