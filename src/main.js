// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Mock from './mock'
Mock.bootstrap();

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)


NProgress.configure({
  showSpinner: false
});

router.beforeEach((to, from, next) => {
  //NProgress.start();
  console.log(to);
  console.log(from);
  console.log(store);
  let top1 = from.path.slice(0, 2)
  let top2 = to.path.slice(0, 2)
  if (top1 == top2) {
    console.log(top2)
  } else {
    store.commit('RESETHIS')
  }
  let nextPath = to.name;
  store.commit('ADDTAG', nextPath)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
