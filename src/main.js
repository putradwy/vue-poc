import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import VueRouter from 'vue-router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
