---
title: 快速开始
---

## 开始使用
1. 安装 wheelUI
```
npm i --save ui-9-24
```
2. 引入
```
<script>
import {Button, ButtonGroup, Icon} from 'ui-9-24'
import 'ui-9-24/dist/index.css'

export default {
  name: 'App',
  components: {
    'g-button':Button,
    'g-icon': Icon,
    w-button-group:ButtonGroup
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
- 你还需要设置颜色变量
- IE 15 及以上浏览器都支持此样式

```
 $button-height: 32px;
 $font-size: 14px;
 $button-bg: white;
 $button-active-bg: #eee;
 $border-radius: 4px;
 $color: #333;
 $border-color: #999;
 $border-color-hover: #666;
 $red: #F1453D;
```