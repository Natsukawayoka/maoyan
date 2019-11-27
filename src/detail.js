import Vue from 'vue'
import Detail from './views/detail/Detail.vue'
import './assets/reset.scss'
import "./assets/common.scss";

Vue.config.productionTip = false

new Vue({
  render: h => h(Detail)
}).$mount('#app')