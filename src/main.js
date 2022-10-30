import Vue from 'vue'
import App from './App.vue'
import InstantSearch from 'vue-instantsearch';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
Vue.use(InstantSearch);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(BootstrapIconsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
