<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import TheNavbar from "./components/TheNavbar.vue";
export default {
  components: { TheNavbar },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("initTasks");
    });
  },
};
</script>

<style></style>
