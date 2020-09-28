<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
<!--    <svg v-if="icon" class="icon" aria-hidden="true">-->
<!--      <use :xlink:href="`#i-${icon}`" />-->
<!--    </svg>-->
    <w-icon class="icon loading" name="loading" v-if="loadings"></w-icon>
    <w-icon class="icon" v-if="icon && !loadings" :name="icon"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>


<script>
import Icon from './icon'
export default {
  components:{
    'w-icon':Icon
  },
  props: {
    icon:{},
    iconPosition:{
    type:String,
    default:'left',
    validator(value){
     return (value==='right' || value === 'left')
    }
    },
    loadings:{
      type:Boolean,
      default: false
    },
  },
};
</script>


<style lang="scss">
@keyframes spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
.w-button {
  height: var(--button-height);
  font-size: var(--font-size);
  color: var(--color);
  background: var(--button-bg);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  padding: 0 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border: 1px solid var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
  }
  &:focus { outline: none; }
  > .icon { order: 1; margin-right: .3em;}
  > .content { order: 2;}
  &.icon-right {
    > .icon {order: 2; margin: 0 0 0 .3em;}
    > .content {order: 1;}
  }
  .loading{
    animation:spin 2s infinite linear;
  }
}
</style>