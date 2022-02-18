<template>
  <div id="app">
    <b-container fluid class="mt-5">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({})
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
</style>
