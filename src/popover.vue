<template>
  <div class="popover-wrap">{{item}}
    <w-button @click="xxx">点我</w-button>
    <w-button @click="yyy">点我2</w-button>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  data() {
    return {
      item: {}
    }
  },
  methods:{
    xxx(){
      console.log('点击了')
      // this.item[0] = 'xxx'
      // this.$set(this.item,1,'xxx')
      this.item = {name:'xxx'}
      console.log(this.item)
    },
    yyy(){
      console.log('点击了yyy')
      // this.item[0] = 'xxx'
      this.$set(this.item,'age','yyy')
      // this.item.age = 'yyy'
      console.log(this.item)
    }
  }
}
</script>

<style scoped lang='scss'>

</style>