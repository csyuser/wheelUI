import Toast from './toast'

export default {
  install(Vue,options){
    Vue.prototype.$toast = function (message,toastOption){
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData:toastOption
      })
      toast.$slots.default = message  //挂载之前就要设置，否则就没有默认值
      toast.$mount()  //一定要有这一步，否则toast所有生命周期的钩子就会不执行
      document.body.appendChild(toast.$el)
    }
  }
}