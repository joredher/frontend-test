<template>
  <div class="page-marvel">
    <b-container fluid class="mt-5">
      <div class="loading" v-show="loading">
        <b-spinner class="sr-only" variant="white" style="width: 4rem; height: 4rem;"></b-spinner>
      </div>
      <b-row class="container m-auto" align-h="center">
        <b-col md="3" class="search-section">
          <b-img src="data:image/png;base64,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" class="header image-thumbnail" alt="Logo Marvel"></b-img>
        </b-col>
        <b-col md="9" class="search-section">
          <b-input-group size="lg" class="mt-3 header text-black">
            <b-form-input placeholder="Type to search ..." @keyup.enter="getHeroes" v-model="searchName"></b-form-input>
            <b-input-group-append>
              <b-button size="lg" text="Search" @click.prevent="getHeroes" >Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="container m-auto" align-h="center" id="containerCards">
        <b-col v-if="heroes && heroes.length" cols="12" sm="12" md="6" lg="4"  v-for="item in heroes" :key="item.name" class="cols-container">
          <b-card style="margin: 10px 10px"
                  class="mb-5 card-container"
                  :img-src="`${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`"
                  :img-alt="`image ${item.name}`"
                  text-variant="white"
                  overlay
          >
            <b-card-body overlay class="card-description">
              <b-card-text v-text="item.description"></b-card-text>
            </b-card-body>
            <div class="footer-card text-white" slot="footer">
              <div class="d-inline-block">
                <h4 v-text="item.name"></h4>
                <h6>Date: {{ formatDate(item.modified) }}</h6>
                <b-button size="sm" text="Edit" class="bg-warning border-0 focused" @click.prevent="editHero(item)">Edit</b-button>
              </div>
            </div>
          </b-card>
        </b-col>
        <b-col v-show="heroes.length === 0" cols="12">
          <h3 class="text-white" v-text="'No results found... Type again'"></h3>
        </b-col>
      </b-row>
    </b-container>
    <edit-hero ref="editHeroes" @update="(item) => changedItem(item)"></edit-hero>
  </div>
</template>

<script>
export default {
  name: 'HeroesMarvel',
  components: {
    EditHero: () => import('./EditHero')
  },
  data: () => ({
    heroes: [],
    footer: {},
    limit: 18,
    loading: false,
    searchName: '',
    params: {
      apikey: '#',
      ts: '#',
      hash: '#'
    }
  }),
  watch: {
    searchName: {
      handler (val) {
        if (!val) this.getHeroes()
      }
    }
  },
  mounted () {
    this.scrollInfinite()
    this.getHeroes()
  },
  methods: {
    editHero: function (hero) {
      this.$refs.editHeroes.edit(hero)
    },
    changedItem: function (hero) {
      // modificamoes el heroe en el array existente
      // Es claro tener en cuenta que si se realiza scroll, se pierde el cambio
      this.heroes.forEach((x) => {
        if (x.id === hero.id) {
          x.name = hero.name
          x.description = hero.description
        }
      })
    },
    formatDate: function (date) {
      let dateTemp = new Date(date)
      return `${dateTemp.getDay()}-${dateTemp.getMonth()}-${dateTemp.getFullYear()}`
    },
    scrollInfinite: function () {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.limit += 3
          this.getHeroes()
        }
      }
    },
    getHeroes: function () {
      if (!this.loading) {
        this.loading = true
        setTimeout((e) => {
          this.axios.get(`https://gateway.marvel.com/v1/public/characters?limit=${this.limit}${this.searchName ? ('&nameStartsWith=' + this.searchName) : ''}&ts=${this.params.ts}&apikey=${this.params.apikey}&hash=${this.params.hash}`)
            .then((response) => {
              this.heroes = response.data.data.results
              this.limit = response.data.data.limit
              if (window.localStorage.getItem('footer') === null) {
                this.footer = {
                  htmlLink: response.data.attributionHTML,
                  text: response.data.attributionText,
                  copyright: response.data.copyright
                }
                window.localStorage.setItem('footer', JSON.stringify(this.footer))
              }
            })
          this.loading = false
        }, 300)
      }
    }
  }
}
</script>

<style scoped>

.page-marvel {
  background-image: url("https://i.annihil.us/u/prod/marvel/html_pages_assets/marvel-unlimited-sellpage/prod/musellpage-plus-kit-bg.db26e8ed.jpg");
  background-attachment: scroll;
  background-repeat: repeat-y;
  webkit-box-shadow: -1px 6px 14px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 6px 14px -2px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 6px 14px -2px rgba(0, 0, 0, 0.75);
}

.loading {
  text-align: center;
  position: absolute;
  z-index: 9;
  padding: 8px 18px
}

.search-section {
  display: flex;
  padding-left: 1rem;
  padding-bottom: 1rem;
  margin: 1rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.3)
}

.search-section .header {
  margin-right: 1rem;
  color: rgba(255, 255, 255, 0.5)
}

.card-container {
  //border-radius: 10px;
  background: black;
  webkit-box-shadow: -1px 6px 14px -2px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: -1px 6px 14px -2px rgba(255, 255, 255, 0.75);
  box-shadow: -1px 6px 14px -2px rgba(255, 255, 255, 0.75);
  transition: 0.3s ease-in
}

.card-container:hover {
//border-radius: 10px;
  background: rgba(235, 35, 40, 0.75);
  webkit-box-shadow: -1px 6px 14px -2px rgba(235, 35, 40, 1);
  -moz-box-shadow: -1px 6px 14px -2px rgba(235, 35, 40, 1);
  box-shadow: -1px 6px 14px -2px rgba(235, 35, 40, 1);
  transition: 0.3s ease-in-out;
}

.card-description {
  background: black;
  color: aliceblue;
  font-family: Verdana, serif, normal;
  opacity: 15%;
  transition: 0.3s ease-out;
}

.card-description:hover {
  opacity: 75%;
  transition: 0.3s ease-in;
}

.image-thumbnail {
  width: 150px;
  //border-radius: 50%;
  margin: auto 10px
}
.info-marvel {
  text-align: left
}

.info-marvel label {
  margin: 0
}

.info-marvel p {
  font-size: 16px;
  font-weight: bold
}

.date-hero {
  display: inline
}

.date-hero label {
  margin: 0
}

</style>
