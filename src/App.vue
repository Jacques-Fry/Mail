<template>
  <div id="app">
    <router-view />
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from "components/content/mainTabBar/MainTabBar";

export default {
  name: "app",
  components: {
    maintabbar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
