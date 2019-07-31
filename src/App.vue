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
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
#app {
  font-family:'Roboto', sans-serif;
}
</style>
