<template>
  <div>
    <div class="text-white">
      <h3 v-text="name"></h3>
      <p v-text="text.toUpperCase()"></p>
      <div class="mb-4 d-flex justify-content-center">
        <b-img left v-bind="images.mainProps" :src="images.vue"  alt="Logo VueJs"/>
        <h2 class="mt-auto">+</h2>
        <b-img right v-bind="images.mainProps" :src="images.bootstrapVue"  alt="Logo BootstrapVueJs"/>
      </div>
    </div>
    <b-container fluid class="mt-5">
      <b-row  align-h="between">
        <b-col cols="4">
          <b-button variant="outline-primary" class="p-4" @click.prevent="openModals(1)">Prime Numbers</b-button>
        </b-col>
        <b-col cols="4">
          <b-button variant="outline-success" class="p-4" @click.prevent="openModals(2)">Script JSON</b-button>
        </b-col>
        <b-col cols="4">
          <b-button variant="outline-danger" class="p-4" @click="$router.push({ name: 'HeroesMarvel' })">Heroes Marvel</b-button>
        </b-col>
      </b-row>
      <prime-numbers :show="showModalPrime" @close="showModalPrime = false"></prime-numbers>
      <script-j-s-o-n :show="showModalScrip" @close="showModalScrip = false"></script-j-s-o-n>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    ScriptJSON: () => import('./ScriptJSON'),
    PrimeNumbers: () => import('./PrimeNumbers')
  },
  data () {
    return {
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
      },
      showModalPrime: false,
      showModalScrip: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    openModals (num) {
      if (num === 1) this.showModalPrime = true
      if (num === 2) this.showModalScrip = true
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
