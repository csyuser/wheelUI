<template>
  <div class="button-wrap">
    <div class="common-use-use">
      <h3>基础按钮</h3>
      <w-button>按钮</w-button>
      <pre><code>{{ commonContent }}</code></pre>
    </div>
    <div class="icon-button">
      <h3>带icon的按钮</h3>
      <w-button icon="settings">按钮icon</w-button>
      <w-button icon-position="right" icon="settings">按钮在右侧</w-button>
      <w-button :loadings="true" icon="settings">loading按钮</w-button>
      <pre><code>{{ iconContent }}</code></pre>
    </div>
    <div class="button-group">
      <h3>按钮组</h3>
      <w-button-group>
        <w-button icon="left">上一页</w-button>
        <w-button>更多</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
      </w-button-group>
      <pre><code>{{ groupContent }}</code></pre>
    </div>
  </div>
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'

export default {
  components: {
    'w-button': Button,
    'w-button-group': ButtonGroup,
  },
  data() {
    return {
      commonContent: `
          <g-button>默认按钮</g-button>
        `.replace(/\t+| +/g, '').trim(),
      iconContent:`
      <w-button icon="settings">按钮icon</w-button>
      <w-button icon-position="right" icon="settings">按钮在右侧</w-button>
      <w-button :loadings="loading" @click="loading = !loading" icon="settings">loading按钮</w-button>
`.replace(/\t+| {2,}/g, '').trim(),
      groupContent:`
      <w-button-group>
        <w-button icon="left">上一页</w-button>
        <w-button>更多</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
      </w-button-group>
`.replace(/\t+| {2,}/g, '').trim(),
    }
  }
}
</script>
<style>
h3 {
  font-weight: normal;
  color: #1f2f3d;
  font-size: 22px;
}
</style>