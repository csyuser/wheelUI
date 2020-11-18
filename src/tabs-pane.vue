<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WheelTabsPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String | Number,
      required: true
    },

  },
  data() {
    return {
      active: false
    }
  },
  created () {
    this.eventBus.$on('update:selected',(name)=>{
      this.active = this.name === name
    })
  },
  computed: {
    classes() {
      return {active: this.active}
    }
  },
}
</script>

<style scoped lang="scss">
.tabs-pane{
  margin-top: 10px;
  &.active{
  }
}
</style>