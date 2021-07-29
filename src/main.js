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

Vue.use(animate);


import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: "eAIzd3RVU0foU9RSTLvDGR2FCy0Gjbi2"
});

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
});
