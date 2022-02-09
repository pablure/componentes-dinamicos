import Vue from 'vue'
import App from './App.vue'
import mixins from '@/mixins'
Vue.mixin(mixins)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
