<template>
  <Header />
  <main>
    <router-view class="p-1 p-md-3" />
  </main>
  <Footer />
</template>
<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
@import "./styles/custom-bootstrap";
</style>