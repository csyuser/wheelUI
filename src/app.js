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
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
  },
  methods:{
    inputChange(e){
      // console.log(e)
    },
    showToast(){
      this.$toast('<strong>我是加粗的toast信息</strong>',{closeButton:{text: 'ok啦',callback:this.log},isHtml:true})
    },
    log(){
      console.log('执行了关闭的callback')
    }
  }
})

