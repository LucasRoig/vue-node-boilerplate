import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/store'

import Home from './components/home.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

export const router = new VueRouter({
    mode:'history',
    base: __dirname,
    routes:[
        {path:'/',component:Home}
    ],
    //utile avec semantic-ui
    //linkActiveClass: 'active'
});

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
