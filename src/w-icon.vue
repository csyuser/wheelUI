<template>
  <svg v-if="icon" class="icon" aria-hidden="true">
    <use :xlink:href="`#i-${icon}`" />
  </svg>
</template>

<script>
export default {
name: "w-icon",
  props:{
    icon:{},
  }
}
</script>

<style scoped>
.icon { order: 1; margin-right: .3em;}
</style>