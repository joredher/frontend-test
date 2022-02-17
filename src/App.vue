<template>
  <div id="app">
    <div>
      <h3 v-text="name"></h3>
      <p v-text="text.toUpperCase()"></p>
      <div class="mb-4 d-flex justify-content-center">
        <b-img left v-bind="images.mainProps" :src="images.vue"  alt="Logo VueJs"/>
        <h2 class="mt-auto">+</h2>
        <b-img right v-bind="images.mainProps" :src="images.bootstrapVue"  alt="Logo BootstrapVueJs"/>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    name: 'Jorge Eduardo Hernández Oropeza',
    text: 'Working on test',
    images: {
      vue: 'https://v2.vuejs.org/images/logo.svg',
      bootstrapVue: 'https://img.stackshare.io/service/8975/thumb_retina_MNHNfucQ_400x400.jpg',
      mainProps: {
        width: 75,
        height: 75,
        class: 'm1'
      }
    }
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  background: #000;
}
</style>
