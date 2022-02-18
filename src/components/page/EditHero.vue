<template>
  <b-modal id="modalEditHero" hide-footer no-close-on-backdrop v-model="show" centered>
    <template #modal-header="{ close }">
      <h5>Editing to {{ hero.name ? hero.name : 'heroe' }}</h5>
      <b-button size="sm" variant="outline-danger" @click="show = false">X</b-button>
    </template>
    <b-container fluid>
      <b-row>
        <b-form inline>
          <b-input-group key="name" prepend="Name:" class="mb-2 mr-sm-2 mb-sm-2">
            <b-form-input id="name"
                          type="text"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          placeholder="Type name..."
                          v-model="hero.name"
            ></b-form-input>
          </b-input-group>
          <b-input-group key="description" prepend="#" class="mb-2 mr-sm-2 mb-sm-2">
            <b-form-input id="description"
                          type="text"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          placeholder="Type description..."
                          v-model="hero.description"
            ></b-form-input>
          </b-input-group>
        </b-form>
      </b-row>
      <b-row class="mt-2">
        <b-col cols="12" class="d-flex justify-content-end">
          <b-button size="md" class="bg-danger border-0" @click.prevent="updateItem">Update</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: 'EditHero',
  data: () => ({
    hero: {
      id: null,
      name: null,
      description: null
    },
    show: false
  }),
  watch: {
    'show': {
      handler: function (val) {
        if (!val) {
          this.hero = {
            id: null,
            name: null,
            description: null
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    edit: function (data) {
      this.hero = JSON.parse(JSON.stringify(data))
      this.show = true
    },
    updateItem: function () {
      this.$emit('update', this.hero)
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
