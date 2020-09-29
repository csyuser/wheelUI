const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
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
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('支持事件change/input/focus/blur', () => {
      ['change', 'input', 'focus', 'blur']
        .forEach((eventName) => {
          vm = new Constructor({}).$mount()
          const callback = sinon.fake()
          vm.$on(eventName, callback)   //触发change事件后执行callback函数
          const inputElement = vm.$el.querySelector('input')
          let event = new Event(eventName)  //创建change事件,等价于下面两行代码
          // let event = document.createEvent('Event');
          // event.initEvent('change', true, true);
          Object.defineProperty(  //设置event.target的值
            event, 'target', {
              value: {value: 'hi'}, enumerable: true
            }
          )
          inputElement.dispatchEvent(event)  //触发change事件
          expect(callback).to.have.been.calledWith('hi')  //验证event是否作为参数传到父组件了
        })
    })
  })
})