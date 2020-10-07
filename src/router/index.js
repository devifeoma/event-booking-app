import Vue from "vue";
import VueRouter from "vue-router";
import index from "../components/index";
import viewEvent from "../components/viewEvent";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/:id",
    name: "viewEvent",
    component: viewEvent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
