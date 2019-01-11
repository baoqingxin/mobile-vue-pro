import Vue from 'vue'
import { Button, Cell } from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
