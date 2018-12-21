import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import { iviewComponent } from './components/template/iview'
// 引入iview样式
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iviewComponent)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
