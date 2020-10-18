import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/css/style.css";
import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
  color: "white",
  failedColor: "blue",
  height: "5px",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
