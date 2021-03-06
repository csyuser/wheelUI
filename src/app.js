import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Side from './side'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-layout', Layout)
Vue.component('w-header', Header)
Vue.component('w-footer', Footer)
Vue.component('w-side', Side)
Vue.component('w-content', Content)
Vue.component('w-toast', Toast)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)
Vue.component('w-popover', Popover)
Vue.component('w-collapse', Collapse)
Vue.component('w-collapse-item', CollapseItem)

Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    selected:'sports',
    selectedTab:['1','3']
  },
  methods:{
    inputChange(e){
      // console.log(e)
    },
    toastTop(){
      this.$toast('我是toast信息 上',{closeButton:{text: 'ok啦',callback:this.log},position:'top'})
    },
    toastMiddle(){
      this.$toast('我是toast信息 中',{closeButton:{text: 'ok',callback:this.log},position:'middle'})
    },
    toastBottom(){
      this.$toast('我是toast信息 下',{closeButton:{text: 'ok啦',callback:this.log},position:'bottom'})
    },
    log(){
      console.log('执行了关闭的callback')
    },
  }
})

