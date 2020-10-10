const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.be.ok
  })

  describe('Row && props', () => {
    const Constructor = Vue.extend(Row)
    let vm
    it('可以接收gutter.', (done) => {
      Vue.component('w-row',Row)
      Vue.component('w-col',Col)
      let div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML=`
      <w-row gutter="20">
        <w-col span="12"></w-col>
        <w-col span="12"></w-col>
      </w-row>`
      vm = new Vue({
        el:div
      })
      setTimeout(()=>{
        const rowElement = vm.$el.querySelectorAll('.row')
        expect(getComputedStyle(rowElement[0]).marginLeft).to.eq('-10px')
        expect(getComputedStyle(rowElement[0]).marginRight).to.eq('-10px')
        const cols = vm.$el.querySelectorAll('.col')
        expect(getComputedStyle(cols[0]).paddingLeft).to.eq(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
        expect(getComputedStyle(cols[1]).paddingLeft).to.eq(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
        done()
      },0)
    })
    it('可以接收align.', () => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          align: 'center'
        }
      }).$mount(div)
      const rowElement = vm.$el
      expect(getComputedStyle(rowElement).justifyContent).to.eq('center')
    })
  })
})