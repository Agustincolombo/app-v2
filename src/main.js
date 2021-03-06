import Vue from 'vue'
import vueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import store from './store/index';

import BandasCargadas from './components/bandas/BandasCargadas.vue';
import BandasRegistro from './components/registro/BandasRegistro.vue';
import BandasError from './components/error/NotFound.vue'

Vue.use(vueRouter);
Vue.config.productionTip = false
const router = new vueRouter({
  routes:[
    {path: '/', redirect:'/bandas'},
    {path: '/bandas', component: BandasCargadas},
    {path: '/registro', component: BandasRegistro},
    {path: '/:notFound(.*)', component:BandasError}
  ]
});

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')