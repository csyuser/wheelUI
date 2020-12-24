<template>
  <div class="input-wrap">
    <h3>输入框</h3>
    <w-input value="正常"></w-input>
    <w-input value="disable" disable></w-input>
    <w-input value="readonly" readonly></w-input>
    <w-input value="error" error="姓名不能少于两个字"></w-input>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  name: 'Input',
  components: {
    'w-input': Input,
  },
  data() {
    return {
      content: `
      <w-input value="正常"></w-input>
  <w-input value="disable" disable></w-input>
  <w-input value="readonly" readonly></w-input>
  <w-input value="error" error="姓名不能少于两个字"></w-input>
`.replace(/\t+| {2,}/g, '').trim(),
    }
  }
}
</script>

<style scoped lang='scss'>

</style>