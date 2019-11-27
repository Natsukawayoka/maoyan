import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.scss'
import './assets/common.scss'
import cache from './util/cache'

Vue.config.productionTip = false

Vue.filter('replaceurl', (val) => {
  return val.replace('w.h', '128.180');
})

Vue.use(cache);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
