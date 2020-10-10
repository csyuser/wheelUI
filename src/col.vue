<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = function (value) {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {valid = false}
  })
  return valid
}
export default {
  name: 'wheelCol',
  props: {
    span: {type: [Number, String]},
    offset: {type: [Number, String]},
    ipad: {type: Object, validator,},
    narrowpc: {type: Object, validator,},
    pc: {type: Object, validator,},
    widepc: {type: Object, validator,},
    largepc: {type: Object, validator,},
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colClass() {
      let {span, offset, ipad, narrowpc, pc, widepc, largepc,createClasses} = this
      return [
        ...createClasses({span,offset}),
        ...createClasses(ipad,'ipad-'),
        ...createClasses(narrowpc,'narrowpc-'),
        ...createClasses(pc,'pc-'),
        ...createClasses(widepc,'widepc-'),
        ...createClasses(largepc,'largepc-')

        // span && `col-${span}`,
        // offset && `offset-${offset}`,
        // ipad && `col-ipad-${ipad.span}`,
        // narrowpc && `col-narrowpc-${narrowpc.span}`,
        // pc && `col-pc-${pc.span}`,
        // widepc && `col-widepc-${widepc.span}`,
        // largepc && `col-widepc-${largepc.span}`,
      ]
    },
    colStyle() {
      let {gutter} = this
      return {
        paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'
      }
    }
  },
  methods: {
    createClasses(obj, str = '') {
      let arr = []
      if (!obj) {return []}
      if (obj.span) {
        arr.push(`col-${str}${obj.span}`)
      }
      if (obj.offset || obj.offset===0) {
        arr.push(`offset-${str}${obj.offset}`)
      }
      return arr
    },
  },

}
</script>

<style scoped lang="scss">
.col {
  $class-prefix: col-;
  @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {width: ($i / 24) *100%;} }
  $class-prefix: offset-;
  @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {margin-left: ($i / 24) *100%;} }

  &:nth-child(odd) > .col-content {
    background: #378df1;
  }

  &:nth-child(even) > .col-content {
    background: #79b7ff;
  }

  .col-content {
    height: 50px;
    padding: 0 10px;
  }

  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {width: ($i / 24) *100%;}}
    $class-prefix: offset-ipad-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {margin-left: ($i / 24) *100%;} }
  }
  @media (min-width: 769px) {
    $class-prefix: col-narrowpc-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {width: ($i / 24) *100%;}}
    $class-prefix: offset-narrowpc-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {margin-left: ($i / 24) *100%;} }
  }
  @media (min-width: 992px) {
    $class-prefix: col-pc-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {width: ($i / 24) *100%;}}
    $class-prefix: offset-pc-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {margin-left: ($i / 24) *100%;} }
  }
  @media (min-width: 1200px) {
    $class-prefix: col-widepc-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {width: ($i / 24) *100%;}}
    $class-prefix: offset-widepc-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {margin-left: ($i / 24) *100%;} }
  }
  @media (min-width: 1920px) {
    $class-prefix: col-largepc-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {width: ($i / 24) *100%;}}
    $class-prefix: offset-largepc-;
    @for $i from 0 through 24 { &.#{$class-prefix}#{$i} {margin-left: ($i / 24) *100%;} }
  }
}
</style>