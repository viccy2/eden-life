import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products : [],
    product : null
  },
  getters: {
  },
  mutations: {
    SET_PRODUCTS : (state, products) => {
      state.products = products
    },
    SET_PRODUCT : (state, product) => {
      state.product = product
    }
  },
  actions: {
     getProducts : ({commit}) => {
      axios.get('https://dog.ceo/api/breeds/image/random/100')
      .then(response => {
        commit('SET_PRODUCTS', response.data.message)
      })
    },
    getProduct : ({commit}, productId) => {
      axios.get(`http://localhost:5000/app/api/user/${productId}`)
      .then(response => {
        commit('SET_PRODUCT', response.data)
      })
    }
  },
  modules: {
  }
})
