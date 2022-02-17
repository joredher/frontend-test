<template>
  <b-modal id="modalPrime" hide-footer no-close-on-backdrop v-model="show" centered>
    <template #modal-header="{ close }">
      <h5>Prime Numbers Calc</h5>
      <b-button size="sm" variant="outline-danger" @click="closed()">X</b-button>
    </template>
    <b-container fluid>
      <b-row>
        <b-form inline>
          <b-input-group key="number-start" prepend="#" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="number-start"
                          type="number"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          placeholder="Start number"
                          v-model.number="startNumber"
                          :min="1"
            ></b-form-input>
          </b-input-group>
          <b-input-group key="number-end" prepend="#" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="number-end"
                          type="number"
                          class="mb-2 mr-sm-2 mb-sm-0"
                          placeholder="End number"
                          v-model.number="endNumber"
                          :min="startNumber"
            ></b-form-input>
          </b-input-group>
        </b-form>
      </b-row>
      <b-row>
        <b-col cols="12" class="mt-4 d-flex align-items-start text-break">
          <h3 v-text="`Result: ${numbersPrime.length ? numbersPrime.toString() : '#'}`"></h3>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: 'PrimeNumbers',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    startNumber: 1,
    endNumber: 10,
    numbersPrime: []
  }),
  watch: {
    'starNumber': {
      handler: function handler (val) {
        if (val) {
          this.getResult([val, this.endNumber])
        }
      },
      immediate: true
    },
    'endNumber': {
      handler: function handler (val) {
        if (val) {
          this.getResult([this.startNumber, val])
        }
      },
      immediate: true
    }
  },
  methods: {
    // getResult => Método que calcula y genera los números primos.
    getResult: function (array) {
      let start = array[0]
      let stop = array[1]
      let step = 1
      if (start && stop) {
        this.numbersPrime = []
        Array.from({length: (stop - start) / step + 1}, (_, i) => (start + (i * step))).map((x) => {
          if (this.calcPrimes(x)) this.numbersPrime.push(x)
        })
      }
    },
    calcPrimes: function (number) {
      for (let j = 2; j < number; j++) {
        if (number % j === 0) return false
      }
      return number !== 1
    },
    closed: function () {
      this.numbersPrime = []
      this.startNumber = 1
      this.endNumber = 10
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
