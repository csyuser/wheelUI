<template>
  <div class="toast">
    <div>
      <h3>1. Toast</h3>
      <w-button @click="toastTop">toast top</w-button>
      <w-button @click="toastMiddle">toast middle</w-button>
      <w-button @click="toastBottom">toast bottom</w-button>
      <ul>
        <li>设置关闭操作：closeButton: {text: '关闭', callback: this.log}，callback是执行关闭提示消息后的回调</li>
        <li>消息弹出的位置：position，支持top，middle，bottom</li>
        <li>是否自动关闭：autoClose:{auto: true, callback: undefined}，callback是执行关闭提示消息后的回调</li>
        <li>自动关闭的时间：autoCloseDelay，默认5s</li>
      </ul>
      <pre><code>{{ content }}</code></pre>
    </div>
    <div>
      <h3>2. Toast支持html格式</h3>
      <w-button @click="htmlContent">toast</w-button>
      <ul>
        <li>如果想提示内容是HTML内容，可以使用isHtml设置，默认为false</li>
      </ul>
      <pre><code>{{ content2 }}</code></pre>
    </div>
  </div>
</template>

<script>
import Button from '../../../src/button'
import plugin from '../../../src/plugin'
import Vue from 'vue'

Vue.use(plugin)

export default {
  name: 'Toast-demo',
  components: {'w-button': Button},
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
    log() {
      console.log('我就是个关闭的回调')
    }
  }
    `.replace(/\t+| {2,}/g, '').trim(),
      content2: `
<w-button @click="htmlContent">toast</w-button>
    //JS代码
    methods: {
    htmlContent() {
      this.$toast('<p>我是html内容哦</p>', {
        closeButton: {text: 'ok啦', callback: this.log},
        isHtml: true,
        position: 'bottom'
      })
    },
    log() {
      console.log('我就是个关闭的回调')
    }
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
    htmlContent() {
      this.$toast('<p>我是html内容哦</p>', {
        closeButton: {text: 'ok啦', callback: this.log},
        isHtml: true,
      })
    },
    log() {
      console.log('我就是个关闭的回调')
    }
  }
}
</script>

<style scoped lang='scss'>

</style>