<template>
  <div class="collapse">
    <h3>collapse</h3>
    <w-collapse single :selected.sync="selectedTab">
      <w-collapse-item title="标题1" name="1">
        <div>内容1</div>
      </w-collapse-item>
      <w-collapse-item title="标题2" name="2">
        <div>内容2</div>
      </w-collapse-item>
      <w-collapse-item title="标题3" name="3">
        <div>内容3</div>
      </w-collapse-item>
    </w-collapse>
    <ul>
      <li>name是必须的，也是唯一值,用于标记单个项</li>
      <li>single设置是否只能展开单个，默认false</li>
      <li>selected.sync设置默认展开项，是一个数组</li>
    </ul>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import WCollapse from '../../../src/collapse'
import WCollapseItem from '../../../src/collapse-item'

export default {
  name: 'Collapse',
  components:{WCollapse,WCollapseItem},
  data() {
    return {
      selectedTab:['1','3'],
      content: `
    <w-collapse single :selected.sync="selectedTab">
      <w-collapse-item title="标题1" name="1">
        <div>内容1</div>
      </w-collapse-item>
      <w-collapse-item title="标题2" name="2">
        <div>内容2</div>
      </w-collapse-item>
      <w-collapse-item title="标题3" name="3">
        <div>内容3</div>
      </w-collapse-item>
    </w-collapse>
    //JS代码
    data(){
    return{
        selectedTab:['1','3']
    }
    `.replace(/\t+| {2,}/g, '').trim()
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
</style>