<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>

<script>
let validator = function (value){
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key=>{
    if(!['span', 'offset'].includes(key)){valid = false}
  })
  return valid
}
export default {
  name:'wheelCol',
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    },
    phone:{type:Object, validator,},
    ipad:{type:Object, validator,},
    narrowPc:{type:Object, validator,},
    pc:{type:Object, validator,},
    widePc:{type:Object, validator,},
  },
  data(){
    return{
      gutter:0,
    }
  },
  computed:{
    colClass(){
      let {span,offset,phone,ipad,narrowPc,pc,widePc} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        phone && `col-phone-${phone.span}`,
        ipad && `col-ipad-${ipad.span}`,
        narrowPc && `col-narrowPc-${narrowPc.span}`,
        pc && `col-pc-${pc.span}`,
        widePc && `col-widePc-${widePc.span}`,
      ]
    },
    colStyle(){
      let {gutter} = this
      return{
        paddingLeft:gutter/2 +'px',paddingRight:gutter/2 +'px'
      }
    }
  },
};
</script>

<style scoped lang="scss">
.col{
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

  @media (max-width: 768px) {
    $class-prefix:col-phone-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {width: ($n / 24) *100%;} }
    $class-prefix:offset-col-phone-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {margin-left: ($n / 24) *100%;} }
  }
  @media (min-width: 769px) and (max-width: 991px) {
    $class-prefix:col-ipad-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {width: ($n / 24) *100%;} }
    $class-prefix:offset-col-ipad-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {margin-left: ($n / 24) *100%;} }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    $class-prefix:col-narrowPc-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {width: ($n / 24) *100%;} }
    $class-prefix:offset-col-narrowPc-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {margin-left: ($n / 24) *100%;} }
  }
  @media (min-width: 1200) and (max-width: 1919px) {
    $class-prefix:col-pc-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {width: ($n / 24) *100%;} }
    $class-prefix:offset-col-pc-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {margin-left: ($n / 24) *100%;} }
  }
  @media (min-width: 1920px) {
    $class-prefix:col-widePc-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {width: ($n / 24) *100%;} }
    $class-prefix:offset-col-widePc-;
    @for $n from 1 through 24{ &.#{$class-prefix}#{$n} {margin-left: ($n / 24) *100%;} }
  }
}
</style>