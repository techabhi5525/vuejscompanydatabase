import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Create Vue instance to start Vue application
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
