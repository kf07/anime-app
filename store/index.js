export const state = () => ({
  items: []
})

export const mutations = {
  setItems(state, { items }) {
    state.items = items
  }
}

export const actions = {
  async fetchItems({ commit }) {
    const items = await this.$axios.$get(
      'http://api.moemoe.tokyo/anime/v1/master/2018/4'
    )
    commit('setItems', { items })
  },
  async changeItems({ commit }, data) {
    const items = await this.$axios.$get(
      `http://api.moemoe.tokyo/anime/v1/master/${data.year}/${data.season}`
    )
    commit('setItems', { items })
  }
}

export const getters = {
  items: state => state.items
}
