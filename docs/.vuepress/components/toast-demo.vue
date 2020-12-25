<template>
  <div class="toast">
    <h3>Toast</h3>
    <w-button @click="toastTop">toast top</w-button>
    <w-button @click="toastMiddle">toast middle</w-button>
    <w-button @click="toastBottom">toast bottom</w-button>
    <ul>
      <li>代码展示</li>
    </ul>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
import Vue from 'vue'

Vue.use(plugin)

export default {
  name: 'Toast-demo',
  components:{'w-button':Button},
  data() {
    return {
      content: `
    <w-button @click="toastTop">toast top</w-button>
    <w-button @click="toastMiddle">toast middle</w-button>
    <w-button @click="toastBottom">toast bottom</w-button>
    //JS代码
    methods: {
    toastTop() {
      this.$toast('我是toast信息 上', {closeButton: {text: 'ok啦', callback: this.log}, position: 'top'})
    },
    toastMiddle() {
      this.$toast('我是toast信息 中', {closeButton: {text: 'ok', callback: this.log}, position: 'middle'})
    },
    toastBottom() {
      this.$toast('我是toast信息 下', {closeButton: {text: 'ok啦', callback: this.log}, position: 'bottom'})
    },
  }
    `.replace(/\t+| {2,}/g, '').trim()
    }
  },
  methods: {
    toastTop() {
      this.$toast('我是toast信息 上', {closeButton: {text: 'ok啦', callback: this.log}, position: 'top'})
    },
    toastMiddle() {
      this.$toast('我是toast信息 中', {closeButton: {text: 'ok', callback: this.log}, position: 'middle'})
    },
    toastBottom() {
      this.$toast('我是toast信息 下', {closeButton: {text: 'ok啦', callback: this.log}, position: 'bottom'})
    },
  }
}
</script>

<style scoped lang='scss'>

</style>