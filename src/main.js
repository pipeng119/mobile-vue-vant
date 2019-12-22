import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Popup,
  Tab,
  Tabs,
  Sidebar,
  SidebarItem,
} from 'vant';

import 'lib-flexible/flexible'

import 'common/style/index.scss';
import 'vant/lib/index.css';

Vue.use(Popup);
Vue.use(Tab).use(Tabs);
Vue.use(Sidebar);
Vue.use(SidebarItem);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')