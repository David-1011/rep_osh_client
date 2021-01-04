<template>
  <Header />
  <main>
    <router-view class="p-1 p-md-3" />
  </main>
  <Footer />
</template>
<script>
import axios from "axios";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer
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