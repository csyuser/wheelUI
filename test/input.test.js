const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })

    it('可以接收value.', () => {
      vm = new Constructor({
        propsData: {
          value: '李四'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('李四')
    })
    it('可以接收disable', () => {
      vm = new Constructor({
        propsData: {
          disable: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('可以接收readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      expect(vm.$el.querySelector('.errorMessage').innerText).to.equal('你错了')
    })
  })
  describe('事件',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })

    // it('支持事件change/input/focus/blur', () => {
    //   vm = new Constructor({}).$mount()
    //   const callback = sinon.fake()
    //   vm.$on('click', callback)
    //   vm.$el.click()
    //   expect(callback).to.have.been.called
    // })
  })
})