import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from "fastclick"
import 'styles/reset.css'
import "styles/border.css"
import "styles/iconfont.css"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from "./store"
import "babel-polyfill"
Vue.use(VueAwesomeSwiper,)

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
