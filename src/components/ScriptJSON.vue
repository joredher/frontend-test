<template>
  <b-modal id="modalScript" hide-footer no-close-on-backdrop v-model="show" centered>
    <template #modal-header="{ close }">
      <h5>Script JSON</h5>
      <b-button size="sm" variant="outline-danger" @click="closed()">X</b-button>
    </template>
    <b-container fluid>
      <b-row>
        <h4>Values:</h4>
        <pre v-text="this.values"></pre>
        <h4>JSON:</h4>
        <pre v-text="this.json"></pre>
      </b-row>
      <b-row>
        <h4>Result:</h4>
        <b-col cols="12" class="mt-4 d-flex align-items-start text-break">
          <pre v-text="this.result"></pre>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: 'ScriptJSON',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    values: {
      1: {
        carrier: 'CCH',
        service: 'DEX'
      },
      17: {
        carrier: 'CHP',
        service: 'express'
      }
    },
    json: {
      data: {
        BUIN: {
          limit: 1,
          over_carrier_service_id: 17,
          under_carrier_service_id: 17
        },
        LAJA: {
          limit: 1,
          over_carrier_service_id: 1,
          under_carrier_service_id: 1
        },
        LEBU: {
          limit: 1,
          over_carrier_service_id: 1,
          under_carrier_service_id: 1
        },
        LOTA: {
          limit: 1,
          over_carrier_service_id: 17,
          under_carrier_service_id: 17
        }
      }
    },
    result: {}
  }),
  watch: {
    'show': function (val) {
      if (val) {
        this.getResult()
      }
    }
  },
  methods: {
    getResult: function () {
      for (let item in this.json.data) {
        this.result[item] = {limit: null, over: {}, under: {}}
        this.result[item].limit = this.json.data[item].limit
        for (let value in this.values) {
          if (this.json.data[item]['over_carrier_service_id'].toString() === value) {
            this.result[item].over = this.values[value]
          }
          if (this.json.data[item]['under_carrier_service_id'].toString() === value) {
            this.result[item].under = this.values[value]
          }
        }
      }
    },
    closed: function () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
