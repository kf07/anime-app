<template>
  <ul class="grid">
    <li v-for="item in items" :key="item.id">
      <h3 class="grid-title">
        <a :href="item.public_url" target="_blank" class="title_link">{{
          item.title
        }}</a>
      </h3>
      <a
        :href="`https://twitter.com/${item.twitter_account}?lang=ja`"
        target="_blank"
        class="twitter_id"
        ><fa :icon="faTwitter" />{{ item.twitter_account }}</a
      >
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import Fa from 'vue-fa'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default {
  components: {
    Fa
  },
  data() {
    return {
      faTwitter
    }
  },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  li {
    border: 2px solid #ccc;
    min-height: 100px;
    padding: 20px;
  }
  .grid-title {
    font-size: 16px;
    a {
      color: #333;
    }
  }
  .twitter_id {
    display: block;
    color: #1ea2f1;
  }
}
</style>
