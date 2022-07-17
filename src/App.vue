<template>

  <main class="container">
    <Header/>
    <router-view to="/"></router-view>
  </main>

</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


<style scoped>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "SFProText";
  }

  .container {
    margin: 0px 30px;
    font-family: "SFProText";
  }

</style>
