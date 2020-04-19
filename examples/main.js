import Vue from 'vue'
import App from './App.vue'
import ShUi from '../packages'

Vue.config.productionTip = false
Vue.use(ShUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
