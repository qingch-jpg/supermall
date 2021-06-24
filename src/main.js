import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from 'components/common/toast/index'
import VueLazy from 'vue-lazyload'

Vue.use(toast);
Vue.use(VueLazy);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()


new Vue({
  render: function (h) { return h(App) },
  router,
  store
}).$mount('#app')
