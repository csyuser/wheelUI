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
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-item {
  margin-right: 2em;
  margin-bottom: -3px;
  &.active {
    color: #108ee9;
    height: 100%;
    border-bottom: 2px solid #108ee9;
    vertical-align: middle;
    display: flex;
    align-items: center;
  }
}
</style>