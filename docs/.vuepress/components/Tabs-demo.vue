<template>
  <div class="tabs">
    <h3>Tabs</h3>
    <w-tabs selected="sports">
      <w-tabs-head>
        <template #actions>
          <w-button>设置</w-button>
        </template>
        <w-tabs-item name="sports">体育</w-tabs-item>
        <w-tabs-item name="military" disabled>军事</w-tabs-item>
        <w-tabs-item name="finance">财经</w-tabs-item>
      </w-tabs-head>
      <w-tabs-body>
        <w-tabs-pane name="sports">体育相关资讯</w-tabs-pane>
        <w-tabs-pane name="military">军事相关资讯</w-tabs-pane>
        <w-tabs-pane name="finance">财经相关资讯</w-tabs-pane>
      </w-tabs-body>
    </w-tabs>
    <ul>
      <li>name是必须的，也是唯一值,用于标记单个内容</li>
    </ul>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import WTabsItem from '../../../src/tabs-item'
import WButton from '../../../src/button'
import WTabsBody from '../../../src/tabs-body'
import WTabsPane from '../../../src/tabs-pane'
import WTabsHead from '../../../src/tabs-head'
import WTabs from '../../../src/tabs'

export default {
  name: 'Tabs-demo',
  components:{WTabsHead,WButton,WTabsItem,WTabsBody,WTabsPane,WTabs},
  data() {
    return {
      content: `
    <w-tabs selected="sports">
      <w-tabs-head>
        <template #actions>
          <w-button>设置</w-button>
        </template>
        <w-tabs-item name="sports">体育</w-tabs-item>
        <w-tabs-item name="military" disabled>军事</w-tabs-item>
        <w-tabs-item name="finance">财经</w-tabs-item>
      </w-tabs-head>
      <w-tabs-body>
        <w-tabs-pane name="sports">体育相关资讯</w-tabs-pane>
        <w-tabs-pane name="military">军事相关资讯</w-tabs-pane>
        <w-tabs-pane name="finance">财经相关资讯</w-tabs-pane>
      </w-tabs-body>
    </w-tabs>
    `.replace(/\t+| {2,}/g, '').trim()
    }
  },
}
</script>

<style scoped lang='scss'>

</style>