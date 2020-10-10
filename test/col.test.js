const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.be.ok
  })
  describe('Col && props', () => {
    const Constructor = Vue.extend(Col)
    let vm
    let div
    beforeEach(()=>{
      div = document.createElement('div')
      document.body.appendChild(div)
    })
    afterEach(()=>{
      vm.$el.remove()
      vm.$destroy()
    })
    it('可以接收span.', () => {
      vm = new Constructor({
        propsData: {
          span: '12'
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('col-12')).to.be.ok
    })
    it('可以接收offset.', () => {
      vm = new Constructor({
        propsData: {
          offset: '12'
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('offset-12')).to.be.ok
    })
    it('可以接收ipad.', () => {
      vm = new Constructor({
        propsData: {
          ipad: {'span':2,offset: 2}
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('offset-ipad-2')).to.be.ok
      expect(vm.$el.classList.contains('col-ipad-2')).to.be.ok
    })
    it('可以接收narrowpc.', () => {
      vm = new Constructor({
        propsData: {
          narrowpc: {'span':2,offset: 2}
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('offset-narrowpc-2')).to.be.ok
      expect(vm.$el.classList.contains('col-narrowpc-2')).to.be.ok
    })
    it('可以接收pc.', () => {
      vm = new Constructor({
        propsData: {
          pc: {'span':2,offset: 2}
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('offset-pc-2')).to.be.ok
      expect(vm.$el.classList.contains('col-pc-2')).to.be.ok
    })
    it('可以接收widepc.', () => {
      vm = new Constructor({
        propsData: {
          widepc: {'span':2,offset: 2}
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('offset-widepc-2')).to.be.ok
      expect(vm.$el.classList.contains('col-widepc-2')).to.be.ok
    })
    it('可以接收largepc.', () => {
      vm = new Constructor({
        propsData: {
          largepc: {'span':2,offset: 2}
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('offset-largepc-2')).to.be.ok
      expect(vm.$el.classList.contains('col-largepc-2')).to.be.ok
    })
  })
})