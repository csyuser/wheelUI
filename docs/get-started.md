---
title: 快速开始
---

## 开始使用
1. 安装 wheelUI
```
yarn add wheeiui-1  //yarn
npm i --save wheeiui-1 //npm
```
2. 引入
- 目前只支持按需引入
- 需要注意的是，css样式需要单独引入（可在main.js里面全局引入）
```
<script>
import {Button, ButtonGroup, Icon} from 'ui-9-24'
import 'ui-9-24/dist/index.css'

export default {
  name: 'App',
  components: {
    'g-button':Button,
    'g-icon': Icon,
    'w-button-group':ButtonGroup
  }
}
</script>
```
3. 添加CSS样式
- 使用本框架前请开启border-box样式
- IE8及以上版本浏览器支持此样式
```
*,*::before,*::after{
    box-sizing:border-box
}
```