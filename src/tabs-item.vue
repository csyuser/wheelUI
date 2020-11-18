<template>
  <div class="tabs-item" :class="classes" @click="changeSelected">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WheelTabsItem',
  inject:['eventBus'],
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
  computed: {
    classes() {
      return {active: this.active}
    }
  },

  created: function () {
    this.eventBus.$on('update:selected', (name) => {
      this.active = this.name === name
    })
  },
  mounted() {

  },
  methods:{
    changeSelected(){
      this.eventBus.$emit('update:selected',this.name,this)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-item {
  margin-right: 1em;
  padding: 0 0.5em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover{color: #108ee9;}
  &.active {
    color: #108ee9;
    font-weight: bold;
  }
}
</style>