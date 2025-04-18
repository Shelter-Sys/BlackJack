<template>
  <div id="app">
    <Header />
    <GameTable />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import GameTable from './components/GameTable.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    GameTable,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
