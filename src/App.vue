<template>
  <div id="app">
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
  padding-top: 50px;
}
</style>
