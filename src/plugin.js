import Toast from './toast'
function creatToast({Vue, message, propsData, onclose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData:propsData
  })
  toast.$slots.default = message  //挂载之前就要设置，否则就没有默认值
  toast.$mount()  //一定要有这一步，否则toast所有生命周期的钩子就会不执行
  toast.$on('close',onclose)
  document.body.appendChild(toast.$el)
  return toast
}


export default {
  install(Vue,options){
    let currentToast
    Vue.prototype.$toast = function (message,toastOption){
      if (currentToast){currentToast.close()}
      currentToast = creatToast(
        {
          Vue,
          message,
          propsData:toastOption,
          onclose: () => {
            currentToast = null
          }
        }
      )
    }
  }
}