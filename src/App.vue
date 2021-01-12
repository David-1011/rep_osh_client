<template>
  <TheHeader />
  <main>
    <router-view class="p-1 p-md-3" />
  </main>
  <TheFooter />
</template>
<script>
import axios from "axios";
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";
export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter
  },
  created: function() {
    axios.interceptors.response.use(
      res => res,
      err => {
        if (err.response.status === 401) {
          this.$store.dispatch("logout").then(() => {
            this.$router.push("/");
          });
        }
      }
    );
  }
};
</script>
<style lang="scss">
@import "./styles/custom-bootstrap";
</style>