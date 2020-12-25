<template>
  <div class="row">
    <div class="default">
      <h3>1. 默认样式</h3>
      <w-row>
        <w-col span="2">
          <div class="col-content">1</div>
        </w-col>
        <w-col span="2">
          <div class="col-content">2</div>
        </w-col>
        <w-col span="2">
          <div class="col-content">3</div>
        </w-col>
        <w-col span="18">
          <div class="col-content">4</div>
        </w-col>
      </w-row>
      <ul>
        <li>span设置grid占比</li>
      </ul>
      <pre><code>{{ defaultContent }}</code></pre>
    </div>
    <div class="left">
      <h3>2. align，默认靠左</h3>
      <w-row>
        <w-col>
          <div class="col-content">1</div>
        </w-col>
        <w-col>
          <div class="col-content">2</div>
        </w-col>
      </w-row>
      <w-row align="right">
        <w-col>
          <div class="col-content">1</div>
        </w-col>
        <w-col>
          <div class="col-content">2</div>
        </w-col>
      </w-row>
      <ul>
        <li>align设置位置，可以是left，center，right</li>
      </ul>
      <pre><code>{{ leftContent }}</code></pre>
    </div>
    <div class="reactive">
      <h3>3. 响应式布局,默认手机端</h3>
      <w-row gutter="20">
        <w-col span="24" :pc="{span:4}" :widepc="{span:6}" :narrowpc="{span:6}">
          <div class="col-content">1</div>
        </w-col>
        <w-col span="24" :pc="{span:4}" :widepc="{span:6}" :narrowpc="{span:6}">
          <div class="col-content">2</div>
        </w-col>
        <w-col span="24" :pc="{span:6}" :widepc="{span:6}" :narrowpc="{span:6}">
          <div class="col-content">3</div>
        </w-col>
        <w-col span="24" :pc="{span:8,offset:2}" :widepc="{span:6,offset:0}" :narrowpc="{span:6}">
          <div class="col-content">4</div>
        </w-col>
      </w-row>
      <ul>
        <li>默认手机端，pc电脑端，widepc宽屏，narrowpc窄屏</li>
      </ul>
      <pre><code>{{ reactiveContent }}</code></pre>
    </div>
    <div class="gutter">
      <h3>4. gutter等于20</h3>
      <w-row gutter="20">
        <w-col span="2">
          <div class="col-content">1</div>
        </w-col>
        <w-col span="4">
          <div class="col-content">2</div>
        </w-col>
        <w-col span="6" offset="4">
          <div class="col-content">3</div>
        </w-col>
        <w-col span="8">
          <div class="col-content">4</div>
        </w-col>
      </w-row>
      <ul>
        <li>gutter设置间隙</li>
      </ul>
      <pre><code>{{ gutterContent }}</code></pre>
    </div>
    <div class="gutter-offset">
      <h3>5. gutter等于20，offset等于2</h3>
      <w-row gutter="20">
        <w-col span="2">
          <div class="col-content">1</div>
        </w-col>
        <w-col span="2">
          <div class="col-content">2</div>
        </w-col>
        <w-col span="4">
          <div class="col-content">3</div>
        </w-col>
        <w-col span="6">
          <div class="col-content">4</div>
        </w-col>
        <w-col span="8" offset="2">
          <div class="col-content">5</div>
        </w-col>
      </w-row>
      <ul>
        <li>offset设置偏移位置</li>
      </ul>
      <pre><code>{{ offsetContent }}</code></pre>
    </div>
  </div>
</template>

<script>
import Col from '../../../src/col'
import Row from '../../../src/row'

export default {
  name: 'grid-demo',
  components: {
    'w-col': Col,
    'w-row': Row,
  },
  data() {
    return {
      defaultContent: `
    <w-row>
        <w-col span="2">
          <div class="col-content">1</div>
        </w-col>
        <w-col span="2">
          <div class="col-content">2</div>
        </w-col>
        <w-col span="2">
          <div class="col-content">3</div>
        </w-col>
        <w-col span="18">
          <div class="col-content">4</div>
        </w-col>
    `.replace(/\t+| {2,}/g, '').trim(),
      leftContent: `
<w-row>
        <w-col>
          <div class="col-content">1</div>
        </w-col>
        <w-col>
          <div class="col-content">2</div>
        </w-col>
      </w-row>
    <w-row align="right">
        <w-col>
          <div class="col-content">1</div>
        </w-col>
        <w-col>
          <div class="col-content">2</div>
        </w-col>
      </w-row>
    `.replace(/\t+| {2,}/g, '').trim(),
      reactiveContent: `
     <w-row gutter="20">
        <w-col span="24" :pc="{span:4}" :widepc="{span:6}" :narrowpc="{span:6}">
          <div class="col-content">1</div>
        </w-col>
        <w-col span="24" :pc="{span:4}" :widepc="{span:6}" :narrowpc="{span:6}">
          <div class="col-content">2</div>
        </w-col>
        <w-col span="24" :pc="{span:6}" :widepc="{span:6}" :narrowpc="{span:6}">
          <div class="col-content">3</div>
        </w-col>
        <w-col span="24" :pc="{span:8,offset:2}" :widepc="{span:6,offset:0}" :narrowpc="{span:6}">
          <div class="col-content">4</div>
        </w-col>
      </w-row>
    `.replace(/\t+| {2,}/g, '').trim(),
      offsetContent: `
     <w-row gutter="20">
        <w-col span="2">
          <div class="col-content">1</div>
        </w-col>
        <w-col span="2">
          <div class="col-content">2</div>
        </w-col>
        <w-col span="4">
          <div class="col-content">3</div>
        </w-col>
        <w-col span="6">
          <div class="col-content">4</div>
        </w-col>
        <w-col span="8" offset="2">
          <div class="col-content">5</div>
        </w-col>
      </w-row>
    `.replace(/\t+| {2,}/g, '').trim(),
      gutterContent: `
     <w-row gutter="20">
        <w-col span="2">
          <div class="col-content">1</div>
        </w-col>
        <w-col span="4">
          <div class="col-content">2</div>
        </w-col>
        <w-col span="6" offset="4">
          <div class="col-content">3</div>
        </w-col>
        <w-col span="8">
          <div class="col-content">4</div>
        </w-col>
      </w-row>
    `.replace(/\t+| {2,}/g, '').trim()
    }
  },
}
</script>

<style scoped lang='scss'>
* {
  box-sizing: border-box;
}

.row {
  h3 {
    margin: 20px 0;
    font-weight: normal;
    color: #1f2f3d;
    font-size: 22px;
  }
}

</style>