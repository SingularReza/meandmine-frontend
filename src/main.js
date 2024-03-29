// importing Vue and related
import Vue from 'vue';
import App from './App.vue';
import router from './router';

// importing icons
import 'vue-material-design-icons/styles.css';

// importing bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
