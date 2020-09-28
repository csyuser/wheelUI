
## wheelUI，一款简单的UI造轮子
[![Build Status](https://www.travis-ci.org/csyuser/wheelUI.svg?branch=master)](https://www.travis-ci.org/csyuser/wheelUI)
## 介绍
- name:wheelUI
- description:一款简单的UI造轮子
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
- 你还需要设置颜色变量（后续会优化成SCSS）
- IE 15 及以上浏览器都支持此样式
  ```
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  ## 文档
  ## 提问
  ## 变更记录
  ## 联系方式
  ## 贡献代码