<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'WheelTabs',
  props:{
    selected:{
      type:String,
      required:true
    },
    direction:{
      type: String,
      default:'horizontal',
      validator(value){
        return ['horizontal','vertical'].indexOf(value)>=0
      }
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {eventBus: this.eventBus}
  },
  mounted() {
    this.$children.forEach(vm=>{//head
      if (vm.$options.name === 'WheelTabsHead'){
        vm.$children.forEach(childVm=>{ //item
          if (childVm.$options.name === 'WheelTabsItem' && childVm['name'] === this.selected){
            this.eventBus.$emit('update:selected', this.selected,childVm)
          }
        })
      }
    })
  },
}
</script>

<style scoped lang="scss">
.tabs{
}

</style>