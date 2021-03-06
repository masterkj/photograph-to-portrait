import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils';
import './plugins';
import './style/index.sass';

import globalMixin from './utils/globalMixin';

Vue.mixin(globalMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
