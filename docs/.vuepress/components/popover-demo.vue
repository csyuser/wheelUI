<template>
  <div class="popover">
    <h3>popover</h3>
    <div class="xxx" style="overflow: hidden;border: 1px solid green; padding: 5px;">
      <w-popover trigger="hover">
        <template #content="{close}">
          <div>内容</div>
          <w-button @click="close">点击关闭</w-button>
        </template>
        <w-button>hover触发top</w-button>
      </w-popover>
      <w-popover position="right">
        <template slot="content">
          <div>
            内容egfszhshtsgdcssaaaaaaaaciasjw9qahairjjdnbsaizaaasjw9qahairjjdnbsaizaaasjw9qahairjjdnbsaizaaasjw9qahairjjdnbsaizaaa
          </div>
        </template>
        <w-button>内容right</w-button>
      </w-popover>
      <w-popover position="bottom">
        <template slot="content">
          <div>内容</div>
        </template>
        <w-button>内容bottom</w-button>
      </w-popover>
      <w-popover position="left">
        <template slot="content">
          <div>内容egfszhshtsgdcssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </template>
        <w-button>内容left</w-button>
      </w-popover>
    </div>
    <ul>
      <li>trigger设置触发事件，默认click触发，支持hover触发</li>
      <li>可以设置popover的位置，支持left,right,bottom,top，默认top</li>
    </ul>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import WPopover from '../../../src/popover'
import WButton from '../../../src/button'

export default {
  name: 'popover.demo',
  components:{WPopover,WButton},
  data() {
    return {
      content: `<w-popover trigger="hover">
        <template #content="{close}">
          <div>内容</div>
          <w-button @click="close">点击关闭</w-button>
        </template>
        <w-button>hover触发top</w-button>
      </w-popover>
      <w-popover position="right">
        <template slot="content">
          <div>
            内容egfszhshtsgdcssaaaaaaaaciasjw9qahairjjdnbsaizaaasjw9qahairjjdnbsaizaaasjw9qahairjjdnbsaizaaasjw9qahairjjdnbsaizaaa
          </div>
        </template>
        <w-button>内容right</w-button>
      </w-popover>
      <w-popover position="bottom">
        <template slot="content">
          <div>内容</div>
        </template>
        <w-button>内容bottom</w-button>
      </w-popover>
      <w-popover position="left">
        <template slot="content">
          <div>内容egfszhshtsgdcssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </template>
        <w-button>内容left</w-button>
      </w-popover>
    `.replace(/\t+| {2,}/g, '').trim()
    }
  }
}
</script>

<style scoped lang='scss'>
* {
  box-sizing: border-box;
}

h3 {
  margin: 20px 0;
  font-weight: normal;
  color: #1f2f3d;
  font-size: 22px;
}
</style>