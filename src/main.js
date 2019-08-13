import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$blogName = 'LogRocket'
Vue.prototype.$reverseString = function(x) {
  this[x] = this[x]
    .split('')
    .reverse()
    .join('')
}
Vue.prototype.$axios = axios


new Vue({
  render: h => h(App),
}).$mount('#app')
