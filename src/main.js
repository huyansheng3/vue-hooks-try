import Vue from 'vue'
import App from './App.vue'
import { plugin as VueFunctionApi } from 'vue-function-api'


Vue.config.productionTip = false

Vue.use(VueFunctionApi)

new Vue({
  render: h => h(App),
}).$mount('#app')
