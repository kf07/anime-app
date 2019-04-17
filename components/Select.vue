<template>
  <div class="wrapper">
    <select v-model="selectedYear" @change="handleInputYear">
      <option value="2015">2015</option>
      <option value="2016">2016</option>
      <option value="2017">2017</option>
      <option value="2018">2018</option>
      <option value="2019">2019</option>
    </select>
    <select v-model="selected" @change="handleInput">
      <option value="1">冬</option>
      <option value="2">春</option>
      <option value="3">夏</option>
      <option value="4">秋</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      selected: '1',
      selectedYear: '2019'
    }
  },
  methods: {
    handleInput() {
      this.$store.dispatch('changeItems', {
        year: this.selectedYear,
        season: this.selected
      })
    },
    handleInputYear() {
      this.$store.dispatch('changeItems', {
        year: this.selectedYear,
        season: this.selected
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  text-align: left;
  margin: 0 0 15px;
}
select {
  width: 80px;
  vertical-align: middle;
  height: 1.7em;
}
</style>
