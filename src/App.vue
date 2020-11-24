<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
}
</script>
<style>
</style>