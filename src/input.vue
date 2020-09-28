<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disable" :readonly="readonly">
    <template v-if="error">
      <w-icon class="icon icon-error" name="error"></w-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  name: 'WheelInput',
  components:{
    'w-icon':Icon
  },
  props:{
    value:{
      type:String
    },
    disable:{
      type:Boolean
    },
    readonly:{
      type:Boolean
    },
    error:{
      type:String
    },
  }
}
</script>

<style lang="scss" scoped>
$height:32px;
$font-size:14px;
$border-color:#999;
$border-color-hover: #666;
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 0.3);
$red: #F1453D;
$color:#333;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  color: $color;
  > :not(:last-child){margin-right: 0.5em;}
  > input {
    height: $height;font-size:inherit;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px; color: inherit;
    &:hover { border-color: $border-color-hover; }
    &:focus{outline: none; box-shadow:inset 0 1px 1px $box-shadow-color}
    &[disabled],&[readonly]{color: #bbb;border-color: #bbb;cursor: not-allowed}
  }
  &.error{
  > input{border-color: $red}
    .icon-error{fill: $red;}
    .errorMessage{color: $red}
  }
}

</style>