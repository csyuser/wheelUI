const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })

  describe('props', () => {
    Vue.component('w-popover',Popover)
    let div = document.createElement('div')
    document.body.appendChild(div)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('可以接收position', (done) => {
      div.innerHTML=`
      <w-popover  position="bottom" ref="a">
        <template>
          <div>内容</div>
        </template>
        <button>点我</button>
      </w-popover>`
      vm = new Vue({
        el:div
      })
      vm.$el.querySelector('button').click()
      vm.$nextTick(()=>{
        const {contentWrap} = vm.$refs.a.$refs
        expect(contentWrap.classList.contains('position-bottom')).to.be.ok
        done()
      })
    })
    it('可以触发hover事件', (done) => {
      div.innerHTML=`
      <w-popover trigger="hover" ref="a">
        <template>
          <div>内容</div>
        </template>
        <button>点我</button>
      </w-popover>`
      vm = new Vue({
        el:div
      })
      let  event = new Event('mouseenter')
      vm.$refs.a.$refs.popover.dispatchEvent(event)
      vm.$nextTick(()=>{
        const {contentWrap} = vm.$refs.a.$refs
        expect(contentWrap).to.exist
        done()
      })
    })

  })
})