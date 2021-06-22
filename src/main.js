import Vue from 'vue'
import App from './App'
import './plugin/bringIn'
import './plugin/register'
import router from './router'
import store from './vuex/store'
import 'vant/lib/index.css';
import './plugin/mock'
import '../src/assets/style/global.css'
import animate from "animate.css"

Vue.use(animate)

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
