<template>
  <transition name="side">
    <div class="side" v-if="show">
      <slot></slot>
<!--      <w-icon class="icon" name="hideLeft"></w-icon>-->
      <button @click="show=!show"><w-icon class="icon" name="hideLeft"></w-icon></button>
    </div>
  </transition>
</template>

<script>
import Icon from './icon'

export default {
  name: 'wheelSide',
  components:{'w-icon':Icon},
  data() {
    return {
      show: true
    }
  },
}

</script>

<style scoped lang="scss">
.side{
  position: relative;
  > button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background: none;
    border: none;
  }
}
.side-enter-active, .side-leave-active {
  transition: all 3s;
}
.side-leave-to /* .fade-leave-active below version 2.1.8 */ {
  border: 1px solid green;
  margin-left: -100px;
  opacity: 0;
}
</style>