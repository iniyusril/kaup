import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
Vue.use(Router)


//custom framework
import './assets/js/functions'
import './assets/css/app.min.1.css'
import './assets/css/app.min.2.css'
import './assets/libs/animate/animate.css'
import './assets/libs/material/css/material.min.css'

import { store } from './store/store'
import { axs } from './store/store'

import swal from 'vue-sweetalert2'
Vue.use(swal);
//route guard


//custom prototype
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
//for pagination
import { Pagination } from 'bootstrap-vue/es/components';
Vue.use(Pagination);
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
console.log("vm",vm)
