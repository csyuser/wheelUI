<template>
  <div class="layout">
    <div class="top-middle-bottom">
      <h3>1. 上-左右-下</h3>
      <w-layout style="height: 200px">
        <w-header class="demo header">header</w-header>
        <w-layout>
          <w-side class="demo side">side</w-side>
          <w-content class="demo main">content</w-content>
        </w-layout>
        <w-footer class="demo footer">footer</w-footer>
      </w-layout>
      <p>代码展示</p>
      <pre><code>{{ content1 }}</code></pre>
    </div>
    <div class="left-right">
      <h3>2. 左右</h3>
      <w-layout style="height: 200px">
        <w-side class="demo side">side</w-side>
        <w-layout>
          <w-header class="demo header">header</w-header>
          <w-layout>
            <w-content class="demo main">content</w-content>
            <w-side class="demo side">side</w-side>
          </w-layout>
          <w-footer class="demo footer">footer</w-footer>
        </w-layout>
      </w-layout>
      <ul>
        <li>代码展示</li>
      </ul>
      <pre><code>{{ content2 }}</code></pre>
    </div>
  </div>
</template>

<script>
import Layout from '../../../src/layout'
import Side from '../../../src/side'
import Header from '../../../src/header'
import Footer from '../../../src/footer'
import Content from '../../../src/content'
import Icon from '../../../src/icon'

export default {
  name: 'Layout',
  components: {
    'w-layout': Layout,
    'w-side': Side,
    'w-header': Header,
    'w-footer': Footer,
    'w-content': Content,
    'w-icon': Icon,
  },
  data() {
    return {
      content1: `
    <w-layout style="height: 200px">
        <w-header class="demo header">header</w-header>
        <w-layout>
          <w-side class="demo side">side</w-side>
          <w-content class="demo main">content</w-content>
        </w-layout>
        <w-footer class="demo footer">footer</w-footer>
      </w-layout>
    `.replace(/\t+| {2,}/g, '').trim(),
      content2: `
    <w-layout style="height: 200px">
        <w-side class="demo side">side</w-side>
        <w-layout>
          <w-header class="demo header">header</w-header>
          <w-layout>
            <w-content class="demo main">content</w-content>
            <w-side class="demo side">side</w-side>
          </w-layout>
          <w-footer class="demo footer">footer</w-footer>
        </w-layout>
      </w-layout>
    `.replace(/\t+| {2,}/g, '').trim(),
    }
  },
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
.demo {
  min-height: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  background: #7dbcea;
}

.main {
  background: #108ee9;
}

.footer {
  background: #7dbcea;
}

.side {
  background: #3ba0e9;
  min-width: 100px;
}
</style>