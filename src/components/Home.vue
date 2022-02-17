<template>
  <b-container fluid class="mt-5">
    <b-row  align-h="between">
      <b-col cols="4">
        <b-button variant="outline-primary" class="p-4" @click.prevent="openModalPrimeNumbers">Prime Numbers</b-button>
      </b-col>
      <b-col cols="4">
        <b-button variant="outline-success" class="p-4">Script JSON</b-button>
      </b-col>
      <b-col cols="4">
        <b-button variant="outline-danger" class="p-4">Heroes Marvel</b-button>
      </b-col>
    </b-row>
    <prime-numbers :show="show" @close="show = false"></prime-numbers>
  </b-container>
</template>

<script>

export default {
  name: 'Home',
  components: {
    PrimeNumbers: () => import('./PrimeNumbers')
  },
  data () {
    return {
      show: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openModalPrimeNumbers () {
      this.show = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
