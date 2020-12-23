const expect = chai.expect
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
  it('Collapse存在.', () => {
    expect(Collapse).to.be.ok
  })
  it('CollapseItem存在.', () => {
    expect(CollapseItem).to.be.ok
  })

  describe('props', () => {
    Vue.component('w-collapse', Collapse)
    Vue.component('w-collapse-item', CollapseItem)
    let div = document.createElement('div')
    document.body.appendChild(div)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('collapse可以接收selected & collapse-item可以接收name', (done) => {
      div.innerHTML = `
     <w-collapse :selected.sync="selectedTab">
      <w-collapse-item title="标题1" name="1"><div id="content1">内容1</div></w-collapse-item>
      <w-collapse-item title="标题2" name="2"><div id="content2">内容2</div></w-collapse-item>
      <w-collapse-item title="标题3" name="3"><div id="content3">内容3</div></w-collapse-item>
    </w-collapse>`
      vm = new Vue({
        el: div,
        data() {
          return {
            selectedTab: ['1', '2']
          }
        }
      })
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('#content1')).to.be.exist
        expect(vm.$el.querySelector('#content2')).to.be.exist
        expect(vm.$el.querySelector('#content3')).to.be.not.exist
        done()
      })
    })
    it('collapse可以接收single', (done) => {
      div.innerHTML = `
     <w-collapse single :selected.sync="selectedTab">
      <w-collapse-item title="标题1" name="1"><div id="content1">内容1</div></w-collapse-item>
      <w-collapse-item title="标题2" name="2"><div id="content2">内容2</div></w-collapse-item>
      <w-collapse-item title="标题3" name="3"><div id="content3">内容3</div></w-collapse-item>
    </w-collapse>`
      vm = new Vue({
        el: div,
        data() {
          return {
            selectedTab: ['1']
          }
        }
      })
      vm.$nextTick(() => {
        vm.$el.querySelector('[data-name="2"]').click()
        vm.$nextTick(()=>{
          expect(vm.$el.querySelector('#content1')).to.be.not.exist
          expect(vm.$el.querySelector('#content2')).to.be.exist
          expect(vm.$el.querySelector('#content3')).to.be.not.exist
          done()
        })
      })
    })

  })
})