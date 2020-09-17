import Vue from 'vue'
import Button from './button.vue'
import Icon from './w-icon'

Vue.component('w-button',Button)
Vue.component('w-icon',Icon)

new Vue({
    el: '#app',
  })