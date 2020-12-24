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
    </div>
    <div class="left">
      <h3>2. align，默认靠左</h3>
      <w-row gutter="20" align="left">
        <w-col>
          <div class="col-content">1</div>
        </w-col>
        <w-col>
          <div class="col-content">2</div>
        </w-col>
      </w-row>
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
    </div>
    <div class="gutter-offset">
      <p>5. gutter等于20，offset等于2</p>
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
  }
}
</script>

<style scoped lang='scss'>
*{
  box-sizing: border-box;
}

</style>