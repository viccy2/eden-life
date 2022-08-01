import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products : [],
    
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS : (state, products) => {
      state.products = products
    }
  },
  actions: {
     getProducts : ({commit}) => {
      axios.get('https://dog.ceo/api/breeds/image/random/100')
      .then(response => {
        commit('SET_PRODUCTS', response.data.message)
      })
    }
  },
  modules: {
  }
})
