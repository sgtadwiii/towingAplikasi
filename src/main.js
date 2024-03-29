import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";
import 'mdb-vue-ui-kit/css/mdb.min.css';



axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "https://gabbyblog.herokuapp.com/";

axios.interceptors.response.use(undefined, function(error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
});

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB0VYUzUXhcCp0EqAEjidI9Wt7swU-fpek',
    libraries: 'places',
    region: 'ID',
  },
})

new Vue({
  
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

