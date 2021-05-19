import Vue from 'vue';
import router from './router';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue';
Vue.use(MintUI)

new Vue({
  el: '#app',
  render:h=>h(App),
  router
})