import Vue from 'vue'
import App from './App.vue'
// 全局混入
import {mixin} from './mixin'
Vue.mixin(mixin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
