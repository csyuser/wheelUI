import Row from '../src/row'

const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Popover)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('可以接收position', (done) => {
      Vue.component('w-popover',Popover)
      let div = document.createElement('div')
      document.body.appendChild(div)
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
      // const inputElement = vm.$el.querySelector('input')
      // expect(inputElement.value).to.equal('李四')
    })

  })
})