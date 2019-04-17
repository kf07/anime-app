<template>
  <section class="container">
    <Select />
    <Card />
  </section>
</template>

<script>
import Card from '../components/card'
import Select from '../components/Select'
export default {
  components: { Select, Card },
  async asyncData({ store }) {
    if (store.getters.items.length) {
      return
    }
    await store.dispatch('fetchItems')
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}
</style>
