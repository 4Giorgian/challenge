<template>
  <div id="app">
    <img src="./assets/logo.png">
    <home/>
  </div>
</template>

<script>
import Home from './components/pages/Home';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import './sass/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: $primary;
}
</style>
