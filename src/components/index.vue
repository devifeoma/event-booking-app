<template>
  <div>
    <top-bar></top-bar>
    <side-bar></side-bar>
    <main-content></main-content>
    <event-footer></event-footer>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import topBar from "../components/topBar.vue";
import sideBar from "../components/sideBar.vue";
import mainContent from "../components/mainContent.vue";
import eventFooter from "../components/eventFooter.vue";

export default {
  name: "Index",
  components: {
    topBar,
    sideBar,
    mainContent,
    eventFooter,
  },
};
</script>

<style></style>
