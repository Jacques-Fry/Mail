import Vue from 'vue'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import toast from 'components/common/toast'


Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

//安装插件
Vue.use(toast)
//图片懒加载
Vue.use(VueLazyLoad)

//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
